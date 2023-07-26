import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_BLOG } from '../utils/queries';
import AuthService from '../utils/auth';
import words from '../assets/words.avif'
import { Helmet } from 'react-helmet';
import moment from 'moment'; 

const styles = {
  img: {
    width: '300px',
    height: '300px',
    display: 'block',
    margin: 'auto',
  },
  commentDate: {
    fontSize: '0.75em',
    color: '#b1b1b1',
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


const Blog10 = () => {
  const [formState, setFormState] = useState({ commentText: '' });

  const blogId = '64a869a8e44b8dcd04dca31c'; // Replace this with the actual blog ID

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
          firstName: user.data.firstName,
          userId: user.data._id,
          blogId: blogId, 
          filePath: '/blog11'
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
        <title>64a036ad734efec111031994</title>
        <meta name="description" content="Appreciating the power of words and a few as a reminder it's the power!" />
        <meta name="keywords" content="words, Balanced Blueprint Blog, Healthy Living, Exercise, Healthy Eating, Wellness Journey, Motivation,  Consistency,  Determination,  Transformation,  Small Victories,  Growth,  Personal Development,  health Goals,  Fitness Goals,  Learning,Personal Growth, Well-being, Mindset, Persistence " />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="Sotirios Chortogiannos" content="Balanced Blueprint" />
        
      </Helmet>
      <div className="blog-content">
       <h2 style={styles.title}>The Power of Words in Achieving a Balanced Lifestyle</h2>
       <p style={styles.author}>Written by: Sotirios Chortogiannos</p>
       <p style={styles.date}>Written on: July 7th 2023</p>
       <img src={words} alt="Image of letters making words" style={styles.img} />
           
              <h3>Introduction:</h3>
              <br />

              <h3>Words as Seeds of Transformation</h3>
              <br />

              <p>It all begins with words. Words carry the unique ability to paint pictures, evoke emotions, inspire action, and even build or shatter our realities. Just as we strive for physical fitness and a balanced diet, we should also exercise our vocabulary and feed our minds with robust and empowering words. Just as the right foods can nourish our bodies, the right words can nourish our minds.</p>
              <br />

              <h3>Communication: The Key to Harmony</h3>
              <br />

              <p>Imagine you are in the middle of an intense workout, and you're struggling with a particularly challenging exercise. At that moment, a gym buddy comes over and encourages you with a few well-chosen words. "You've got this. Keep pushing!" These words can be the difference between giving up and pushing through.</p>
              <br />

              <p>Effective communication, built on the right words, enables us to connect with our surroundings and people. When we articulate our thoughts, aspirations, and challenges, we open avenues for support, motivation, and collaborative problem-solving.</p>
              <br />

              <h3>The Linguistic Diet: Consuming Words Mindfully</h3>
              <br />

              <p>Just as we mindfully select what we put into our bodies, we should be selective about the words we consume. The words we read, listen to, and engage with impact our thoughts and emotions, which in turn affect our actions. Much like a balanced diet contributes to a healthy body, a balanced 'linguistic diet' contributes to a healthy mind.</p>
              <br />

              <p>Consume words that inspire, motivate, and bring positivity. Say 'no' to words that spread negativity, drain energy, or create self-doubt. Remember, your mind is much like your body – you are what you consume.</p>
              <br />

              <h3>In Conclusion: Empower Your Life with Words</h3>
              <br />

              <p>In the journey towards a balanced lifestyle, it's essential not only to consider our physical fitness and nutrition but also the words that we engage with daily. By consciously choosing empowering, positive words and effectively articulating our thoughts, we can enhance our motivation, connection with others, and overall wellbeing.</p>
              <br />

              <p>Words are much more than mere communication tools. They are powerful forces that can guide us towards our goals and aspirations. So, let's use words to our advantage and empower ourselves towards a more balanced, fulfilling lifestyle. Today, take a moment to reflect on the words you use and consume. Are they propelling you forward or holding you back? The power to choose is in your hands.</p>
              <br />

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

export default Blog10;
