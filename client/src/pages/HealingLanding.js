import React from 'react';
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

const HealingLandingPage = () => {
  const title = "Welcome to Our Healing Page!!! ❤️‍🩹";
  const introText = "Here we offer the insights we have gained over many years of experience in the fitness industry. Our passion has cultivated a wealth of knowledge that we are excited to share with you.";
  const categories = [
    { title: "Coming Soon", image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", link: "/healing" },
    

    // Add more categores here
  ];

  return (
    <div className="container">
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