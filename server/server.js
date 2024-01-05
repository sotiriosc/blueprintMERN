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
  // console.log(`Received request for ${req.method} ${req.url}`);
  next();
});


app.post('/create-checkout-session', authMiddleware, async (req, res) => {
  try {
    console.log('Creating checkout session');
    console.log("users info", req.user);

    if (!req.user) {
      return res.status(403).send('You must be logged in to use this feature');
    }

    const user = req.user; // Get the user from the request

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: 'price_1OUynZBy17P1QCFTWPMYj5zY', 
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: 'https://www.balancedblueprint.ca/myProfile?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://www.balancedblueprint.ca/myProfile',
      metadata: { userId: user._id.toString() } // Add user's _id to metadata
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error('Error creating checkout session:', err);
    res.status(500).json({ error: err.message });
  }
});



// Stripe Webhook endpoint









const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../client/build/index.html'));
  // });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      // console.log(`API server running on port ${PORT}!`);
      // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
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

    // Find the user associated with this session and update as needed
    const userId = session.metadata.userId;
    if (userId) {
      const user = await User.findOne({ _id: new mongoose.Types.ObjectId(userId) });
      if (user) {
        // Update user data as needed
        // For example, update the stripeCustomerId and isSubscribed status
        await User.findByIdAndUpdate(userId, {
          stripeCustomerId: session.customer,
          isSubscribed: true // Update this depending on your business logic
        });
      }
    }

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





// Endpoint to create a subscription
app.post('/create-subscription', async (req, res) => {
  try {
    const { customerId } = req.body; // ID of the existing customer in Stripe
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: 'price_1OUynZBy17P1QCFTWPMYj5zY' }],
      expand: ['latest_invoice.payment_intent'],
    });
    res.json(subscription);
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(400).send('Error creating subscription');
  }
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;


app.post('/webhook', express.json({type: 'application/json'}), async (request, response) => {
  const event = request.body;


  try {
    
    let userId; // Declare userId here for broader scope
    let stripeCustomerId;

    switch (event.type) {

      case 'payment_intent.succeeded':
  try {
    const paymentIntent = event.data.object;
    stripeCustomerId = paymentIntent.customer;

    if (stripeCustomerId) {
      // Update isSubscribed to true in your database
      const updatedUser = await User.findOneAndUpdate(
        { stripeCustomerId: stripeCustomerId },
        { isSubscribed: true },
        { new: true }
      );
      console.log(`Subscription updated to true for customer ID: ${stripeCustomerId}, user: ${updatedUser}`);
    } else {
      console.error('No Stripe Customer ID found in payment_intent.succeeded');
    }
  } catch (error) {
    console.error('Error handling payment_intent.succeeded:', error);
  }
  break;

  case 'checkout.session.completed':
    const session = event.data.object; // Access the session object
    userId = session.metadata.userId; // Get userId from metadata
  
    if (userId) {
      // Update stripeCustomerId and isSubscribed in the database
      const updatedUser = await User.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(userId) },
        { stripeCustomerId: session.customer, isSubscribed: true },
        { new: true }
      );
      console.log(`User ID: ${userId} updated with Stripe Customer ID: ${session.customer} and subscription set to true`);
    } else {
      console.error('No userId found in metadata for checkout.session.completed');
    }
    break;
  //       case 'customer.subscription.created':
  // const subscriptionCreated = event.data.object;
  // const stripeCustomerIdForSubscription = subscriptionCreated.customer;
  
  // if (stripeCustomerIdForSubscription) {
  //   try {
  //     const updatedUser = await User.findOneAndUpdate(
  //       { stripeCustomerId: stripeCustomerIdForSubscription },
  //       { isSubscribed: true },
  //       { new: true }
  //     );
  //     console.log(`User subscription status updated on customer.subscription.created for customer ID: ${stripeCustomerIdForSubscription}`);
  //   } catch (error) {
  //     console.error('Error updating user on customer.subscription.created:', error);
  //   }
  // } else {
  //   console.error('No Stripe Customer ID found in customer.subscription.created');
  // }
  // break;


    
          case 'customer.subscription.updated':
            const updatedSubscription = event.data.object;
            const currentStripeCustomerId = updatedSubscription.customer;
            const isCurrentlySubscribed = updatedSubscription.status === 'active' || updatedSubscription.status === 'trialing';
          
            try {
              // Find the user by Stripe Customer ID and update
              await User.findOneAndUpdate(
                { stripeCustomerId: currentStripeCustomerId },
                { isSubscribed: isCurrentlySubscribed },
                { new: true }
              );
            } catch (error) {
              console.error('Error updating user on customer.subscription.updated:', error);
            }
            break;

            case 'customer.subscription.deleted':
              const subscriptionDeleted = event.data.object;
              const stripeCustomerIdDeleted = subscriptionDeleted.customer;
            
              // Update isSubscribed to false when a subscription is deleted
              if (stripeCustomerIdDeleted) {
                await User.findOneAndUpdate(
                  { stripeCustomerId: stripeCustomerIdDeleted },
                  { isSubscribed: false },
                  { new: true }
                );
              } else {
                console.error('No Stripe Customer ID found in customer.subscription.deleted');
              }
              break;
      

              // case 'invoice.payment_succeeded':
              //   const successfulInvoice = event.data.object;
              //   const stripeCustomerIdForInvoice = successfulInvoice.customer;
                
              //   if (stripeCustomerIdForInvoice) {
              //     try {
              //       const updatedUser = await User.findOneAndUpdate(
              //         { stripeCustomerId: stripeCustomerIdForInvoice },
              //         { isSubscribed: true },
              //         { new: true }
              //       );
              //       console.log(`Updated user subscription status on invoice.payment_succeeded for customer ID: ${stripeCustomerIdForInvoice}`);
              //     } catch (error) {
              //       console.error('Error updating user on invoice.payment_succeeded:', error);
              //     }
              //   } else {
              //     console.log('No Stripe Customer ID found for invoice.payment_succeeded');
              //   }
              //   break;

      
   

    case 'invoice.payment_failed':
      const failedInvoice = event.data.object;
      stripeCustomerId = failedInvoice.customer;
      await User.findOneAndUpdate(
        { stripeCustomerId: stripeCustomerId },
        { isSubscribed: false },
        { new: true }
      );
      break;

      

        // case 'payment_intent.created':
        // try {
        //   const paymentIntent = event.data.object;
        //   // Here, you're not declaring stripeCustomerId, just assigning it a new value
        //   stripeCustomerId = paymentIntent.customer;
      
        //   if (stripeCustomerId) {
        //     // Update isSubscribed to true in your database
        //     await User.findOneAndUpdate(
        //       { stripeCustomerId: stripeCustomerId },
        //       { isSubscribed: true },
        //       { new: true }
        //     );
        //   } else {
        //     console.error('No Stripe Customer ID found in payment_intent.succeeded');
        //   }
        // } catch (error) {
        //   console.error('Error handling payment_intent.succeeded:', error);
        //   // Since stripeCustomerId is declared in a higher scope, it can be safely used here
        // }
        // break;

        
        
        

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    response.json({received: true});
  } catch (error) {
    console.error('Error in processing webhook:', error);
    response.status(500).json({ error: 'Internal Server Error' });
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

// Server-side (Node.js with Express)
app.post('/cancel-subscription', authMiddleware, async (req, res) => {
  if (!req.user) {
    return res.status(403).send('You must be logged in to cancel a subscription');
  }

  try {
    const user = req.user;

    // Retrieve the user's current subscription from Stripe
    const subscriptions = await stripe.subscriptions.list({
      customer: user.stripeCustomerId,
      status: 'active',
      limit: 1,
    });

    if (subscriptions.data.length === 0) {
      return res.status(404).send('Active subscription not found');
    }

    // Cancel the subscription
    await stripe.subscriptions.del(subscriptions.data[0].id);

    // Update the user's record in your database
    // Set stripeCustomerId to null
    await User.findByIdAndUpdate(user._id, { isSubscribed: false, stripeCustomerId: null });

    res.json({ message: 'Subscription canceled successfully' });
  } catch (error) {
    console.error('Error canceling subscription:', error);
    res.status(500).send('Internal Server Error');
  }
});





// Endpoint to update a subscription

// Call the async function to start the server
startApolloServer();
