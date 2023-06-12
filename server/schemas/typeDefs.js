const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String
    email: String!
    password: String!
    admin: Boolean!
    blogs: [Blog]!
    comments: [Comment]!
    orders: [Product]!
  }

  type Blog {
    _id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment]!
  }

  type Comment {
    _id: ID!
    content: String!
    author: User!
    blog: Blog!
  }

  type Product {
    _id: ID!
    description: String!
    price: Float!
    imageUrl: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    blogs: [Blog]!
    blog(blogId: ID!): Blog
    comments: [Comment]!
    comment(commentId: ID!): Comment
    products: [Product]!
    product(productId: ID!): Product
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBlog(title: String!, content: String!): Blog @adminDirective
    addComment(blogId: ID!, content: String!): Comment
    addProduct(description: String!, price: Float!, imageUrl: String): Product @adminDirective
  }
`;

module.exports = typeDefs;
