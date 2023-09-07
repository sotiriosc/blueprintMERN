import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  margin: 2rem 0;
`;

const Category = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;  // explicit height
  background-size: cover;
  background-position: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
  margin: 1rem;
  border-radius: 15px;
  box-shadow: 0 10px 15px rgba(0, 2, 2, 2.5);
  background-image: ${props => `url(${props.bgImage})`};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;


const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  position: relative;  // Add this line
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: 2px solid black;  // Add a border
  border-radius: 50%;  // Makes the border rounded
  font-size: 2.5rem;
  color: black;
  cursor: pointer;
  width: 40px;  // Set a width
  height: 40px;  // Set a height
  display: flex;  // Center the "X"
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: red;  // Border becomes red on hover
    color: red;  // "X" becomes red on hover
  }
`;

const IntroSection = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;



const ExerciseLandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => setShowModal(false);
  
  const categories = [
    { title: "Work Routine", image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", link: "/SettingUpWorkout" },
    { title: "Arm Exercises", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", link: "/ArmExercise" },
    { title: "Back Exercises", image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", link: "/BackExercise" },
    { title: "Chest Exercises", image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=701&q=80", link: "/ChestExercise" },
    { title: "Shoulder Exercises", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80", link: "/ShoulderExercise" },
    { title: "Core Exercises", image: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=698&q=80", link: "/CoreExercise" },
    { title: "Leg Exercises", image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80", link: "/LegExercise" },
    

    // Add more categores here
  ];

  return (
    <div className="container">
      {showModal && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h2>Under Construction</h2>
            <p>We are diligently working to complete our guide. Thank you for your patience.</p>
          </ModalContent>
        </Modal>
      )}

      <Title>Welcome to Our Exercise Page</Title>
      
      <IntroSection>
  <div className="intro-section">
    <h2>Introduction: The Balanced Blueprint Approach</h2>
    <p>If you're new to working out, don't fret about pushing yourself too hard initially. Your body will need time to adapt to this new, invigorating lifestyle. Overdoing it can lead to unnecessary soreness and hinder your long-term progress.</p>
    <p>At Balanced Blueprint, we emphasize perfection in exercise—working to continuously improve, adapt, and fine-tune your routine. We believe that your body should function as a unified whole, operating in harmony both physically and mentally.</p>
    <p>Be mindful of your entire being during each workout. A positive mental state, nurtured by supportive relationships and a sense of community, can boost your stamina and performance. Your emotional well-being is a crucial part of your overall fitness.</p>
    <h3>Breathing and Form</h3>
    <p>Conscious breathing can amplify your workouts. Typically, exhale during the challenging, concentric part of the movement and inhale during the easier, eccentric portion. Controlled breathing also allows you to stretch your body, broadening your back and enhancing your V-taper.</p>
    <h3>Alignment and Posture</h3>
    <p>Keeping your body in proper alignment is crucial. Focus on maintaining an upright posture, level shoulders, and a balanced neck and girdle. Over time, you can correct any misalignments, often brought on by emotional stress or insecurity, to improve your body's symmetry.</p>
    <h3>Mindset Matters</h3>
    <p>Lastly, your mental outlook can make or break your fitness journey. Aimlessness is the enemy; a ship without a destination drifts. By setting concrete goals, you navigate towards success. Recognize your own importance and the impact you can have on others. In doing so, you create an environment for mutual growth and happiness.</p>
  </div>
  </IntroSection>

      <Grid>
        {categories.map((category) => (
          <Category
            to={category.link}
            key={category.title}
            bgImage={category.image}
          >
            <span className="fs-4">{category.title}</span>
          </Category>
        ))}
      </Grid>
    </div>
  );
};

export default ExerciseLandingPage;