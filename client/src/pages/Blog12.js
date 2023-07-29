import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_BLOG } from '../utils/queries';
import AuthService from '../utils/auth';
import posture from '../assets/posture.avif'
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


const Blog12 = () => {
  const [formState, setFormState] = useState({ commentText: '' });

  const blogId = '64c53377822059db3f867ffc'; // Replace this with the actual blog ID

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
          filePath: '/blog12'
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
        <title>The Power of Posture: Align Your Body, Elevate Your Life</title>
        <meta name="description" content="The importance of posture and it's effects on your life and health!" />
        <meta name="keywords" content="words, Balanced Blueprint Blog, Healthy Living, Exercise, Healthy Eating, Wellness Journey, Motivation,  Consistency,  Determination,  Transformation,  Small Victories,  Growth,  Personal Development,  health Goals,  Fitness Goals,  Learning,Personal Growth, Well-being, Mindset, Persistence " />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="Sotirios Chortogiannos" content="Balanced Blueprint" />
        
      </Helmet>
      <div className="blog-content">
       <h2 style={styles.title}>The Power of Posture: Align Your Body, Elevate Your Life</h2>
       <p style={styles.author}>Written by: Sotirios Chortogiannos</p>
       <p style={styles.date}>Written on: July 29th 2023</p>
       <img src={posture} alt="Image of A man standing with good posture" style={styles.img} />
           
              <h3>Introduction:</h3>
              <br />

              <p>In the holistic pursuit of health, we often focus on nutrition and exercise. Yet there's an equally crucial aspect we regularly overlook – our posture. The way we carry ourselves influences not just our physical health, but our mental wellbeing too. So let's delve into the multifaceted role of posture and its profound impact on our life and fitness.</p>
              <br />

              <h3>The Physiology of Posture</h3>
              <br />

              <p>Our body is a marvel of engineering. Every muscle, bone, and tendon work in harmony, allowing us to perform an array of activities, from intricate tasks to powerful athletic feats. This harmony relies heavily on our posture - the way we position our bodies while sitting, standing, and moving.</p>
              <br />

              <p>Good posture entails aligning your body in a way that the stress on supporting ligaments, tendons, and muscles is distributed evenly. It optimizes your breathing, as a well-aligned spine and open chest cavity allow your lungs to expand to their fullest. This ensures optimal oxygen intake, which in turn enhances your blood circulation, nourishing every cell in your body.</p>
              <br />

              <p>Furthermore, good posture facilitates efficient nerve impulse flow, allowing your brain to communicate swiftly and accurately with different body parts. This helps enhance your reflexes and overall physical performance.</p>
              <br />

              <h3>The Aesthetics and Perception of Posture</h3>
              <br />

              <p>But good posture is not just about physiological well-being; it's also about how we present ourselves to the world. An upright posture exudes confidence, openness, and strength, affecting how others perceive us and how we view ourselves.</p>
              <br />

              <p>Good posture subtly improves your appearance. It gives the impression of a well-toned physique, enhances your height, and adds an air of self-assured grace to your movements. Moreover, an aligned spine and squared shoulders tend to minimize signs of aging, keeping you looking youthful and vibrant.</p>
              <br />

              <h3>The Mental-Posture Connection</h3>
              <br />

              <p>Our physical state mirrors our mental state. When we're stressed or low, our shoulders hunch, our necks bend forward, and we unwittingly adopt a posture that reinforces those negative emotions. This forms a vicious cycle, trapping us in a downward spiral of poor posture and low mood.</p>
              <br />

              <p>WBut the reverse is also true. By consciously maintaining an upright posture, we can positively influence our mental state. Our bodies send powerful signals to our brains, and standing tall can make us feel more confident and assertive. So, proper posture is a form of self-care, a tool we can wield to cultivate a healthier, happier mindset.</p>
              <br />

              <h3>Posture in Exercise and Bodybuilding</h3>
              <br />

              <p>Ensuring good posture is not an overnight task. It requires consistent awareness and adjustments in daily life. Regular exercise, mindful stretching, and ergonomically designed workspaces can support this endeavor.</p>

              <h3>Conclusion</h3>
              <br />

              <p>Posture is the silent cornerstone of our health, aesthetics, mental wellbeing, and physical performance. It's not merely about standing tall, but about aligning ourselves with the best version of our lives. It’s time we give posture the attention it deserves, incorporating it into our health and fitness goals. So let's stand tall, breathe deeply, and stride forward in our journey to a more balanced and healthier life.</p>
              <br />

              <p>Remember, a good posture is not a destination, but a journey. It's not about attaining a perfect stance, but about cultivating an awareness of how we hold ourselves. This, in itself, is a powerful step towards a healthier and happier life.</p>
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

export default Blog12;
