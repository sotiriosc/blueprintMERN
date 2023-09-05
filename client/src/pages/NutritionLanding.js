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

const IntroText = styled.p`
  text-align: center;
  margin: 0 1rem;
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

const NutritionLandingPage = () => {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => setShowModal(false);

  const title = "Welcome to Our Nutrition Page";
  const introText = "Here we offer the insights we have gained over many years of experience in the fitness industry. Our passion has cultivated a wealth of knowledge that we are excited to share with you.";
  const categories = [
    { title: "Creating your diet plan", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80", link: "/dietPlan" },
    { title: "macronutrients", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80", link: "/macronutrients" },
    { title: "Micronutrients", image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", link: "/micronutrients" },
    { title: "Fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", link: "/fruits" },
    { title: "Hydration", image: "https://images.unsplash.com/photo-1519873174361-37788c5a73c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=641&q=80", link: "/hydration" },
    { title: "Fiber", image: "https://plus.unsplash.com/premium_photo-1675366071314-858486761d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", link: "/fiber" },
    

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
      
      <Title>{title}</Title>
      <IntroText>{introText}</IntroText>
      <Grid>
        {categories.map((category, index) => (
          <Category to={category.link} key={index} style={{ backgroundImage: `url(${category.image})` }}>
            <span className="fs-4">{category.title}</span>
          </Category>
        ))}
      </Grid>
    </div>
  );
};

export default NutritionLandingPage;