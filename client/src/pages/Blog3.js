import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_BLOG } from '../utils/queries';
import AuthService from '../utils/auth';
import heart from '../assets/heartrunning.png'
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


const Blog3 = () => {
  const [formState, setFormState] = useState({ commentText: '' });

  const blogId = '649f575737ee69dd021d5f54'; // Replace this with the actual blog ID

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
          filePath: '/blog3'
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
      <title>Top 10 Cardio Workouts for a Healthy Heart, Youthfulness & Improved Performance</title>
       <meta name="description" content="Discover the top 10 heart-healthy workouts that improve cardio fitness, maintain youthfulness, and enhance sexual performance. Transform your life with these effective exercises and embrace a healthier lifestyle." />
        <meta name="keywords" content="cardio fitness, heart-healthy workouts, running, swimming, HIIT, cycling, jump rope, rowing, dancing, yoga, boxing, circuit training, exercise, healthy eating, healthy living, youthful appearance, sexual performance, bodybuilding" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="Sotirios Chortogiannos" content="Balanced Blueprint" />
        
      </Helmet>
      <div className="blog-content">
       <h2 style={styles.title}>Boost Your Cardio Fitness: The Top 10 Heart-Healthy Workouts</h2>
       <p style={styles.author}>Written by: Sotirios Chortogiannos</p>
       <p style={styles.date}>Written on: May 20th 2023</p>
       <img src={heart} alt="Heart Running" style={styles.img} />
           
       <h2>Introduction</h2>
            <p>Are you looking to improve your overall well-being, maintain a youthful appearance, and enhance your sexual performance? Look no further! We have compiled a list of the top 10 heart-healthy workouts that will not only help you achieve these goals but also improve your cardio fitness. By incorporating exercise, healthy eating, and a balanced lifestyle, you can experience a myriad of benefits that will keep you feeling and looking your best. Read on to discover the incredible power of these workouts and how they can transform your life.</p>
            
            <h2>1. Running</h2>
            <p>Running is an excellent way to boost your cardio fitness, and it has been proven to keep you feeling young and energetic. Regular running increases blood flow, strengthens your heart, and improves lung function, all of which contribute to a healthier and more vital body. Furthermore, running has been linked to improved sexual performance in both males and females, due to increased stamina and better blood circulation.</p>
            
            <h2>2. Swimming</h2>
            <p>Swimming is another fantastic workout for your heart, as it engages your entire body and improves cardiovascular endurance. This low-impact exercise is perfect for people of all ages and fitness levels, and it's a great way to burn calories, build muscle, and maintain a healthy weight.</p>
            
            <h2>3. High-Intensity Interval Training (HIIT)</h2>
            <p>HIIT workouts are a powerful way to increase your cardio fitness and burn fat quickly. By alternating between short bursts of intense exercise and periods of rest, you can push your body to its limits and achieve significant results in a shorter amount of time. HIIT workouts are also known to improve your metabolism, making it easier to maintain a healthy weight and lifestyle.</p>
            
            <h2>4. Cycling</h2>
            <p>Cycling is an enjoyable and effective way to improve your cardiovascular fitness. Whether you prefer outdoor rides or indoor spinning classes, cycling provides a low-impact workout that strengthens your heart, lungs, and leg muscles while burning calories and boosting your mood.</p>
            
            <h2>5. Jump Rope</h2>
            <p>Jumping rope is a simple yet highly effective workout for improving your cardio fitness. This fun, high-intensity exercise helps to burn calories, improve coordination, and increase cardiovascular endurance, making it a perfect addition to your heart-healthy workout routine.</p>
            
            <h2>6. Rowing</h2>
            <p>Rowing is a full-body workout that offers a unique combination of cardio and strength training. With proper form and technique, rowing can help improve your cardiovascular fitness, build lean muscle mass, and enhance overall endurance. Plus, it's an excellent low-impact exercise for individuals looking to protect their joints.</p>
            
            <h2>7. Dancing</h2>
            <p>Dancing is not only a fun and social activity, but it's also a fantastic workout that can significantly improve your cardiovascular fitness. From Zumba to salsa, there are plenty of dance styles to choose from, each offering unique benefits for your heart, muscles, and overall well-being.</p>
            
            <h2>8. Yoga</h2>
            <p>While yoga might not be the first workout that comes to mind when you think of cardio fitness, it plays a significant role in maintaining a healthy heart. Yoga's focus on deep breathing, flexibility, and balance can help lower blood pressure, reduce stress, and improve overall cardiovascular health.</p>
            
            <h2>9. Boxing</h2>
            <p>Boxing is an intense and engaging workout that offers numerous benefits for your heart and overall fitness. This high-intensity exercise not only strengthens your cardiovascular system but also helps to build muscle, improve coordination, and boost your mood.</p>
            
            <h2>10. Circuit Training</h2>
            <p>Circuit training combines strength training and cardio exercises in a fast-paced, full-body workout. By moving quickly from one exercise to another, you can keep your heart rate elevated, burn calories, and improve your overall cardiovascular fitness.</p>
            
            <h2>Conclusion</h2>
            <p>By incorporating these top 10 heart-healthy workouts into your fitness routine, you will see improvements in your cardio fitness, body composition, and overall well-being. Remember to always consult with a healthcare professional before starting any new exercise program, and listen to your body to avoid injury. With dedication and consistency, you can achieve your fitness goals and live a healthier, happier life!</p>
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

export default Blog3;
