import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_BLOG } from '../utils/queries';
import AuthService from '../utils/auth';
import { Helmet } from 'react-helmet';
import moment from 'moment'; 

const styles = {
  img: {
    width: '300px',
    height: 'auto',
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


const Blog13 = () => {
  const [formState, setFormState] = useState({ commentText: '' });

  const blogId = '65064a606f7a3c0fe4793ffd'; // Replace this with the actual blog ID

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
          filePath: '/blog13'
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
  <title>Mental Health and the Power of Positivity: Turn the Tide of Your Thoughts</title>
  <meta name="description" content="How harnessing the power of positivity can improve your mental health and life's circumstances." />
  <meta name="keywords" content="Mental Health, Power of Positivity, Self-improvement, Balanced Blueprint Blog, Personal Development, Self-Care, Positive Mental Attitude, Stress Management, Wellness, Goals, Planning" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  <meta name="Sotirios Chortogiannos" content="Balanced Blueprint" />
</Helmet>
<div className="blog-content">
  <h2 style={styles.title}>Mental Health and the Power of Positivity: Turn the Tide of Your Thoughts</h2>
  <p style={styles.author}>Written by: Sotirios Chortogiannos</p>
  <p style={styles.date}>Written on: September 16th 2023</p>
  <img src="https://plus.unsplash.com/premium_photo-1687067885966-d755107af021?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="Descriptive text"></img>

  
  <h3>Introduction</h3>
  <p>Life is an unpredictable journey, filled with triumphs and tribulations. While we all cherish the triumphs, it's the difficult times that truly test our resilience and character. Whether it's a solitary challenge that shakes our foundation or a cascade of problems that make us question our ability to cope, we've all had moments where we feel on the edge of emotional and mental exhaustion.</p>
  <p>In these critical junctures, it's all too easy to spiral into a vortex of negative thoughts and self-doubt. This mental pattern not only exacerbates the challenges we're facing but also impairs our ability to find solutions. It's precisely in these times, when we're most vulnerable, that we must harness the transformative power of positivity.</p>
  <p>Positive thinking isn't about ignoring life's difficulties; it's about facing them head-on with a constructive attitude. It's about being pragmatic enough to know you're overwhelmed, yet optimistic enough to tackle your challenges, one step at a time. By consciously choosing to focus on the brighter side of things, we can navigate through life's complexities with more ease and resilience.</p>
  <p>In this post, we'll delve into the significance of maintaining a positive outlook, especially when you're entangled in life's challenges. We'll talk about actionable steps to tie up those loose ends, one by one, without getting trapped in the quagmire of despair.</p>
  

  <h3>The Spiral of Negative Thoughts</h3>
  <p>When you're going through challenging times, it's incredibly tempting to give in to negativity. It might feel like a natural or even comforting choice to dwell on thoughts that validate your suffering or fears. However, embracing negativity can set you on a slippery slope that's far more dangerous than it might initially appear. This type of thinking can quickly become cyclical, creating an endless loop of detrimental thoughts that feed off each other, exacerbating your emotional pain and mental strain. Before you know it, these negative thought patterns can become automatic, coloring your perspective of yourself, your relationships, and the world at large. The toll this takes isn't just emotional; it's a severe impact on your mental health that can lead to conditions like chronic anxiety, depression, or even contribute to physical ailments. In essence, negativity has the potential to not just ruin your day, but to significantly affect your overall well-being.</p>

  <h3>The Power of Positive Thinking</h3>
  <p>Changing your perspective is more than just a mental exercise; it's a life-altering decision that holds the potential to drastically improve your overall well-being. Rather than succumbing to a torrent of doubts, fears, and insecurities that seem to flood your mind during tough times, put faith in the transformative power of positivity. This doesn't mean ignoring your problems or pretending they don't exist; instead, it means approaching them from a different angle. Rather than viewing challenges as insurmountable obstacles, see them as opportunities for growth and learning. Start small by tackling one problem at a time, breaking it down into manageable pieces. This makes the journey towards resolving issues less overwhelming and more achievable. Prioritize the aspects of your life that bring you discomfort or unhappiness, and take gradual steps to improve them. With each step you take, you'll find that the weight of negativity starts to lift, replaced by a newfound sense of optimism and control. By methodically addressing each issue, not only do you solve problems, but you also cultivate a positive mindset that will influence every facet of your life.</p>

  <h3>Setting Realistic Goals</h3>
  <p>Positive thinking, while powerful, requires more than just good intentions; it needs a clear direction to be truly impactful. One effective way to channel your newfound positivity is by laying out your goals, both big and small, in a tangible form. Start by jotting them down on paper or typing them out digitally—whichever method works for you. But don't just list them; go a step further by forming a strategic plan outlining the steps you need to take to achieve these objectives. A goal without a plan is merely a wish, and by creating a roadmap, you're setting yourself up for genuine progress.</p>

  <p>However, it's essential to avoid setting yourself up for disappointment by maintaining realistic expectations. This doesn't mean limiting your aspirations, but rather framing them in a way that they are attainable through consistent effort and perhaps some strategic adjustments along the way. Reach for the stars, but remember that it's okay to make pit stops to refuel and reorient yourself.</p>

  <p>The ancient adage, "The journey of a thousand miles begins with a single step," holds profound wisdom. Each step you take in pursuit of your goals may seem inconsequential when viewed in isolation, but collectively, they make up the journey towards achieving your dreams. So don't underestimate the power of taking that first step, however small it may seem, as it sets the stage for the milestones that will eventually shape your life.</p>

  

  <h3>Nurturing Your Mental Health</h3>
  <p>Your mind is arguably the most potent weapon you possess, functioning as both your greatest ally and, potentially, your most significant hindrance. Because of its power, it's crucial to keep it sharp and positively aligned. Each negative thought you entertain serves as a detrimental strike against your mental well-being, chipping away at your emotional resilience and overall happiness. The cumulative effect of this negativity can not only harm your mental state but can also spill over into your physical and emotional health.</p>
  <p>On the other hand, maintaining a Positive Mental Attitude (PMA)—a concept popularized by Napoleon Hill—can be a game-changer. Embracing PMA doesn't mean blind optimism; rather, it encourages a balanced and constructive approach to life's challenges. This positive outlook can have sweeping benefits, enhancing not just your mental health but also affecting your physical well-being and emotional stability in a profoundly positive way. By consciously choosing positivity, you arm your mind with the mental fortitude required to face whatever life throws your way.</p>

  <h3>Practical Tips for Managing Stress</h3>
  <p>Here are some ways to manage stress and nurture your mental health:</p>
  <ul>
    <li>Take a walk and breathe fresh air</li>
    <li>Exercise to release endorphins</li>
    <li>Engage in activities like meditation, stretching, or yoga</li>
    <li>Surround yourself with positive people</li>
    <li>Read uplifting literature</li>
  </ul>

  <h3>Conclusion</h3>
  <p>The power of positivity isn't just a feel-good mantra; it's a practical approach to life that can significantly improve your mental health. It's about reprogramming your thought patterns, setting achievable goals, and using various tools at your disposal to build a resilient mindset. The road to a better you starts with a single positive thought. Make that thought today.</p>
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

export default Blog13;
