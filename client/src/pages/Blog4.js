import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_BLOG } from '../utils/queries';
import AuthService from '../utils/auth';
import prep from '../assets/mealPrep.jpg'
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
    lineHeight: '1.5',  
    fontSize: '16px',   
    color: '#333',      
    '@media (max-width: 768px)': {
      width: '100%',
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


const Blog4 = () => {
  const [formState, setFormState] = useState({ commentText: '' });

  const blogId = '649f575737ee69dd021d5f55'; // Replace this with the actual blog ID

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
          filePath: '/blog4'
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
  <title>The Art of Meal Prepping: How to Plan, Cook, and Store Meals for a Healthier Lifestyle</title>
  <meta name="description" content="Learn how to plan, cook, and store healthy meals for a healthier lifestyle with meal prepping. Follow these tips and tricks to optimize your meal prep routine."/>
  <meta name="keywords" content="meal prepping, healthy eating, meal planning, batch cooking, portion control, healthy lifestyle"/>
  <meta property="og:title" content="The Art of Meal Prepping: How to Plan, Cook, and Store Meals for a Healthier Lifestyle"/>
  <meta property="og:site_name" content="Balanced Blueprint" />
  <meta property="og:url" content={window.location.href} />
  <meta property="og:description" content="Learn how to plan, cook, and store healthy meals for a healthier lifestyle with meal prepping. Follow these tips and tricks to optimize your meal prep routine."/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
</Helmet>

<div className="blog-content">
       <h2 style={styles.title}>The Art of Meal Prepping: How to Plan, Cook, and Store Meals for a Healthier Lifestyle</h2>
       <p style={styles.author}>Written by: Sotirios Chortogiannos</p>
       <p style={styles.date}>Written on: May 29th 2023</p>
       <img src={prep} alt="Prepping Food" style={styles.img} />
         <br />
         <ol>
                <li>Meal planning: The first step to successful meal prepping is to plan your meals in advance. Take some time at the start of each week to decide what meals you want to eat and create a grocery list accordingly. This will save you time and money and ensure you have all the necessary ingredients on hand.</li>
                <br />
                <li>Meal prepping tools: Invest in some good quality meal prep containers that are microwave and dishwasher safe. This will make storing and reheating your meals a breeze. Also, invest in a food scale to measure portions accurately and a good quality knife to make meal prep easier and safer.</li>
                <br />
                <li>Recipes: Look for healthy, easy-to-make recipes that you enjoy. There are many resources available online, including blogs, websites, and social media, that provide healthy meal ideas and inspiration. Incorporate a variety of protein, complex carbohydrates, and healthy fats into your meals for balanced nutrition.</li>
                <br />
                <li>Cooking techniques: Use healthy cooking techniques such as grilling, baking, and roasting to reduce the use of oil and unhealthy fats. Additionally, incorporate herbs and spices for flavor instead of relying on salt or sugary sauces.</li>
                <br />
                <li>Batch cooking: Cook in batches to save time and ensure you have enough meals for the week. This is particularly useful for proteins such as chicken or fish, which can be cooked in bulk and used in multiple meals.</li>
                <br />
                <li>Portion control: Use your food scale to portion out your meals accurately. This will ensure you are consuming the correct amount of calories and nutrients.</li>
                <br />
                <li>Storage: Once your meals are cooked, store them in your meal prep containers and label them with the date and contents. Store them in the refrigerator or freezer, depending on how long you plan to keep them.</li>
                <br />
                <li>Meal prepping for special diets: If you have special dietary requirements, such as vegetarian, vegan, or gluten-free, there are many resources available that provide healthy meal ideas and recipes tailored to your needs.</li>
                <br />
                <li>Snacks: Don't forget to include healthy snacks in your meal prep. This will help curb cravings and keep you satiated between meals. Examples include fresh fruit, raw vegetables, and hummus.</li>
                <br />
                <li>Hydration: Lastly, don't forget to hydrate. Drinking enough water throughout the day is crucial for overall health and wellbeing. Invest in a reusable water bottle and aim to drink at least 8 glasses of water a day.</li>
            </ol>
            <br />
            <p>In conclusion, meal prepping is an excellent way to ensure you eat healthy, nutritious meals that fuel your body throughout the week. By following these tips and incorporating a variety of healthy foods into your meal plan, you can achieve a healthier lifestyle and feel your best. Start meal prepping today and see the positive impact it can have on your health and wellbeing.</p>
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

export default Blog4;
