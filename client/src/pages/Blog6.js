import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_BLOG } from '../utils/queries';
import AuthService from '../utils/auth';
import injury from '../assets/blog6.avif'
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


const Blog6 = () => {
  const [formState, setFormState] = useState({ commentText: '' });

  const blogId = '649f6e7bf4c25cb28d81b61c'; // Replace this with the actual blog ID

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
          filePath: '/blog6'
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
  <title>The Importance of Healing: 6 Key Components to Achieve Optimal Wellness</title>
  <meta name="description" content="Discover the importance of healing and how focusing on six key components can lead to a healthier, happier, and more fulfilling life." />
    <meta name="keywords" content="importance of healing, exercise, healthy eating, healthy living, cardiovascular health, gut health, breathing, mental health, emotional states, personal growth, self-care, nurturing, workout, bodybuilding" />
    <meta name="robots" content="index, follow" />
    <meta name="Sotirios Chortogiannos" content="Balanced Blueprint Blog" />
  <meta property="og:site_name" content="Balanced Blueprint" />
  <meta property="og:url" content={window.location.href} />
  <meta property="og:description" content="Learn how to plan, cook, and store healthy meals for a healthier lifestyle with meal prepping. Follow these tips and tricks to optimize your meal prep routine."/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
</Helmet>

<div className="blog-content">
       <h2 style={styles.title}>The Importance of Healing: 6 Key Components to Achieve Optimal Wellness</h2>
       <p style={styles.author}>Written by: Sotirios Chortogiannos</p>
       <p style={styles.date}>Written on: June 17th 2023</p>
       <img src={injury} alt="Painful Knee" style={styles.img} />
         <br />
         <h2>Introduction:</h2>
            <br />
            <p>This article will explore the significance of healing in our lives and how focusing on six key areas can lead to a healthier, happier, and more fulfilling life. By understanding the importance of healing and taking charge of our well-being, we can adopt a proactive approach to our health and live the best lives possible. Remember, our bodies are systems that are interconnected and reliant on each other. To take our healing practice even further, we will also optimize the following systems to create a harmonious and nurturing environment for our bodies.</p>
            <br />
            <ol>
                <li>
                    <h4>Cardiovascular Health</h4>
                    <p>A strong cardiovascular system is the cornerstone of a healthy lifestyle. Regular exercise, such as jogging, swimming, or participating in group fitness classes, can significantly improve heart health and circulation. Moreover, maintaining a balanced diet rich in fruits, vegetables, whole grains, and lean proteins is crucial for optimal cardiovascular functioning. Remember, a healthy heart is key to longevity and a higher quality of life.</p>
                </li>
                <br />
                <li>
                    <h4>Gut Health</h4>
                    <p>Gut health plays a vital role in our overall well-being. A well-functioning digestive system ensures proper nutrient absorption and waste elimination. Incorporating probiotics and prebiotics, such as yogurt, kefir, and fiber-rich foods, into your diet can greatly improve gut health. Avoiding processed foods and consuming a variety of fresh, whole foods is essential for maintaining a healthy gut and preventing digestive issues.</p>
                </li>
                <br />
                <li>
                    <h4>Breathing</h4>
                    <p>Breathing exercises are often overlooked but can have a profound impact on our mental and physical health. Practicing deep, mindful breathing techniques, such as those found in yoga and meditation, can help reduce stress, increase focus, and promote relaxation. By incorporating mindful breathing into your daily routine, you can better manage anxiety and stress while improving your overall well-being.</p>
                </li>
                <br />
                <li>
                    <h4>Mental Health</h4>
                    <p>Our mental and emotional states are just as important as our physical health. To foster a healthy mindset, engage in activities that bring joy and satisfaction. Meditation, journaling, and spending time with loved ones can help cultivate a positive mental state. Seek professional help if you're struggling with depression, anxiety, or other mental health concerns. Remember, nurturing your mental health is essential for overall healing and growth.</p>
                </li>
                <br />
                <li>
                    <h4>Emotional States</h4>
                    <p>Emotional well-being is closely tied to our mental and physical health. Practicing self-love and self-compassion, as well as setting boundaries with others, can significantly improve our emotional states. Engaging in creative outlets and hobbies that bring joy can also contribute to better emotional health. Remember, taking care of your emotional well-being is an integral part of healing and personal growth.</p>
                </li>
                <br />
                <li>
                    <h4>Personal Growth and Nurturing Weaknesses</h4>
                    <p>Embracing personal growth and addressing weaknesses is essential for creating an environment suitable for healing. This includes acknowledging and addressing injuries or health concerns with the guidance of healthcare professionals. By focusing on self-improvement, we can better support our physical, mental, and emotional health, ultimately becoming more capable and available to participate in life with our friends and family.</p>
                </li>
                <br />
            </ol>
            <br />
            <h4>Conclusion</h4>
            <p>In conclusion, healing is an essential aspect of living a healthy, fulfilled life. By focusing on the six key components discussed in this article - cardiovascular health, gut health, breathing, mental health, emotional states, and personal growth - we can create an environment that supports our overall well-being. Prioritizing self-care and nurturing our bodies, minds, and spirits allows us to freely express ourselves, engage with our loved ones, and live our lives to the fullest. Embrace the importance of healing, and discover the transformative power it can have on your life.</p>
  
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

export default Blog6;
