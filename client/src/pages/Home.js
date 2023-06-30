import React from "react";
import image from "../assets/frontimg.jpg";

const styles = {
  welcome: {
    fontSize: "3rem",
    textAlign: "center",
    margin: "3rem",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  content: {
    width: "50%",
    paddingRight: "10px"
  },
  image: {
    width: "50%",
    paddingLeft: "10px",
    objectFit: "cover",
    borderRadius: "10%",
    margin: "20px",
    boxShadow: "0px 0px 5px 5px #888888"
  },
};

const Home = () => {
  return (
    <div className="container">
      <h1 style={styles.welcome}>Welcome!!</h1>
      
          <h2>About Balanced Blueprint:</h2>
          <p><strong>Balanced Blueprint</strong> is a comprehensive resource dedicated to helping you lead a healthier, more active lifestyle. Our mission is to provide you with the knowledge and tools necessary to transform your life through exercise, healthy eating, and healthy living. We believe that a balanced life is the key to achieving your health and wellness goals, and we recognize that each individual's journey is unique. By embracing our individuality and fostering a sense of unity, we can grow together - nurturing our minds, bodies, and communities for a better, healthier future.</p>
          <div style={styles.container}>
          <div style={styles.content}>
          <h3>Our Focus:</h3>
          <ul>
            <li><strong>Exercise:</strong> We offer expert advice on various forms of physical activity, from cardiovascular workouts to strength training and flexibility exercises. Our goal is to help you find the right type of exercise for your unique needs and preferences, ensuring that you stay motivated and enjoy the benefits of regular physical activity. By celebrating our diverse fitness interests, we can inspire and uplift one another in our quest for better health.</li>             
            <li><strong>Healthy Eating:</strong> Nutrition plays a vital role in maintaining a healthy lifestyle. We provide in-depth guidance on how to create a balanced diet, with a focus on macronutrients, micronutrients, and portion control. Our recipes and meal plans are designed to help you enjoy delicious, nutritious meals that support your health and fitness goals. We understand that everyone's dietary needs and preferences are different, and we strive to offer a wide range of options to cater to our diverse community.</li>
            <li><strong>Healthy Living:</strong> Healthy Living: We believe that a truly balanced life goes beyond just exercise and nutrition. Our content covers various aspects of mental, emotional, and social well-being, such as stress management, sleep hygiene, and self-care practices. We aim to support you in creating a holistic approach to health and wellness that recognizes the importance of personal growth and community engagement. Together, we can build stronger, healthier communities by empowering individuals to take charge of their well-being.</li>
          </ul>
        </div>
        <img src={image} alt="frontimg" className="img-fluid" style={styles.image} />
      </div>
    </div>
  );
};

export default Home;
