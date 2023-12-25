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

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(authMiddleware);

// Set up GraphQL Playground route
app.get('/graphql', expressPlayground({ endpoint: '/graphql' }));

const webhookSecret = "whsec_7ae56179c3bf7a7a627c9753f9c365abfc39348d6badd6c760581f9498c1ffd2"; // Your actual webhook secret

app.post('/webhook', bodyParser.raw({type: 'application/json'}), async (request, response) => {
  const sig = request.headers['stripe-signature'];
  let event;

  try {
      event = stripe.webhooks.constructEvent(request.body, sig, webhookSecret);

      // Handle the checkout.session.completed event
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        // Here you can handle the checkout session completion
        // For example, update user's subscription status in your database
        console.log(`Handling checkout.session.completed for session ID: ${session.id}`);
        const user_id = session.client_reference_id;

        try {
          // Update user's subscription status in your database
          const updatedUser = await User.findByIdAndUpdate(user_id, {
            isSubscribed: true,
            stripeCustomerId: session.customer
          }, { new: true });

          console.log('User subscription updated:', updatedUser);
        } catch (err) {
          console.error('Error updating user subscription:', err);
        }
      }

      // ... handle other event types as necessary

    } catch (err) {
        console.error(`Webhook Error: ${err.message}`);
        return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Confirmation response to Stripe
    response.json({received: true});
});


app.post('/webhook', bodyParser.raw({type: 'application/json'}), async (request, response) => {
  const sig = request.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(request.body, sig, webhookSecret);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const user_id = session.client_reference_id;

      console.log(`Webhook received for user ID: ${user_id}`);

      try {
        const updatedUser = await User.findByIdAndUpdate(
          mongoose.Types.ObjectId(user_id), // Convert user_id to ObjectId before querying
          { isSubscribed: true, stripeCustomerId: session.customer },
          { new: true }
        );

        console.log('User updated:', updatedUser);
      } catch (err) {
        console.error('Error updating user in database:', err);
      }
    }

    response.json({ received: true });
  } catch (err) {
    console.error('Error in handling webhook:', err);
    response.status(400).send(`Webhook Error: ${err.message}`);
  }
});




// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(helmet({
  contentSecurityPolicy: false,
}));


app.use(bodyParser.json());


app.get('/sw.js', (req, res) => {
  // Check if the service worker file exists in the correct path
  if (process.env.NODE_ENV === 'production' && fs.existsSync(path.join(__dirname, '../client/build/sw.js'))) {
    res.sendFile(path.resolve(__dirname, '../client/build/sw.js'));
  } else {
    // In development mode, send a 404 as there likely won't be a service-worker file
    res.status(404).send();
  }
});

app.post('/create-checkout-session', authMiddleware, async (req, res) => {
  try {
    console.log('Creating checkout session');
    console.log("users info", req.user);
    if (!req.user) {
      return res.status(403).send('You must be logged in to use this feature');
    }
    const user = req.user; // Get the user from the request
    console.log("Setting client_reference_id to:", user._id.toString());
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: 'price_1OOtI3By17P1QCFTPVjXwSZ7', 
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: 'http://localhost:3001/myProfile?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3001/cancel',
      client_reference_id: user._id.toString(),
    });
    console.log("here it is2", session);
    res.json({ id: session.id });
  } catch (err) {
    console.error('Error creating checkout session:', err);
    res.status(500).json({ error: err.message });
}
});


// Endpoint to handle Stripe checkout session completion
app.get('/checkout-session', async (req, res) => {
  const sessionId = req.query.session_id;
  if (!sessionId) {
      return res.status(400).send('Session ID is required');
  }

  try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const user = await User.findOne({ email: session.customer_email });
      if (user) {
          user.isSubscribed = true;
          user.stripeCustomerId = session.customer;
          await user.save();
          res.json({ isSubscribed: user.isSubscribed, stripeCustomerId: user.stripeCustomerId });
      } else {
          res.status(404).send('User not found');
      }
  } catch (error) {
      console.error('Error handling checkout session:', error);
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



// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };

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


// This would go after all your other routes
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

