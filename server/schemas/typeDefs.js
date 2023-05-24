const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Blog {
    id: ID!
    title: String!
    content: String!
    author: String!
    date: String!
    comments: [Comment]
  }

  type Comment {
    id: ID!
    content: String!
    author: String!
    date: String!
  }

  type Query {
    blogs: [Blog]
  }

  type Mutation {
    addBlog(title: String!, content: String!, author: String!): Blog
    addComment(blogId: ID!, content: String!, author: String!): Blog
  }
`;

module.exports = typeDefs;
