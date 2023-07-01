import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_BLOG } from '../utils/queries';
import AuthService from '../utils/auth';
import outdoors from '../assets/outdoors.jpg'
import { Helmet } from 'react-helmet';

const styles = {
  img: {
    width: '50%',
    height: '50%',
    display: 'block',
    margin: 'auto',
  },
  title: {
    margin: '50px',
    fontSize: '2em',
    textAlign: 'center',
  },
  content: {
    width: '60%',
    margin: '0 auto',
    lineHeight: '1.5',  // improved line spacing
    fontSize: '16px',   // suitable font size
    color: '#333',      // darker text color for better contrast
    '@media (max-width: 768px)': {
      width: '95%',
    }
  },
  comment: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#f9f9f9',
  },
  commentAuthor: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  commentInput: {
    width: '250%',
    height: '125px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    resize: 'vertical',
  },
  author: {
    fontSize: '1em',
    color: '#888',
    marginBottom: '1em',
  },

  date: {
    fontSize: '0.8em',
    color: '#aaa',
    marginBottom: '1em',
  },
};


const Blog8 = () => {
  const [formState, setFormState] = useState({ commentText: '' });

  const blogId = '64a02cae9c698a6dc43cd202'; // Replace this with the actual blog ID

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
          filePath: '/blog8'
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
  <>
  
      <Helmet>
  <title>The Mental and Physical Benefits of Outdoor Activities</title>
  <meta name="description" content="Learn about the mental and physical benefits of outdoor activities, including how they can improve your mood, boost your immune system, and help you stay active." />
	<meta name="keywords" content="outdoor activities, mental health, physical health, nature, exercise" />
  <meta name="keywords" content="physical recovery, mental recovery, healing from injuries, rehabilitation exercises, healthy living, healthy diet, exercise, mindfulness, mental health, well-being"/>
  <meta property="og:site_name" content="Balanced Blueprint" />
  <meta property="og:url" content={window.location.href} />
  <meta property="og:description" content="Learn how to plan, cook, and store healthy meals for a healthier lifestyle with meal prepping. Follow these tips and tricks to optimize your meal prep routine."/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
</Helmet>

<div style={styles.content}>
       <h2 style={styles.title}>The Mental and Physical Benefits of Outdoor Activities</h2>
       <p style={styles.author}>Written by: Sotirios Chortogiannos</p>
       <p style={styles.date}>Written on: June 28th 2023</p>
       <img src={outdoors} alt="A large beautiful field, on a warm sunny day" style={styles.img} />
         <br />
         <h3>Introduction:</h3>
            <br />
            <p>In today's fast-paced and tech-driven world, we often forget to step outside and enjoy the beauty of nature. We spend most of our time indoors, sitting in front of screens, which has a detrimental effect on our mental and physical health. Outdoor activities, however, can provide numerous benefits for our overall well-being. In this blog post, we will explore the mental and physical benefits of outdoor activities.</p>
            <br />
            <h3>Table of Contents:</h3>
            <br />
            <ol>
                <li>Benefits of outdoor activities</li>
                <br />
                <li>Mental benefits of outdoor activities</li>
                <br />
                <li>Physical benefits of outdoor activities</li>  
                <br />
                <li>How to incorporate outdoor activities into your lifestyle</li> 
                <br />
                <li>Conclusion</li>
            </ol>
            <br />
            <br />
            <h3>Benefits of Outdoor Activities</h3>
            <br />
            <p>Outdoor activities encompass a wide range of activities, such as hiking, camping, swimming, cycling, and gardening. These activities can have a profound impact on our mental and physical health. Outdoor activities provide us with a break from our daily routine and give us an opportunity to explore new places and try new things. They also help us to connect with nature, which has a calming effect on our mind and body.</p>
            <br />
            <h3>Mental Benefits of Outdoor Activities</h3>   
            <br />
            <p>Outdoor activities have numerous mental health benefits. Spending time in nature can reduce stress, anxiety, and depression. It has been proven that exposure to green spaces can boost our mood and improve our cognitive function. Furthermore, being in nature can help us to be more mindful and present, which is essential for our mental health. Outdoor activities provide us with an opportunity to disconnect from technology and reconnect with ourselves and our surroundings.</p>
            <br />
            <h3>Physical Benefits of Outdoor Activities</h3>
            <br />
            <p>Outdoor activities also have numerous physical health benefits. They can help us to maintain a healthy weight, strengthen our muscles and bones, and improve our cardiovascular health. Spending time in nature can also boost our immune system and increase our vitamin D levels. Additionally, outdoor activities provide us with an opportunity to breathe in fresh air, which is essential for our overall well-being.</p>
            <br />
            <h3>How to Incorporate Outdoor Activities into Your Lifestyle</h3>
            <br />
            <p>Incorporating outdoor activities into your lifestyle doesn't have to be complicated. Start by finding activities that interest you and that you can do in your local area. You can start by taking a walk in the park, going for a swim, or cycling around your neighborhood. You can also join a hiking group or try a new outdoor sport. The key is to find something that you enjoy and that you can do consistently.</p>
            <br />
            <h3>Conclusion</h3>
            <br />
            <p>In conclusion, outdoor activities provide numerous benefits for our mental and physical health. They give us an opportunity to connect with nature, improve our cognitive function, reduce stress, anxiety, and depression, and boost our immune system. Incorporating outdoor activities into your lifestyle doesn't have to be complicated. Start by finding activities that interest you and that you can do consistently. Remember, life and growth are simply a result of satisfaction, and we must focus on satisfying ourselves and our environment to grow in all the ways we imagine. So, step outside, breathe in the fresh air, and enjoy the beauty of nature. Experiencing joy during you exercise will serve as a great motivator, propelling you towards your goals with enthusiasm and determination!</p>
  
            <br />
              <h3>Comments:</h3>
              <br />


{data && data.blog && data.blog.comments.length > 0 ? (
  data.blog.comments.map(comment => (
    <div key={comment._id} style={styles.comment}>
      <h4 style={styles.commentAuthor}>{comment.firstName}</h4>
      <p>{comment.commentText}</p>
    </div>
  ))
) : (
  <p>No comments yet</p>
)}
  
      <form onSubmit={handleFormSubmit} >
        <textarea 
          style={styles.commentInput}
          name="commentText" 
          value={formState.commentText}
          onChange={handleChange}
          required
          placeholder='Leave a comment...'
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      {error && <div>Comment submission failed</div>}
    </div>
    </>
  );
};

export default Blog8;
