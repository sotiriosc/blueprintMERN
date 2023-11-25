const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const chatGpt = require('./utils/chatGpt')
require('dotenv').config();
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
  context: authMiddleware,
});

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
