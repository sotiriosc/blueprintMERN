const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        orders: [Order]
        comments: [Comment]
    }

    type Comment {
        _id: ID
        firstName: String
        commentText: String
        createdAt: String
      }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type Product {
        _id: ID
        name: String
        description: String
        image: String
        price: Float
        quantity: Int
        category: Category
    }

    type Category {
        _id: ID
        name: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Checkout {
        session: ID
    }   

    type Query {
        categories: [Category]
        products(category: ID, name: String): [Product]
        product(_id: ID!): Product
        user: User
        order(_id: ID!): Order
        checkout(products: [ID]!): Checkout
        blog(_id: ID!): Blog  
    }

    type Blog {
        _id: ID
        title: String
        filePath: String
        comments: [Comment]
      }

    type Mutation {
        addComment(_id: ID!, commentText: String!): Blog
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        updateProduct(_id: ID!, quantity: Int!): Product
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;