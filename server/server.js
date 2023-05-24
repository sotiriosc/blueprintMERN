const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();

// Import your schema definitions
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

// setup express app
// setup express app
const app = express();
app.use(cors());
app.use(express.json()); // allows us to use JSON data

// setup Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// call server.start() before applying middleware
server.start().then(() => {
    server.applyMiddleware({ app });

    // connect to MongoDB
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on('connected', () => {
        console.log('Mongoose is connected');
    });

    // setup server port
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
