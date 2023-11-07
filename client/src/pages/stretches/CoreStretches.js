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

// Core Stretches Page Component
export default function CoreStretches() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const stretches = [
        {
            name: 'Cat-Cow Stretch',
            description: 'On your hands and knees, alternate between arching your back towards the ceiling (Cat) and dipping it towards the floor (Cow).',
            benefits: 'Improves flexibility in the spine and massages the abdominal organs.',
            commonMistakes: 'Moving too quickly or not coordinating the movement with the breath.'
          },
          {
            name: 'Seated Spinal Twist',
            description: 'Sitting on the floor, cross one leg over the other, and twist your torso toward the top leg, pushing against it with your elbow.',
            benefits: 'Stretches the spine, shoulders, and hips while stimulating digestion.',
            commonMistakes: 'Twisting too far beyond comfort or straining the neck.'
          },
          {
            name: 'Child’s Pose',
            description: 'From a kneeling position, sit back on your heels and fold forward, extending your arms in front of you or alongside your body.',
            benefits: 'Gently stretches the lower back, hips, thighs, knees, and ankles while relaxing the spine, shoulders, and neck.',
            commonMistakes: 'Forcing the buttocks to touch the heels or overstretching the arms.'
          },
          {
            name: 'Bridge Pose',
            description: 'Lying on your back with knees bent and feet flat on the ground, lift your hips toward the ceiling while keeping your hands flat on the floor.',
            benefits: 'Strengthens the core and lower back while stretching the chest, neck, and spine.',
            commonMistakes: 'Overarching the spine or placing too much pressure on the neck.'
          },
          {
            name: 'Supine Twist',
            description: 'Lie on your back, bring one knee to your chest, and gently guide it across your body with the opposite hand, extending the other arm out to the side.',
            benefits: 'Relaxes the lower back and stretches the glutes and spine.',
            commonMistakes: 'Allowing both shoulders to come off the floor or forcing the knee down.'
          },
          {
            name: 'Cobra Pose',
            description: 'Lying face down, place your hands under your shoulders and gently lift your chest off the ground, extending through the spine.',
            benefits: 'Stretches the chest while strengthening the spine and abdominals.',
            commonMistakes: 'Locking the elbows or shrugging the shoulders to the ears.'
          },
          {
            name: 'Standing Forward Bend',
            description: 'From a standing position, exhale as you bend forward at the hips, allowing your head to fall toward the ground.',
            benefits: 'Stretches the hamstrings and lower back while decompressing the spine.',
            commonMistakes: 'Overbending the knees or rounding the back instead of hinging at the hips.'
          },
          {
            name: 'Pilates Saw',
            description: 'Sitting with legs spread wide, stretch one arm towards the opposite foot as if “sawing” off your toes with your hand, alternating sides.',
            benefits: 'Stretches the obliques, shoulders, and hamstrings while improving rotational flexibility.',
            commonMistakes: 'Collapsing the chest or not maintaining a straight back.'
          },
          {
            name: 'Pigeon Pose',
            description: 'From a hands-and-knees position, bring one knee forward and place it behind the wrist while extending the other leg back, sitting upright or folding forward.',
            benefits: 'Stretches the hip flexors, lower back, and glutes, and can alleviate sciatic pain.',
            commonMistakes: 'Allowing the hips to twist or sag to one side.'
          },
          {
            name: 'Legs Up the Wall',
            description: 'Sit close to a wall and then lie on your back, extending your legs up the wall with your buttocks close to or touching the wall.',
            benefits: 'Relieves tension in the lower back and legs and can help with circulation.',
            commonMistakes: 'Bending the knees too much or not allowing the lower back to rest comfortably on the floor.'
          }
      ];
      
  
    const filteredStretches = stretches.filter(stretch => 
      stretch.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageUrl = encodeURIComponent(window.location.href);
    const shareMessage = encodeURIComponent("Check out these core stretches for strength and flexibility!");
  
    return (
      <PageContainer>
        <SectionTitle>Core Stretches for Strength and Flexibility</SectionTitle>
        
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