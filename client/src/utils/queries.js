import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
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
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      isSubscribed
      stripeCustomerId
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
    {
        comments {
            _id
            commentText
            createdAt
            firstName
        }
    }
`;

export const QUERY_BLOG = gql`
  query getBlog($_id: ID!) {
    blog(_id: $_id) {
        _id
        title
        filePath
        comments {
          firstName  
          commentText
          createdAt
        }
    }
  }
`;

export const FETCH_USER_RESPONSES = gql`
  query fetchUserResponses {
    userResponses {
      id
      query
      response
    }
  }
`;


export const fetchUserProfile = gql`
  query fetchUserProfile {
    fetchUserProfile {
      _id
      firstName
      lastName
      email
      isSubscribed
      stripeCustomerId
    }
  }
`;