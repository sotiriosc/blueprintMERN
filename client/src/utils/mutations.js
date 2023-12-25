import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]! $firstName: String! $description: String! $price: Float! $quantity: Int! $category: String!) {
    addOrder(products: $products firstName: $firstName description: $description price: $price quantity: $quantity category: $category) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
mutation AddComment($commentText: String!, $firstName: String!, $userId: ID!, $blogId: ID!) {
  addComment(commentText: $commentText, firstName: $firstName, userId: $userId, blogId: $blogId) {
    _id
    commentText
    firstName
    userId
    blogId
  }
}
`;


export const SUBMIT_CONTACT_FORM = gql`
  mutation SubmitContactForm($name: String!, $email: String!, $message: String!) {
    submitContactForm(name: $name, email: $email, message: $message) {
      _id
    }
  }
`;

export const SEND_CHAT_GPT_QUERY = gql`
  mutation SendChatGptQuery($prompt: String!) {
    sendChatGptQuery(prompt: $prompt) {
      reply
    }
  }
`;

export const DELETE_USER_RESPONSE = gql`
  mutation deleteUserResponse($responseId: ID!) {
    deleteUserResponse(responseId: $responseId)
  }
`;

export const UPDATE_USER_STRIPE_ID = gql`
  mutation updateUserStripeId($userId: ID!, $stripeCustomerId: String!) {
    updateUserStripeId(userId: $userId, stripeCustomerId: $stripeCustomerId) {
      _id
      stripeCustomerId
    }
  }
`;

export const UPDATE_USER_SUBSCRIPTION = gql`
mutation UpdateUserSubscription($userId: ID!, $isSubscribed: Boolean!) {
  updateUserSubscription(userId: $userId, isSubscribed: $isSubscribed) {
    _id
    isSubscribed
  }
}
`;