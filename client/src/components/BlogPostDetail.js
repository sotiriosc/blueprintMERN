import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      content
      date
      author
    }
  }
`;


function BlogPostDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_POST, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { post } = data;

  return (
    <div>
      <h1><href>{post.title}</href></h1>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
      <p>{post.content}</p>
      {/* You can add a comments component here */}
    </div>
  );
}

export default BlogPostDetail;
