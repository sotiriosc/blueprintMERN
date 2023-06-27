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
        commentText: String
        createdAt: String
        username: String
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
        addUser(username: String!, email: String!, password: String!): Auth
        addComment(_id: ID!, commentText: String!): Blog
        addOrder(products: [ID]!): Order
        updateUser(username: String, email: String, password: String): User
        updateProduct(_id: ID!, quantity: Int!): Product
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;