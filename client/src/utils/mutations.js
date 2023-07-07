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
mutation AddComment($_id: ID!, $commentText: String!, $firstName: String!, $userId: ID! $blogId: ID!) {
  addComment(_id: $_id, commentText: $commentText, firstName: $firstName, userId: $userId, blogId: $blogId) {
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