import React, { useState } from 'react'; 
import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 20px auto; 
  font-family: courier, sans-serif;
  width: 80%; 
  text-align: center; 
`;

const SectionTitle = styled.h2`
  font-size: 3.5em;
  margin-top: 20px;
  text-align: center; 
`;

const SubTitle = styled.h3`
  font-size: 2em;
  margin-top: 10px;
  text-align: center; 
`;

const Paragraph = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
  text-align: left; 
`;

const List = styled.ul`
  list-style-type: none;
  margin-left: 40px;
  
`;

const ListItem = styled.li`
  margin: 5px 0;
  font-size: 1.5em;
  
`;

const SearchBarContainer = styled.div`
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  font-size: 1em;
  padding: 10px;
  margin-top: 10px;
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StretchContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const StretchName = styled.h4`
  font-size: 2em;
  color: #333;
`;

const StretchDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.4;
`;

const StretchBenefits = styled.p`
  font-size: 1.2em;
  line-height: 1.4;
  font-style: italic;
`;

const StretchCommonMistakes = styled.p`
    font-size: 1.2em;
    line-height: 1.4;
    font-style: italic;
`;

const SocialShareContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px; /* This creates space between your buttons */
`;

const ShareButton = styled.button`
  background-color: blue
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkBlue; /* Darken the button a tad on hover */
  }

  /* Icon font can be used here for specific social media icons */
  &.facebook {
    background-color: #3b5998; /* Facebook blue */
    &:hover {
      background-color: #344e86;
    }
  }

  &.twitter {
    background-color: #1DA1F2; /* Twitter blue */
    &:hover {
      background-color: #1a91da;
    }
  }

  &.instagram {
    background-color: #E1306C; /* Instagram gradient start color */
    background-image: linear-gradient(to right, #E1306C, #C13584, #833AB4, #5851DB, #405DE6); /* Instagram gradient */
    color: white;
    &:hover {
      opacity: 0.9;
    }
  }
`;

// Chest Stretches Page Component
export default function ChestStretches() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const stretches = [
        {
            name: 'Standing Chest Stretch',
            description: 'Stand facing a corner with your hands placed on the adjacent walls at chest height. Lean forward until you feel a stretch across your chest.',
            benefits: 'Opens up the pectoral muscles and can alleviate the rounded-shoulder posture.',
            commonMistakes: 'Stretching too far forward which can strain the shoulders.'
          },
          {
            name: 'Doorway Chest Stretch',
            description: 'Stand in a doorway with your forearms against the door frame, elbows at a 90-degree angle. Step through the doorway until you feel a stretch.',
            benefits: 'Stretches the chest and front shoulders, promoting better posture.',
            commonMistakes: 'Extending too far through the doorway and hyperextending the lower back.'
          },
          {
            name: 'Floor Chest Opener',
            description: 'Lie face down on the floor with your arms out to the sides in a T shape. Gently roll onto one side, placing the top leg behind with the knee bent to stabilize your body.',
            benefits: 'Targets the chest and biceps while gently stretching the front of the shoulder.',
            commonMistakes: 'Raising the head or neck instead of keeping it aligned with the spine.'
          },
          {
            name: 'Clasped Hand Chest Stretch',
            description: 'Interlace your fingers behind your back, straighten your arms, and lift your hands upward as you open your chest and shoulders.',
            benefits: 'Stretches the shoulders and pectorals while strengthening the rhomboids and trapezius.',
            commonMistakes: 'Lifting the shoulders towards the ears instead of keeping them relaxed.'
          },
          {
            name: 'Yoga Camel Pose',
            description: 'Kneel with your feet behind you and place your hands on your lower back. Push your hips forward and arch your back, reaching for your heels if possible.',
            benefits: 'Deeply stretches the chest while also opening the front of the body and improving spine flexibility.',
            commonMistakes: 'Dropping the head back too far which can strain the neck.'
          },
          {
            name: 'Yoga Cobra Pose',
            description: 'Lie face down, hands under shoulders, and gently lift your chest off the ground by straightening your arms, opening up the chest and shoulders.',
            benefits: 'Stretches the chest and abdominal muscles while strengthening the spine.',
            commonMistakes: 'Overarching the lower back or placing too much pressure on the hands.'
          },
          {
            name: 'Ball Chest Stretch',
            description: 'Using a stability ball, lie back with the ball under your shoulder blades. Allow your arms to fall to the sides with palms facing up to stretch the chest.',
            benefits: 'Provides a gentle stretch to the pectorals and front deltoids and is good for spine mobility.',
            commonMistakes: 'Allowing the hips to sag which can put undue stress on the lower back.'
          },
          {
            name: 'Arm Circles',
            description: 'Extend your arms to the sides at shoulder height and make slow, controlled circles, gradually increasing the radius to open up the chest.',
            benefits: 'Improves circulation and mobility in the shoulders and pectoral area.',
            commonMistakes: 'Performing the circles too quickly, which can lead to shoulder impingement.'
          },
          {
            name: 'Dumbbell Fly Stretch',
            description: 'Lie on a flat bench with a light dumbbell in each hand. Extend your arms out to the sides, slight bend in the elbows, to stretch the chest.',
            benefits: 'Simulates the chest fly exercise, helping to stretch and strengthen the chest muscles.',
            commonMistakes: 'Using too heavy weights which can put excessive stress on the shoulder joints.'
          },
          {
            name: 'Cross Arm Chest Stretch',
            description: 'Extend one arm straight out in front of you, then use the opposite hand to pull it across your body, keeping the arm straight.',
            benefits: 'Stretches the outer pectoral muscles and the shoulder.',
            commonMistakes: 'Raising the shoulder of the arm being stretched, which can create tension in the neck.'
          }
      ];
      
  
    const filteredStretches = stretches.filter(stretch => 
      stretch.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageUrl = encodeURIComponent(window.location.href);
    const shareMessage = encodeURIComponent("Check out these great chest stretches for strength and flexibility!");
  
    return (
      <PageContainer>
        <SectionTitle>Chest Stretches for Strength and Flexibility</SectionTitle>
        
        <SearchBarContainer>
          <SearchInput 
            type="text" 
            placeholder="Search stretches..." 
            onChange={handleSearchChange} 
            value={searchTerm}
          />
           </SearchBarContainer>
        {filteredStretches.map((stretch, index) => (
        <StretchContainer key={index}>
          <StretchName>{stretch.name}</StretchName>
          <StretchDescription>{stretch.description}</StretchDescription>
          <StretchBenefits>Benefits: {stretch.benefits}</StretchBenefits>
          <StretchCommonMistakes>Common Mistakes: {stretch.commonMistakes}</StretchCommonMistakes>
          
          {/* <StretchImage src={stretch.imageUrl} alt={stretch.name} /> */}
        </StretchContainer>
      ))}

        <SocialShareContainer>
        <ShareButton onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`, '_blank')}>
          Share on Facebook
        </ShareButton>
        <ShareButton onClick={() => window.open(`https://twitter.com/intent/tweet?text=${shareMessage}&url=${pageUrl}`, '_blank')}>
          Share on Twitter
        </ShareButton>
        
        {/* Add more buttons for other social networks */}
      </SocialShareContainer>
      </PageContainer>
    );
  }