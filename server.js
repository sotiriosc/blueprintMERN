const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors'); // Import cors
const port = process.env.PORT || 5000;
const Post = require('./models/Post');
const Comment = require('./models/Comment');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/Users');

    

// Replace '<YOUR_MONGODB_CONNECTION_STRING>' with your actual connection string
mongoose.connect('mongodb://localhost:27017/blueprint', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => console.error('connection error:', error));
db.once('open', () => {
  console.log('Database connected successfully');
});

const authMiddleware = require('./authMiddleware');
app.use(authMiddleware);

const schema = buildSchema(`
  type Post {
    id: ID!
    title: String!
    content: String!
    date: String!
    author: String!
  }
  
  type Comment {
    id: ID!
    postId: ID!
    content: String!
    date: String!
    author: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    posts: [Post!]!
    post(id: ID!): Post!
    comments(postId: ID!): [Comment!]!
    login(email: String!, password: String!): User!
  }
  
  type Mutation {
    addPost(title: String!, content: String!, author: String!): Post!
    addComment(postId: ID!, content: String!, author: String!): Comment!
    register(name: String!, email: String!, password: String!): User!
  }
`);

const root = {
    posts: async () => {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
    post: async ({ id }) => {
      try {
        const post = await Post.findById(id);
        return post;
      } catch (err) {
        throw new Error(err);
      }
    },
    comments: async ({ postId }) => {
      try {
        const comments = await Comment.find({ postId });
        return comments;
      } catch (err) {
        throw new Error(err);
      }
    },
    addPost: async ({ title, content }, req) => {
      if (!req.isAuth) {
        throw new Error('Not authenticated');
      }
    
      const post = new Post({
        title,
        content,
        author: req.userId,  // change this to the authenticated user's ID
        date: new Date().toISOString()
      });
    
      try {
        const newPost = await post.save();
        return newPost;
      } catch (err) {
        throw new Error(err);
      }
    },
    
    addComment: async ({ postId, content, author }) => {
      if (!req.isAuth) {
        throw new Error('Not authenticated');
      }
      
      const comment = new Comment({
        postId,
        content,
        author,
        date: new Date().toISOString()
      });
  
      try {
        const newComment = await comment.save();
        return newComment;
      } catch (err) {
        throw new Error(err);
      }
    },
    
    
    register: async ({ name, email, password }) => {
      try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
          throw new Error('User already exists');
        }
    
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create new user
        user = new User({
          name,
          email,
          password: hashedPassword
        });
    
        // Save user to database
        const result = await user.save();
    
        return result;
      } catch (err) {
        throw new Error(err);
      }
    },
    
    login: async ({ email, password }) => {
      try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('User not found');
        }
    
        // Compare password with hashed password in database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error('Invalid credentials');
        }
    
        // Create and return JWT
        const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
        return { ...user._doc, id: user.id, token };
      } catch (err) {
        throw new Error(err);
      }
    }};  // <-- replace semicolon with comma here
    
    

  

  app.use(cors()); // Use cors as middleware before your routes

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
