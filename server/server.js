require('dotenv').config();
const { getUserFromToken, signToken } = require('./utils/auth');
const authMiddleware = require('./utils/authMiddleware');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const chatGpt = require('./utils/chatGpt')
// Import and configure Stripe
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// Import the Apollo Server and the GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const fs = require('fs');
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');




const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let token = req.headers.authorization || '';
    // console.log('Token in Apollo Server context:', token);

    // Remove 'Bearer ' prefix if present
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length).trim();
    }
    
    // console.log('Processed Server token:', token);

    // If the token is empty, return minimal context
    if (!token) {
      return { user: null };
    }

    // Try to retrieve a user with the token
    try {
      const user = await getUserFromToken(token);
      return { user };
    } catch (error) {
      // If there's an error (like an expired token), log it and return minimal context
      console.error('Error in token processing:', error.message);
      return { user: null };
    }
  },
});

app.get('/graphql', expressPlayground({ endpoint: '/graphql' }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(authMiddleware);



// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(helmet({
  contentSecurityPolicy: false,
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Received request for ${req.method} ${req.url}`);
  next();
});



// const webhookSecret = "whsec_7ae56179c3bf7a7a627c9753f9c365abfc39348d6badd6c760581f9498c1ffd2"; // Your actual webhook secret
const endpointSecret = "whsec_7ae56179c3bf7a7a627c9753f9c365abfc39348d6badd6c760581f9498c1ffd2";

app.post('/webhook', express.json({type: 'application/json'}), async (request, response) => {
  const event = request.body;

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;

      // Assuming the customer id is stored in the metadata of the payment intent
      const customerId = paymentIntent.metadata.customerId;

      // Find the user with the given customer id and update their fields
      await User.findOneAndUpdate(
        { stripeCustomerId: customerId },
        {
          isSubscribed: true,
          stripeCustomerId: paymentIntent.customer // Update the stripeCustomerId with the id from the payment intent
        }
      );

      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  response.json({received: true});
});




const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../client/build/index.html'));
  // });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };

app.get('/sw.js', (req, res) => {
  // Check if the service worker file exists in the correct path
  if (process.env.NODE_ENV === 'production' && fs.existsSync(path.join(__dirname, '../client/build/sw.js'))) {
    res.sendFile(path.resolve(__dirname, '../client/build/sw.js'));
  } else {
    // In development mode, send a 404 as there likely won't be a service-worker file
    res.status(404).send();
  }
});

// Endpoint to handle Stripe checkout session completion


app.get('/checkout-session', async (req, res) => {
  const sessionId = req.query.session_id;
  
  if (!sessionId) {
    return res.status(400).send('Session ID is required');
  }

  try {
    // Fetch the session details from Stripe using the provided session ID
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return res.status(404).send('Session not found');
    }

    // Optionally, find the user associated with this session and update as needed
    // const user = await User.findOne({ stripeCustomerId: session.customer });
    // if (user) {
    //   // Update user data as needed
    // }

    // Return the session details to the client
    res.json(session);
  } catch (error) {
    console.error('Error retrieving checkout session:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.post('/chat-gpt', authMiddleware, async (req, res) => {
  if (!req.user) {
    return res.status(403).send('You must be logged in to use this feature');
  }

  const userPrompt = req.body.prompt;
  
  try {
    const chatResponse = await chatGpt(userPrompt);
    
    // Save the search to the user's document
    await User.findByIdAndUpdate(req.user._id, {
      $push: { searches: { query: userPrompt } }
    });

    res.json({ reply: chatResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error processing your request');
  }
});



  

// Endpoint to create a new Stripe customer
app.post('/create-customer', async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      email: req.body.email, // Customer's email, e.g., from your application's signup form
    });
    await User.findOneAndUpdate({ email: req.body.email }, { stripeCustomerId: customer.id });
    res.json({ customerId: customer.id });
  } catch (error) {
    console.error('Error creating Stripe customer:', error);
    res.status(400).send('Error creating customer');
  }
});


app.post('/create-checkout-session', authMiddleware, async (req, res) => {
  try {
    // console.log('Creating checkout session');
    // console.log("users info", req.user);
    if (!req.user) {
      return res.status(403).send('You must be logged in to use this feature');
    }
    const user = req.user; // Get the user from the request
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: 'price_1OOtI3By17P1QCFTPVjXwSZ7', 
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: 'http://localhost:3001/myProfile?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3001/myProfile',
      client_reference_id: user._id.toString(),
    });
    res.json({ id: session.id });
  } catch (err) {
    console.error('Error creating checkout session:', err);
    res.status(500).json({ error: err.message });
}
});


// Endpoint to create a subscription
app.post('/create-subscription', async (req, res) => {
  try {
    const { customerId } = req.body; // ID of the existing customer in Stripe
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: 'price_1OOtI3By17P1QCFTPVjXwSZ7' }],
      expand: ['latest_invoice.payment_intent'],
    });
    res.json(subscription);
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(400).send('Error creating subscription');
  }
});

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})


// Endpoint to update a subscription

// Call the async function to start the server
startApolloServer();
