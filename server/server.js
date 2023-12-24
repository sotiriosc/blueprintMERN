// require('dotenv').config();
// const { authMiddleware, getUserFromToken, signToken } = require('./utils/auth');
// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const expressPlayground = require('graphql-playground-middleware-express').default;
// const path = require('path');
// const helmet = require('helmet');
// const bodyParser = require('body-parser');
// const chatGpt = require('./utils/chatGpt')
// // Import and configure Stripe
// const Stripe = require('stripe');
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// // Import the Apollo Server and the GraphQL schema
// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');
// const fs = require('fs');
// const cors = require('cors');
// const User = require('./models/User');


// const PORT = process.env.PORT || 3001;
// const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: async ({ req }) => {
//     let token = req.headers.authorization || '';
//     // console.log('Token in Apollo Server context:', token);

//     // Remove 'Bearer ' prefix if present
//     if (token.startsWith('Bearer ')) {
//       token = token.slice(7, token.length).trim();
//     }
    
//     // console.log('Processed Server token:', token);

//     // If the token is empty, return minimal context
//     if (!token) {
//       return { user: null };
//     }

//     // Try to retrieve a user with the token
//     try {
//       const user = await getUserFromToken(token);
//       return { user };
//     } catch (error) {
//       // If there's an error (like an expired token), log it and return minimal context
//       console.error('Error in token processing:', error.message);
//       return { user: null };
//     }
//   },
// });







// // Set up GraphQL Playground route
// app.get('/graphql', expressPlayground({ endpoint: '/graphql' }));

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(cors());

// // Serve up static assets
// app.use('/images', express.static(path.join(__dirname, '../client/images')));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// app.use(helmet({
//   contentSecurityPolicy: {
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: [
//         "'self'", 
//         "https://js.stripe.com", 
//         "'unsafe-inline'", 
//         // include other script sources as needed
//       ],
//       // ... other CSP directives
//     },
//   },
// }));

// const crypto = require('crypto');

// app.use((req, res, next) => {
//   // Generate a nonce
//   const nonce = crypto.randomBytes(16).toString('base64');

//   // Set the CSP header with nonce
//   res.setHeader('Content-Security-Policy', `script-src 'self' 'nonce-${nonce}' https://js.stripe.com;`);

//   // Make the nonce available to views
//   res.locals.nonce = nonce;

//   next();
// });

// // ... rest of your server setup


// app.get('/sw.js', (req, res) => {
//   // Check if the service worker file exists in the correct path
//   if (process.env.NODE_ENV === 'production' && fs.existsSync(path.join(__dirname, '../client/build/sw.js'))) {
//     res.sendFile(path.resolve(__dirname, '../client/build/sw.js'));
//   } else {
//     // In development mode, send a 404 as there likely won't be a service-worker file
//     res.status(404).send();
//   }
// });

// // This would go after all your other routes
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

// app.post('/chat-gpt', authMiddleware, async (req, res) => {
//   if (!req.user) {
//     return res.status(403).send('You must be logged in to use this feature');
//   }

//   const userPrompt = req.body.prompt;
  
//   try {
//     const chatResponse = await chatGpt(userPrompt);
    
//     // Save the search to the user's document
//     await User.findByIdAndUpdate(req.user._id, {
//       $push: { searches: { query: userPrompt } }
//     });

//     res.json({ reply: chatResponse });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Error processing your request');
//   }
// });

// // Endpoint to create a new Stripe customer
// app.post('/create-customer', async (req, res) => {
//   try {
//     const customer = await stripe.customers.create({
//       email: req.body.email, // Customer's email, e.g., from your application's signup form
//     });
//     await User.findOneAndUpdate({ email: req.body.email }, { stripeCustomerId: customer.id });
//     res.json({ customerId: customer.id });
//   } catch (error) {
//     console.error('Error creating Stripe customer:', error);
//     res.status(400).send('Error creating customer');
//   }
// });

// // Endpoint to create a subscription
// app.post('/create-subscription', async (req, res) => {
//   try {
//     const { customerId } = req.body; // ID of the existing customer in Stripe
//     const subscription = await stripe.subscriptions.create({
//       customer: customerId,
//       items: [{ price: 'price_1OOtI3By17P1QCFTPVjXwSZ7' }],
//       expand: ['latest_invoice.payment_intent'],
//     });
//     res.json(subscription);
//   } catch (error) {
//     console.error('Error creating subscription:', error);
//     res.status(400).send('Error creating subscription');
//   }
// });

// app.post('/webhook', bodyParser.raw({type: 'application/json'}), async (req, res) => {
//   let event;

//   try {
//     // Verify the event by checking the signature using Stripe's library
//     event = stripe.webhooks.constructEvent(
//       req.body,
//       req.headers['stripe-signature'],
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err) {
//     console.log(`⚠️  Webhook signature verification failed.`);
//     return res.sendStatus(400);
//   }

//   // Handle the checkout.session.completed event
//   if (event.type === 'checkout.session.completed') {
//     const session = event.data.object;
//     // Retrieve the user ID from the session (assuming you're storing it there)
//     // And update the user's subscription status in your database
//     const userId = session.client_reference_id;
//     await User.findByIdAndUpdate(userId, { isSubscribed: true });
//   }

//   // Return a response to acknowledge receipt of the event
//   res.json({received: true});
// });

// // Create a new instance of an Apollo server with the GraphQL schema
// const startApolloServer = async () => {
//   await server.start();
//   server.applyMiddleware({ app });
  
//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//     })
//   })
//   };
  
// // Call the async function to start the server
// startApolloServer();

require('dotenv').config();
const { authMiddleware, getUserFromToken, signToken } = require('./utils/auth');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const path = require('path');

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


const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || '';
    console.log('Token in Apollo Server context:', token);

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






// Set up GraphQL Playground route
app.get('/graphql', expressPlayground({ endpoint: '/graphql' }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/sw.js', (req, res) => {
  // Check if the service worker file exists in the correct path
  if (process.env.NODE_ENV === 'production' && fs.existsSync(path.join(__dirname, '../client/build/sw.js'))) {
    res.sendFile(path.resolve(__dirname, '../client/build/sw.js'));
  } else {
    // In development mode, send a 404 as there likely won't be a service-worker file
    res.status(404).send();
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
      items: [{ price: 'price_1OOtI3By17P1QCFTPVjXwSZ7' }],
      expand: ['latest_invoice.payment_intent'],
    });
    res.json(subscription);
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(400).send('Error creating subscription');
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
  
// Call the async function to start the server
startApolloServer();