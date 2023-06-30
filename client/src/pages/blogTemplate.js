import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_BLOG } from '../utils/queries';
import AuthService from '../utils/auth';

const Blog1 = () => {
  const [formState, setFormState] = useState({ commentText: '' });

  const blogId = '649e56bb2bb4c3f565b07dfd'; // Replace this with the actual blog ID

  const { loading, data, refetch } = useQuery(QUERY_BLOG, {
    variables: { _id: blogId },
  });

  const [addComment, { error }] = useMutation(ADD_COMMENT, {
    refetchQueries: [
      {
        query: QUERY_BLOG,
        variables: { _id: blogId },
      }
    ]
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const user = AuthService.getProfile(); // Get the user's profile
  
      await addComment({
        variables: {
          _id: blogId, 
          commentText: formState.commentText,
          firstName: user.data.firstName, // Assuming the firstName is stored in user object
          blogId: blogId, 
          filePath: '/blog1'
        }
      });
  
      // Clear the form
      setFormState({
        commentText: ''
      });
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Blog Title 1</h2>
      <p>Blog content goes here...</p>
  
       <h3>Comments</h3>

      {data && data.blog && data.blog.comments.length > 0 ? (
        data.blog.comments.map(comment => (
          <div key={comment._id}>
            <h4>{comment.firstName}</h4>
            <p>{comment.commentText}</p>
          </div>
        ))
      ) : (
        <p>No comments yet</p>
      )}
  
      <form onSubmit={handleFormSubmit}>
        <textarea 
          name="commentText" 
          value={formState.commentText}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {error && <div>Comment submission failed</div>}
    </div>
  );
};

export default Blog1;
