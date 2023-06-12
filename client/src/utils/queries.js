import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      email
      blogs {
        _id
        title
        content
      }
      comments {
        _id
        content
        blog {
          _id
          title
        }
      }
      orders {
        _id
        description
        price
      }
    }
  }
`;

export const QUERY_BLOGS = gql`
  query getBlogs {
    blogs {
      _id
      title
      content
      author {
        _id
        firstName
      }
      comments {
        _id
        content
        author {
          _id
          firstName
        }
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      description
      price
      imageUrl
    }
  }
`;

