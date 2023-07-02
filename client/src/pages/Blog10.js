import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_BLOG } from '../utils/queries';
import AuthService from '../utils/auth';
import tree from '../assets/tree.jpg'
import { Helmet } from 'react-helmet';

const styles = {
  img: {
    width: '300px',
    height: '300px',
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


const Blog10 = () => {
  const [formState, setFormState] = useState({ commentText: '' });

  const blogId = '64a036ad734efec111031994'; // Replace this with the actual blog ID

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
          filePath: '/blog10'
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
        <meta name="description" content="Appreciating the power of commitment and a few words as a reminder it's the power!" />
        <meta name="keywords" content="commitment, Balanced Blueprint Blog, Healthy Living, Exercise, Healthy Eating, Wellness Journey, Motivation,  Consistency,  Determination,  Transformation,  Small Victories,  Growth,  Personal Development,  health Goals,  Fitness Goals,  Learning,Personal Growth, Well-being, Mindset, Persistence " />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="Sotirios Chortogiannos" content="Balanced Blueprint" />
        
      </Helmet>
      <div className="blog-content">
       <h2 style={styles.title}>The Power of Commitment: Turning Small Victories into Great Success</h2>
       <p style={styles.author}>Written by: Sotirios Chortogiannos</p>
       <p style={styles.date}>Written on: July 1st 2023</p>
       <img src={tree} alt="A large beautiful tree" style={styles.img} />
           
              <h3>Introduction:</h3>
              <br />

              <p>Hello, and welcome to Balanced Blueprint Blog! Today, as we celebrate our shift to a more user-friendly platform, we want to talk about something that's close to our hearts and fundamental to our philosophy – commitment.</p>
              <br />

              <p>Commitment is the linchpin that holds our endeavors together, making it possible to achieve our health, fitness, and overall life goals. It's a journey that begins with a single step and continues one step at a time, leading to transformative changes over time.</p>
              <br />

              <p>Have you ever noticed how a blade of grass can split concrete? Its roots grow one cell at a time, persistently pushing through the soil, until one day, they break through the hard surface. This might seem like a small victory, but it's a vivid testament to the power of consistency and determination.</p>
              <br />

              <p>As with the grass, the process of our transformation is also marked by small victories. With each healthy meal we eat, every workout we complete, and each night we prioritize rest, we are laying a cell in the foundation of our wellness journey. It's these tiny, seemingly inconsequential wins that accumulate over time, and before we know it, we have fostered significant changes, surprising ourselves and those around us with what we can achieve.</p>
              <br />

              <p>But let's be honest, every journey has its fair share of setbacks. Sometimes, the concrete slab seems too heavy, and the blade of grass appears too frail. We might experience a loss, a missed workout, a strayed diet plan, or a general lapse in our regimen. It's critical during these times not to let these setbacks deflate our spirits or dampen our enthusiasm.</p>
              <br />

              <p>Losses are not the end; they are detours. They serve as waypoints, indicating where we need to learn, grow, and fortify ourselves. When properly handled, these setbacks can fuel our drive, broaden our knowledge, and enhance our skills. They guide us, recalibrate our direction, and ultimately contribute to our growth.</p>
              <br />

              <p>Remember, there's no such thing as failure - only learning experiences. These lessons are stepping stones on the path to success, making us wiser and stronger, and bringing us closer to our goals.</p>
              <br />

              <p>Here at Balanced Blueprint Blog, our end goal is to construct a life that echoes with our deepest values, ambitions, and passions. The cornerstone of this blueprint is commitment. So, let's take this pledge to remain committed, nurturing our small victories, learning from our setbacks, and evolving ourselves one cell at a time, just like that determined blade of grass.</p>
              <br />

              <p>Let's harness the power of commitment to achieve our health and wellness goals, empower ourselves, and, in turn, contribute to the collective growth of our community. After all, that's the power and promise of the Balanced Blueprint Blog. Together, we can build a world where health, happiness, and success are within everyone's reach.</p>
              <br />

              <p>If you have any other thoughts or ideas, feel free to share. Your commitment fuels our own, and together, we'll continue to grow and celebrate more victories, big and small.</p>
              <br />

              <p>Remember, commitment is a choice. Choose to commit to your wellness journey, and you'll be surprised at the powerful transformation that awaits you. Here's to a healthier, happier, and more successful life for us all!</p>
              <br />

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

export default Blog10;
