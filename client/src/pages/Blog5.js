import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_BLOG } from '../utils/queries';
import AuthService from '../utils/auth';
import protein from '../assets/protein.png'
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


const Blog5 = () => {
  const [formState, setFormState] = useState({ commentText: '' });

  const blogId = '649f6e7bf4c25cb28d81b61b'; // Replace this with the actual blog ID

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
          filePath: '/blog5'
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
  <title>The Power of Protein: Best Sources, Benefits, and How Much You Need</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Discover the power of protein, its benefits, the best sources, and recommended daily intake. Learn how protein can transform your health journey and promote a healthier lifestyle." />
    <meta name="keywords" content="protein, exercise, healthy eating, healthy living, lean meats, fish, legumes, nuts, seeds, dairy, muscle growth, metabolism, immune function, daily protein intake" />
  <meta property="og:site_name" content="Balanced Blueprint" />
  <meta property="og:url" content={window.location.href} />
  <meta property="og:description" content="Learn how to plan, cook, and store healthy meals for a healthier lifestyle with meal prepping. Follow these tips and tricks to optimize your meal prep routine."/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
</Helmet>

<div className="blog-content">
       <h2 style={styles.title}>The Power of Protein: Best Sources, Benefits, and How Much You Need</h2>
       <p style={styles.author}>Written by: Sotirios Chortogiannos</p>
       <p style={styles.date}>Written on: June 9th 2023</p>
       <img src={protein} alt="Protein Molecule" style={styles.img} />
         <br />
         <h2>Introduction:</h2>
            <br />
            <p>As we strive for a healthier lifestyle, it's essential to understand the vital role that protein plays in our overall well-being. From exercise to healthy eating, protein is the building block for our body's growth, repair, and maintenance. In this blog post, we'll explore the top protein sources, its incredible benefits, and the recommended daily intake. So, let's dive into the power of protein and learn how it can help transform your health journey.</p>
            <br />
            <br />
            <ol>
                <li><h2>Best Sources of Protein</h2><br /><p>When it comes to incorporating protein into your daily diet, variety is crucial. Here are five excellent protein sources that will keep you feeling energized and ready to conquer your fitness goals:</p> <ul>
                    <br />
                    <li>a. Lean meats: Chicken, turkey, and lean cuts of beef are fantastic options for incorporating high-quality protein into your meals.</li>
                    <br />
                    <li>b. Fish: Salmon, tuna, and mackerel are not only packed with protein, but also heart-healthy omega-3 fatty acids.</li>
                    <br />
                    <li>c. Legumes: Beans, lentils, and chickpeas are plant-based protein powerhouses, perfect for those who follow a vegetarian or vegan lifestyle.</li>
                    <br />
                    <li>d. Nuts and seeds: Almonds, walnuts, chia seeds, and flaxseeds offer a great combination of protein, healthy fats, and fiber.</li>
                    <br />
                    <li>e. Dairy and dairy alternatives: Greek yogurt, cottage cheese, and plant-based milk (such as soy or almond) provide a protein boost to your breakfast or snack time.</li>
                </ul>
                </li>
                <br />
                <li><h2>Benefits of Protein:</h2> <br /> <p>Protein is an essential component of a well-balanced diet, and it offers numerous health benefits:</p> </li>
                    <br />
                    <ul>
                    <li>a. Supports muscle growth and recovery: Adequate protein intake, combined with regular exercise, contributes to muscle growth, strength, and recovery.</li>
                    <br />
                    <li>b. Boosts metabolism and weight management: A protein-rich diet can help you feel fuller for longer, reducing overall calorie consumption and aiding in weight loss.</li>
                    <br />
                    <li>c. Improves immune function: Protein plays a role in the production of antibodies, which are crucial for fighting off infections and maintaining a healthy immune system.</li>
                    <br />
                    <li>d. Promotes healthy skin, hair, and nails: Protein is a vital building block for the growth and maintenance of our skin, hair, and nails.</li>
                </ul>
                <br />
                <li>
                    <h2>Recommended Daily Protein Intake</h2>
                    <br />
                    <p>The amount of protein you need each day depends on factors such as age, sex, activity level, and overall health. According to the Dietary Reference Intakes (DRIs), the recommended daily protein intake for adults is:</p>
                    <br />
                    <ul>
                        <li>0.8 grams of protein per kilogram of body weight</li>
                        <br />
                        <li>For example, a sedentary woman weighing 60 kilograms (132 pounds) would require about 48 grams of protein daily.</li>
                    </ul>
                    <br />
                    <p>However, if you lead an active lifestyle or engage in regular exercise, your protein needs may be higher. It's essential to consult with a healthcare professional or registered dietitian to determine the optimal protein intake for your unique circumstances.</p>
                </li>
            </ol>
            <br />
            <h2>Conclusion:</h2>
            <br />
            <p>The power of protein is undeniable. By incorporating high-quality protein sources into your diet, you'll be better equipped to reach your fitness goals, maintain a healthy weight, and support your immune system. Remember, it's essential to consult with a healthcare professional to determine the right protein intake for your lifestyle. So, go ahead and harness the power of protein to transform your health journey and embrace a happier, more energetic you.</p>
  
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

export default Blog5;
