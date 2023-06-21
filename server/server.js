const express = require('express');
const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const path = require('path');
const { allow, rule, shield } = require('graphql-shield');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


const isAdmin = rule()((parent, args, { user }) => user && user.isAdmin);

const permissions = shield({
  Query: {
    // Define rules for your Query type here
  },
  Mutation: {
    // Define rules for your Mutation type here
    addBlog: isAdmin,
    addProduct: isAdmin,
  },
});

const getUser = async (token) => {
  try {
    if (token) {
      const { id } = jwt.verify(token, SECRET_KEY);
      return await User.findById(id);
    }
    return null;
  } catch (err) {
    return null;
  }
}

// Create a new instance of an Apollo server with the GraphQL schema
// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    try {
      const authenticatedReq = authMiddleware({ req });
      const user = authenticatedReq.user || null; // Return null if no user
      return { user };
    } catch (err) {
      console.error(err); // log error details for debugging
      return { user: null }; // Return context with null user in case of error
    }
  },
  middlewares: [permissions],
  introspection: true, // Enable introspection
});



const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  });
};
  
// Call the async function to start the server
startApolloServer();
