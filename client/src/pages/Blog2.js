import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_BLOG } from '../utils/queries';
import AuthService from '../utils/auth';
import food from '../assets/food.avif'
import { Helmet } from 'react-helmet';
import moment from 'moment'; 

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
  commentDate: {
    fontSize: '0.75em',
    color: '#b1b1b1',
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


const Blog2 = () => {
  const [formState, setFormState] = useState({ commentText: '' });

  const blogId = '649e56bb2bb4c3f565b07dfe'; // Replace this with the actual blog ID

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
          userId: user.data._id,
          blogId: blogId, 
          filePath: '/blog2'
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
        <title>Building a Balanced Diet: A Comprehensive Guide to Macronutrients and Micronutrients</title>
	    <meta name="description" content="Learn about the mental and physical benefits of outdoor activities, including how they can improve your mood, boost your immune system, and help you stay active."/>
	    <meta name="keywords" content="balanced diet, comprehensive guide, macronutrients, micronutrients, nutritional balance, healthy eating, food groups, diet planning, nutritional needs, vitamins, minerals, proteins, carbohydrates, fats"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="Sotirios Chortogiannos" content="Balanced Blueprint" />
        
      </Helmet>
      <div className="blog-content">
       <h2 style={styles.title}>Building a Balanced Diet: A Comprehensive Guide to Macronutrients and Micronutrients</h2>
       <p style={styles.author}>Written by: Sotirios Chortogiannos</p>
       <p style={styles.date}>Written on: May 10th 2023</p>
       <img src={food} alt="Extremely Healthy Plate of Food" style={styles.img} />
           
              <h3>Introduction:</h3>
              <br />

              <p>If you've ever wondered how to improve your overall fitness and reduce the risk of injury, look no further than the science of stretching. Stretching is an essential component of exercise, healthy eating, and healthy living that often goes overlooked. This article will delve into the benefits of stretching and provide you with techniques for optimal performance.</p>
              <br />

              <h3>Benefits of Stretching</h3>
              <br />

              <li>Improved flexibility: One of the primary benefits of stretching is increased flexibility. Flexibility is crucial for maintaining a full range of motion in your joints, which is essential for injury prevention.</li>
              <br />

              <li>Enhanced muscular balance: Stretching helps to balance the tension between opposing muscle groups, reducing the risk of injury.</li>
              <br />

              <li>Increased blood flow: Regular stretching improves circulation, which promotes oxygen and nutrient delivery to your muscles and helps remove waste products.</li>
              <br />

              <li>Improved posture: Stretching can help to correct muscle imbalances and poor posture caused by tight muscles.</li>
              <br />

              <li>Reduced stress: Stretching helps to relax tense muscles, which can alleviate stress and anxiety.</li>
              <br />

              <li>Enhanced performance: Stretching before and after exercise can improve your overall athletic performance by increasing flexibility, balance, and coordination.</li>
              <br />

              <h3>Top Techniques for Optimal Performance</h3>
              <br />

              <li>Dynamic stretching: Dynamic stretches involve movement and are best performed before your workout to warm up your muscles and increase your range of motion.</li>
              <br />

              <li>Static stretching: Static stretches involve holding a position for an extended period, usually 15-30 seconds. These stretches are best performed after exercise when your muscles are warm and more pliable.</li>
              <br />

              <li>PNF stretching: Proprioceptive neuromuscular facilitation (PNF) stretching involves contracting and relaxing the targeted muscle group, promoting increased flexibility. This advanced technique should be done with a partner or a professional.</li>
              <br />

              <li>Yoga: Practicing yoga regularly can significantly improve your flexibility, balance, and overall well-being.</li>
              <br />

              <li>Foam rolling: Foam rolling, or self-myofascial release, can help to release tight muscles and improve flexibility.</li>
              
              <br />

              
              <p>Stretching is an essential aspect of exercise, healthy eating, and healthy living. By practicing proper stretching techniques, you can enhance your performance, reduce the risk of injury, and promote overall well-being. Building patience and incorporating stretching into your daily routine can lead to long-term benefits and prevent injuries. With these tips in mind, you're well on your way to a healthier, more flexible, and better-performing body."</p>
              <br />

              <h3>Comments:</h3>
              <br />


              {data && data.blog && data.blog.comments.length > 0 ? (
  data.blog.comments.map(comment => (
    <div key={comment._id} style={styles.comment}>
      <h4 style={styles.commentAuthor}>{comment.firstName}</h4>
      <p>{comment.commentText}</p>
      <p style={styles.commentDate}>{moment(comment.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p> 
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

export default Blog2;
