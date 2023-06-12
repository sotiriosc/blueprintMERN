import { gql } from '@apollo/client';

export const MUTATION_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const MUTATION_ADD_USER = gql`
  mutation addUser($firstName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        email
      }
    }
  }
`;

export const MUTATION_ADD_COMMENT = gql`
  mutation addComment($blogId: ID!, $content: String!) {
    addComment(blogId: $blogId, content: $content) {
      _id
      content
      author {
        _id
        firstName
      }
    }
  }
`;

export const MUTATION_ADD_BLOG = gql`
  mutation addBlog($title: String!, $content: String!) {
    addBlog(title: $title, content: $content) {
      _id
      title
      content
    }
  }
`;

export const MUTATION_ADD_PRODUCT = gql`
  mutation addProduct($description: String!, $price: Number!, $imageUrl: String) {
    addProduct(description: $description, price: $price, imageUrl: $imageUrl) {
      _id
      description
      price
      imageUrl
    }
  }
`;

export const MUTATION_ORDER_PRODUCT = gql`
  mutation orderProduct($productId: ID!) {
    orderProduct(productId: $productId) {
      _id
      orders {
        _id
        description
        price
      }
    }
  }
`;
