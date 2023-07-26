import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_BLOG } from '../utils/queries';
import AuthService from '../utils/auth';
import weightloss from '../assets/waist.avif'
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


const Blog7 = () => {
  const [formState, setFormState] = useState({ commentText: '' });

  const blogId = '64a02cae9c698a6dc43cd201'; // Replace this with the actual blog ID

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
          filePath: '/blog7'
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
  <meta name="description" content="Discover the essential tips and tricks for a successful weight loss program, focusing on realistic goals, a balanced diet, regular exercise, and loving yourself throughout the journey." />
  <meta name="keywords" content="weight loss, fitness, health, nutrition, exercise, goals, diet, motivation, fruits, vegetables, macronutrients, micronutrients, stress, sleep" />
  <meta name="keywords" content="physical recovery, mental recovery, healing from injuries, rehabilitation exercises, healthy living, healthy diet, exercise, mindfulness, mental health, well-being"/>
  <meta property="og:site_name" content="Balanced Blueprint" />
  <meta property="og:url" content={window.location.href} />
  <meta property="og:description" content="Learn how to plan, cook, and store healthy meals for a healthier lifestyle with meal prepping. Follow these tips and tricks to optimize your meal prep routine."/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
</Helmet>

<div className="blog-content">
       <h2 style={styles.title}>The Mental and Physical Benefits of Outdoor Activities</h2>
       <p style={styles.author}>Written by: Sotirios Chortogiannos</p>
       <p style={styles.date}>Written on: June 28th 2023</p>
       <img src={weightloss} alt="A slender yet curvy physique" style={styles.img} />
         <br />
         <h3>Introduction:</h3>
            <br />
            <p>Embarking on a weight loss journey can be a rollercoaster ride with numerous ups and downs. However, the secret to achieving lasting success lies in small, consistent changes that can help you stay committed and motivated. In this blog post, we will reveal the essential tips and tricks that will guide you towards your imagined physique while loving yourself and nurturing your body. Remember, it's not just about looking good; it's about feeling good too!</p>
            <br />
            <h3>Table of Contents:</h3>
            <br />
            <ol>
                <li>Setting Realistic Goals</li>
                <br />
                <li>The Power of a Balanced Diet: <ul>
                    <br />
                    <li>a. The Importance of Fruits and Vegetables</li>
                    <li> b. Macronutrients and Micronutrients</li>
                </ul>
                    <br />
                   </li>
                <li>Embracing Regular Exercise</li>
                <br />
                <li>Managing Stress and Sleep</li>
                <br />
                <li>Celebrating Small Victories and Staying Motivated</li>
                
            </ol>
            
            <br />
            <h3>1.Setting Realistic Goals:</h3>
            <br />
            <p>Setting achievable and realistic goals is the foundation of a successful weight loss journey. Instead of aiming for drastic and rapid changes, focus on gradual progress that can be sustained over time. Begin by assessing your current lifestyle and habits, and then establish smaller, measurable milestones. For example, you might set a goal to lose one to two pounds per week or to increase your daily step count by 1,000 steps. By breaking your larger objectives into smaller, manageable steps, you will create a sense of accomplishment and stay motivated to continue working towards your ultimate weight loss goals.</p>
                <br />
                <h3>a. The Importance of Fruits and Vegetables:</h3>
                <br />
                <p>Incorporating fruits and vegetables into your diet not only aids weight loss but also reduces cortisol levels and provides essential nutrients. Cortisol, commonly known as the "stress hormone," plays a significant role in weight management, particularly around the waist. High cortisol levels have been linked to increased abdominal fat storage, which is associated with a higher risk of health issues such as heart disease and type 2 diabetes.</p>
                <br />
                <p>Reducing cortisol levels through a diet rich in fruits and vegetables is akin to reducing calorie intake, as it helps prevent excess weight gain and promotes overall well-being. Additionally, these nutrient-rich foods have a positive impact on your mood, which is another important factor in weight management. Studies have shown that poor mood can lead to emotional eating, often involving unhealthy food choices that contribute to weight gain.</p>
                <br />
                <p>By incorporating a variety of fruits and vegetables into your daily meals, you will not only enhance your mood but also better manage your cortisol levels. This, in turn, will support your weight loss goals and promote a healthier lifestyle.</p>
                <br />
                <h3>b. Macronutrients and Micronutrients:</h3>
                <br />
                <p>A comprehensive understanding of macronutrients (carbohydrates, proteins, and fats) and micronutrients (vitamins and minerals) is vital for building a balanced diet. Ensuring you consume an appropriate balance of these nutrients will support your weight loss journey while promoting optimal health.</p>
                <br />
                <h3>Embracing Regular Exercise:</h3>
                <br />
                <p>Physical activity is a cornerstone of any successful weight loss program. Find a routine that you enjoy and can commit to long-term, whether it's cardio, strength training, or a combination of both. Exercise not only burns calories but also helps to boost your metabolism and improve your mood.</p>
                <br />
                <h3>Managing Stress and Sleep:</h3>
                <br />
                <p>Stress and poor sleep can have a significant impact on your weight loss journey. Managing stress through mindfulness practices and ensuring you get adequate rest will help to regulate cortisol levels, support weight loss, and promote overall well-being.</p>
                <br />
                <p>It's important to note that when you reduce calorie intake and begin losing weight, sleep can become more challenging. Therefore, it's essential to prepare ahead of time to ensure your weight loss journey does not interfere with your sleep, which is crucial for overall health and has a direct effect on cortisol levels and your waistline.</p>
                <br />
                <p>To promote better sleep during your weight loss journey, make sure you get enough physical activity throughout the day, as exercise can help regulate sleep patterns. Additionally, pay attention to your eating habits and meal timings. Eating a well-balanced dinner a few hours before bedtime can help prevent late-night hunger and ensure your body has the necessary nutrients to support a restful night's sleep.</p>
                <br />
                <p>By focusing on these aspects, you can maintain a healthy sleep routine and prevent any negative impacts on your weight loss progress and overall well-being.</p>
                <br />
                <h3>Celebrating Small Victories and Staying Motivated:</h3>
                <br />
                <p>Recognizing and celebrating your small victories along the way can help to keep you motivated and committed to your weight loss journey. Embrace your progress and remember that it's not just about looking good, but loving yourself and your body throughout the entire process, as well as loving the choices that your making!</p>
               
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

export default Blog7;
