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
  height: 400px;  // explicit height
  width: 400px;
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

// const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.7);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContent = styled.div`
//   background-color: white;
//   padding: 20px;
//   border-radius: 10px;
//   text-align: center;
//   position: relative;  // Add this line
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 15px;
//   right: 15px;
//   background: none;
//   border: 2px solid black;  // Add a border
//   border-radius: 50%;  // Makes the border rounded
//   font-size: 2.5rem;
//   color: black;
//   cursor: pointer;
//   width: 40px;  // Set a width
//   height: 40px;  // Set a height
//   display: flex;  // Center the "X"
//   align-items: center;
//   justify-content: center;

//   &:hover {
//     border-color: red;  // Border becomes red on hover
//     color: red;  // "X" becomes red on hover
//   }
// `;

const HealingLandingPage = () => {

  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   setShowModal(true);
  // }, []);

  // const closeModal = () => setShowModal(false);
  
  const title = "Welcome to Our Healing Page!!! ❤️‍🩹";
  const introText = "Here we offer the insights we have gained over many years of experience in the fitness industry. Our passion has cultivated a wealth of knowledge that we are excited to share with you.";
  const categories = [
    { title: "Heal Injuries", image: "https://images.pexels.com/photos/3760275/pexels-photo-3760275.jpeg", link: "/healingInjuries" },
    

    // Add more categores here
  ];

  return (
    <div className="container">
          {/* {showModal && (
    //     <Modal>
    //       <ModalContent>
    //         <CloseButton onClick={closeModal}>&times;</CloseButton>
    //         <h2>Under Construction</h2>
    //         <p>We are diligently working to complete our guide. Thank you for your patience.</p>
    //       </ModalContent>
    //     </Modal>
    //   )} */}
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

export default HealingLandingPage;