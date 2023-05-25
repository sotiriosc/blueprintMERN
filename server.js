const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors'); // Import cors
const port = process.env.PORT || 5000;
const Post = require('./models/Post');
const Comment = require('./models/Comment');

// Replace '<YOUR_MONGODB_CONNECTION_STRING>' with your actual connection string
mongoose.connect('mongodb://localhost:27017/blueprint', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => console.error('connection error:', error));
db.once('open', () => {
  console.log('Database connected successfully');
});

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

  type Query {
    posts: [Post!]!
    post(id: ID!): Post!
    comments(postId: ID!): [Comment!]!
  }
  
  type Mutation {
    addPost(title: String!, content: String!, author: String!): Post!
    addComment(postId: ID!, content: String!, author: String!): Comment!
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
    addPost: async ({ title, content, author }) => {
      const post = new Post({
        title,
        content,
        author,
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
    }
  };
  

  app.use(cors()); // Use cors as middleware before your routes

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
