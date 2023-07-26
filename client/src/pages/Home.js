import React from "react";
import image from "../assets/frontimg.avif";

const isSmallScreen = window.innerWidth <= 768;
  
const styles = {
  welcome: {
    fontSize: "3rem",
    textAlign: "center",
    margin: "3rem",
  },
  container: {
    display: "flex",
    flexDirection: isSmallScreen ? "column" : "row",
    justifyContent: "space-between"
  },
  content: {
    width: "100%",
    paddingRight: isSmallScreen ? "0px" : "10px"
  },
  image: {
    width: "100%",
    paddingLeft: isSmallScreen ? "0px" : "10px",
    objectFit: "cover",
    borderRadius: "10%",
    margin: "20px",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.9)"
  },
};

const Home = () => {
  return (
    <div className="container">
      <h1 style={styles.welcome}>Welcome!!</h1>
      
          <h2>About Balanced Blueprint:</h2>
          <p><strong>Balanced Blueprint</strong> is a comprehensive resource dedicated to helping you lead a healthier, more active lifestyle. Our mission is to provide you with the knowledge and tools necessary to transform your life through exercise, healthy eating, and healthy living. We believe that a balanced life is the key to achieving your health and wellness goals, and we recognize that each individual's journey is unique. By embracing our individuality and fostering a sense of unity, we can grow together - nurturing our minds, bodies, and communities for a better, healthier future.</p>
          <br />
          <div style={styles.container}>

          <div style={styles.content}>
          <h3>Our Focus:</h3>
          <ul>
          <br />
            <li><strong>Exercise:</strong> We offer expert advice on various forms of physical activity, from cardiovascular workouts to strength training and flexibility exercises. Our goal is to help you find the right type of exercise for your unique needs and preferences, ensuring that you stay motivated and enjoy the benefits of regular physical activity. By celebrating our diverse fitness interests, we can inspire and uplift one another in our quest for better health.</li>             
            <br />
            <li><strong>Healthy Eating:</strong> Nutrition plays a vital role in maintaining a healthy lifestyle. We provide in-depth guidance on how to create a balanced diet, with a focus on macronutrients, micronutrients, and portion control. Our recipes and meal plans are designed to help you enjoy delicious, nutritious meals that support your health and fitness goals. We understand that everyone's dietary needs and preferences are different, and we strive to offer a wide range of options to cater to our diverse community.</li>
            <br />
            <li><strong>Healthy Living:</strong> Healthy Living: We believe that a truly balanced life goes beyond just exercise and nutrition. Our content covers various aspects of mental, emotional, and social well-being, such as stress management, sleep hygiene, and self-care practices. We aim to support you in creating a holistic approach to health and wellness that recognizes the importance of personal growth and community engagement. Together, we can build stronger, healthier communities by empowering individuals to take charge of their well-being.</li>
          </ul>
        </div>
        <div style={styles.imageContainer}>
    <img src={image} alt="frontimg" className="img-fluid img-responsive" style={styles.image} />
  </div>
</div>
<br />
<p>At Balanced Blueprint Blog, our ultimate vision is to inspire and foster personal growth and transformation. We wholeheartedly believe that within each individual lies a seed of infinite potential, capable of blossoming into miraculous achievements. Whether these accomplishments are personal or extend to family and community, they contribute to the nurturing of a more connected, harmonious world.</p>
        <p>Our end goal transcends the confines of physical health and fitness. It's about constructing a life that resonates with your deepest values, ambitions, and passions. We believe that the blueprint for success remains consistent across all spheres of life. The cornerstones of this blueprint are commitment, a positive mindset, ceaseless learning, and the unwavering desire to make the most out of our situations.</p>
        <p>Our mission is to provide you with the knowledge, tools, and resources necessary to follow this blueprint and cultivate a balanced life. We strive to guide you on your journey towards self-discovery, empowering you to unlock your full potential and cultivate a life of wellness, fulfillment, and satisfaction. As you traverse the path of personal development with us, you'll not only transform your own life but also contribute to the collective growth of our global community. That's the power and promise of the Balanced Blueprint Blog. Together, we can create a world where success, health, and happiness are within everyone's reach.</p>
        <br />
    </div>

  );
};

export default Home;
