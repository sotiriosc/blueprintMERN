import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import AuthService from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_BLOG } from '../utils/queries';

const Blog1 = () => {
  const [formState, setFormState] = useState({ commentText: '' });
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  // Handle form submit
  const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      const user = AuthService.getProfile(); // Get the user's profile
  
      const mutationResponse = await addComment({
        variables: {
          _id: '649e56bb2bb4c3f565b07dfd', // Update this with the actual ID of the blog post
          commentText: formState.commentText
        }
      });
      
  
      console.log(mutationResponse);
    } catch (e) {
      console.error(e);
    }
  
    // Clear the form
    setFormState({
      commentText: ''
    });
};



  // Handle form field changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const { loading, data } = useQuery(QUERY_BLOG, {
    variables: { _id: '649e56bb2bb4c3f565b07dfd' },
  });

  console.log(data);
  
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
