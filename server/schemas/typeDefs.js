const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        orders: [Order]
        comments: [Comment]
        searches: [Search]
        stripeCustomerId: String
        isSubscribed: Boolean
    }

    type Search {
        query: String
        response: String
        createdAt: String
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        firstName: String
        userId: ID
        blogId: ID
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

    type Blog {
        _id: ID
        title: String
        filePath: String
        comments: [Comment]
    }

    type Contact {
        _id: ID
        name: String
        email: String
        message: String
    }

    type SubscriptionInfo {
        status: String
        nextBillingDate: String
        planName: String
        amount: Float
    }

    type Query {
        categories: [Category]
        products(category: ID, name: String): [Product]
        product(_id: ID!): Product
        user: User
        order(_id: ID!): Order
        checkout(products: [ID]!): Checkout
        blog(_id: ID!): Blog
        userResponses: [Response]
        userProfile: User
        fetchUserProfile: User
    }

    type Response {
        id: ID!
        query: String!
        response: String!
    }

    type ChatGptResponse {
        reply: String
      }

      type ChangePasswordResponse {
        message: String
      }

    type Mutation {
        addComment(commentText: String!, firstName: String!, userId: ID!, blogId: ID!): Comment
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        updateProduct(_id: ID!, quantity: Int!): Product
        login(email: String!, password: String!): Auth
        submitContactForm(name: String!, email: String!, message: String!): Contact!
        sendChatGptQuery(prompt: String!): ChatGptResponse
        deleteUserResponse(responseId: ID!): String
        updateUserStripeId(userId: ID!, stripeCustomerId: String!): User
        updateUserSubscription(userId: ID!, isSubscribed: Boolean!): User
    }
`;

module.exports = typeDefs;
