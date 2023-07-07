import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_BLOG } from '../utils/queries';
import AuthService from '../utils/auth';
import workOut from '../assets/workOut.jpg'
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


const Blog9 = () => {
  const [formState, setFormState] = useState({ commentText: '' });

  const blogId = '64a02cae9c698a6dc43cd203'; // Replace this with the actual blog ID

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
          filePath: '/blog9'
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
  <title>The Road to Recovery: Handling Injuries Physically and Mentally</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="An insightful guide to understanding, coping with, and healing from injuries physically and mentally, while continuing a journey towards health and wellness." />
  <meta name="keywords" content="physical recovery, mental recovery, healing from injuries, rehabilitation exercises, healthy living, healthy diet, exercise, mindfulness, mental health, well-being"/>
  <meta property="og:site_name" content="Balanced Blueprint" />
  <meta property="og:url" content={window.location.href} />
  <meta property="og:description" content="Learn how to plan, cook, and store healthy meals for a healthier lifestyle with meal prepping. Follow these tips and tricks to optimize your meal prep routine."/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
</Helmet>

<div className="blog-content">
       <h2 style={styles.title}>The Road to Recovery: Handling Injuries Physically and Mentally</h2>
       <p style={styles.author}>Written by: Sotirios Chortogiannos</p>
       <p style={styles.date}>Written on: June 28th 2023</p>
       <img src={workOut} alt="A person Deadlifting and holding 300lbs" style={styles.img} />
         <br />
         <h2>Introduction:</h2>
            <br />
            <p>Experiencing an injury can be a formidable setback, especially for those who are motivated and constantly on the path to achieving their goals. It can often feel like a roadblock standing between you and your aspirations. However, it's crucial to remember that healing is an integral part of progress, and in truth, injuries can serve as stepping stones rather than obstacles. This article will guide you on how to handle injuries, both physically and mentally, emphasizing the importance of a positive attitude throughout the recovery journey.</p>
            <br />
            <ol>
                <li>Understanding your Injury</li>
                <br />
                <p>Every journey to recovery begins with understanding your injury. 
                    Research your specific ailment, consult with healthcare professionals, 
                    and learn about its implications on your body. Awareness is the first step 
                    towards recovery. There are numerous resources available online, including 
                    articles, tutorials, and forums where people share their experiences and advice 
                    about dealing with similar injuries.</p>
                <br />
                <li>Physical Rehabilitation</li>
                <br />
                <p>Once you've understood your injury, the next step is to explore the exercises 
                    and stretches that can help speed up your recovery. Rehabilitation exercises 
                    are an essential part of healing, aiding in restoring strength and flexibility. 
                    It's also vital to maintain a healthy diet rich in proteins, vitamins, 
                    and minerals, which contribute to tissue repair and overall body recovery.</p>
                    <br />
                    <p>Here lies a common pitfall: many people arm themselves with knowledge and know 
                        precisely what needs to be done, yet they fail to put it into action.
                         Understanding your injury and its rehabilitation is half the battle, 
                         the other half is the practical implementation of this knowledge. 
                         Dedicate time each day, ideally twice if possible, to perform the 
                         recommended exercises and stretches. Remember, healing, like health 
                         improvement, is not a passive process - it requires active participation. 
                         Commitment to regular physical rehabilitation is a proactive step towards 
                         healing, mirroring the principle that progress only comes when you do the work. 
                         So, put in the effort and witness the transformation in your journey towards 
                         recovery.</p>
                <br />
                <li>Identifying and Addressing Vulnerabilities</li>
                <br />
                <p>Sometimes injuries can indicate vulnerabilities in our form or technique, 
                    especially when it comes to exercise or sports-related injuries. Take this 
                    as an opportunity to revisit your techniques, make necessary adjustments, 
                    and strengthen your form. This will not only aid your current recovery but 
                    also help prevent future injuries.</p>
                <br />
                <li>Mental Well-being</li>
                <br />
                <p>An injury affects more than just the physical body - it impacts our mental health 
                    as well, especially when you love to move and play. Maintaining a positive mental attitude is paramount during recovery. 
                    Practice mindfulness, engage in activities that bring you joy, and surround
                     yourself with a supportive network. Remember, a healthy mind leads to a
                      faster and more efficient healing process.</p>
                <br />
                <li>Continuity in Healthy Living</li>
                <br />
                <p>Injuries should not halt your pursuit of a healthy lifestyle. Modify your
                     workouts, focus on nutrition, and ensure you get adequate sleep. 
                     There are always ways to continue with healthy living while respecting 
                     your body's healing process.</p>
            </ol>
            <br />
            <h3>Conclusion:</h3>
            <br />
            <p>Injuries can indeed be challenging, but they're not insurmountable. With the right 
                understanding, physical rehabilitation, mental fortitude, and continuity in healthy 
                living, you can turn your injury from a roadblock into a stepping stone towards your
                 goals. Remember, your body's capacity to heal is phenomenal, and with the right 
                 attitude and tools, you'll be back on your path to health and wellness in no time.
                  The journey to recovery is just another step in reaching your goals. Embrace it, 
                  and let it propel you further on your path to achieving your aspirations.</p>
  
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

export default Blog9;
