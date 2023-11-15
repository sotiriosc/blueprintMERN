import React, { useState } from 'react'; 
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

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
background-color: #E1306C; /* Instagram gradient start color */
background-image: linear-gradient(to right, #E1306C, #C13584, #833AB4, #5851DB, #405DE6); /* Instagram gradient */
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

const Button = styled.button`
  font-size: 1em;
  padding: 10px 15px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Arm Stretches Page Component
export default function ArmStretches() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const stretches = [
        {
          name: 'Triceps Stretch',
          description: 'Reach one arm overhead and bend at the elbow to touch the middle of your back. Gently press on the bent elbow with the opposite hand.',
          benefits: 'Stretches the triceps and can relieve arm and shoulder fatigue.',
          commonMistakes: 'Overpressing the elbow and straining the shoulder.'
        },
        {
          name: 'Biceps Wall Stretch',
          description: 'Face a wall, extend your arm, place your palm on the wall with fingers pointing down, and gently turn away from the wall.',
          benefits: 'Stretches the biceps and the forearm muscles.',
          commonMistakes: 'Twisting the body too far and causing strain.'
        },
        {
          name: 'Wrist Extensor Stretch',
          description: 'Hold one arm out with the palm facing down, then use the other hand to gently press down on the fingers to stretch the forearm.',
          benefits: 'Relieves wrist and forearm tension, especially beneficial for those using computers.',
          commonMistakes: 'Pressing too hard on the fingers, causing wrist pain.'
        },
        {
          name: 'Wrist Flexor Stretch',
          description: 'Extend your arm with the palm up, and gently pull the fingers back towards you with the other hand.',
          benefits: 'Helps in preventing conditions like carpal tunnel syndrome and stretches the forearm muscles.',
          commonMistakes: 'Pulling the fingers back too aggressively.'
        },
        {
          name: 'Elbow-Out Rotator Stretch',
          description: 'Place your hand on the back of your head and gently press your elbow back with the other hand.',
          benefits: 'Engages and stretches the rotator cuff muscles in the arm.',
          commonMistakes: 'Forcing the elbow back too far, which may cause strain.'
        },
        {
          name: 'Standing Bicep Stretch',
          description: 'Stand in a doorway, raise your bent elbow to shoulder height and press your palm on the door frame, then gently turn your body away.',
          benefits: 'Provides a deep stretch to the biceps and shoulder.',
          commonMistakes: 'Rotating the body excessively and stressing the shoulder joint.'
        },
        {
          name: 'Arm Circles',
          description: 'Stand with your arms extended by your sides and make slow circles in a controlled motion, gradually increasing the radius of the circles.',
          benefits: 'Improves circulation and mobility in the shoulders and arms.',
          commonMistakes: 'Making too fast and jerky movements that can lead to muscle pulls.'
        },
        {
          name: 'Arm-Over-Chest Stretch',
          description: 'Bring one arm horizontally across the chest and use the other hand to apply slight pressure to the upper arm, enhancing the stretch.',
          benefits: 'Stretches the posterior shoulder and the upper arm muscles.',
          commonMistakes: 'Pulling the arm too forcefully across the chest.'
        },
        {
          name: 'Prayer Stretch',
          description: 'Join your hands together in a prayer position, elbows out, and press palms together while lowering the hands towards the waist.',
          benefits: 'Stretches the inner arm muscles and wrists.',
          commonMistakes: 'Pressing the hands downward too harshly which may strain the wrists.'
        },
        {
          name: 'Palm-Up Forearm Stretch',
          description: 'Place one arm straight out in front with the palm facing upward and use the other hand to gently press down on the palm, stretching the forearm.',
          benefits: 'Stretches the forearm flexors and the palm.',
          commonMistakes: 'Extending the arm too aggressively, causing elbow or wrist hyperextension.'
        }
      ];
      
  
    const filteredStretches = stretches.filter(stretch => 
      stretch.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageUrl = encodeURIComponent(window.location.href);
    const shareMessage = encodeURIComponent("Check out these great arm stretches for strength and flexibility!");

    
  
    return (
      <>
      import { Helmet } from 'react-helmet';

...

<Helmet>
  <meta charSet="utf-8" />
  <title>Effective Arm Stretches for Improved Strength and Flexibility</title>
  <meta name="description" content="Explore a comprehensive guide to arm stretches that enhance strength, flexibility, and reduce the risk of injury. Ideal for athletes, fitness enthusiasts, and anyone looking to improve their arm health." />
  <meta name="keywords" content="Arm Stretches, Strength, Flexibility, Muscle Health, Injury Prevention, Fitness, Exercise" />
  <meta name="Sotirios Chortoginnos" content="Balanced Blueprint" />
  <link rel="canonical" href="www.balancedblueprint.ca/arm-stretches" />
</Helmet>

      
      <PageContainer>
        <SectionTitle>Arm Stretches for Strength and Flexibility</SectionTitle>
        
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
        <ShareButton onClick={() => window.open(`https://wa.me/?text=${shareMessage}%20${pageUrl}`, '_blank')}>
  Share on WhatsApp
</ShareButton>

      </SocialShareContainer>
      </PageContainer>
      </>
    );
  }

  