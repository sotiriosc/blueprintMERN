import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import AuthService from '../utils/auth';

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
          _id: '1', // Update this with the actual ID of the blog post
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
  

  return (
    <div>
      <h2>Blog Title 1</h2>
      <p>Blog content goes here...</p>

      <h3>Comments</h3>

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
