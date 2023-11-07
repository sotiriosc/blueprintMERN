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

// Back Stretches Page Component
export default function BackStretches() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const stretches = [
        {
            name: 'Child’s Pose',
            description: 'Kneel on the floor, touch your big toes together, sit on your heels, then bend forward and lay your torso down between your thighs with arms extended.',
            benefits: 'Stretches the spine, glutes, and hamstrings, and helps relieve stress and tension.',
            commonMistakes: 'Not relaxing the forehead on the floor, which can keep tension in the neck.'
          },
          {
            name: 'Cat-Cow Stretch',
            description: 'On your hands and knees, alternate between arching your back upwards (Cat) and sinking it downwards (Cow), synchronizing with your breath.',
            benefits: 'Increases flexibility in the neck, shoulders, and spine.',
            commonMistakes: 'Holding the breath, which can create stiffness instead of promoting relaxation.'
          },
          {
            name: 'Knees to Chest',
            description: 'Lie on your back and pull your knees to your chest, wrapping your arms around them and gently rocking side to side.',
            benefits: 'Stretches the lower back and massages the spine.',
            commonMistakes: 'Pulling the knees too hard or lifting the head off the ground.'
          },
          {
            name: 'Spinal Twist',
            description: 'Lying on your back, extend your arms out to form a T-shape, bring one knee to your chest, then gently cross it over the opposite side of your body.',
            benefits: 'Relieves tension in the spine and stretches the back muscles.',
            commonMistakes: 'Forcing the knee to touch the ground, which can cause discomfort or injury.'
          },
          {
            name: 'Seated Forward Bend',
            description: 'Sit with legs extended, inhale and lift your arms, then exhale as you bend forward from the hips, reaching towards your feet.',
            benefits: 'Stretches the spine, shoulders, and hamstrings, and can calm the mind.',
            commonMistakes: 'Rounding the back, which can stress the spine instead of lengthening it.'
          },
          {
            name: 'Standing Forward Fold',
            description: 'Stand up straight, exhale and bend at the hips to lower your head towards the ground, keeping your knees slightly bent.',
            benefits: 'Stretches the hamstrings, calves, and hips, and releases the spine.',
            commonMistakes: 'Locking the knees which can create tension in the legs and lower back.'
          },
          {
            name: 'Cobra Pose',
            description: 'Lie on your stomach with your hands under your shoulders, then push through your hands to lift your chest off the ground.',
            benefits: 'Stretches the chest while strengthening the spine and helps to relieve stress.',
            commonMistakes: 'Overextending the arms or dropping the shoulders, which can strain the lower back.'
          },
          {
            name: 'Sphinx Pose',
            description: 'Lie on your stomach and prop yourself up on your forearms, aligning elbows under shoulders, and gently arch your back.',
            benefits: 'Strengthens the spine, opens the chest and lungs, and helps alleviate stress.',
            commonMistakes: 'Pushing too high or straining the neck, which should remain neutral.'
          },
          {
            name: 'Prone Leg Lifts',
            description: 'Lie on your stomach with your head down and hands under your forehead, then slowly lift one leg at a time, keeping it straight.',
            benefits: 'Strengthens the lower back muscles and the glutes.',
            commonMistakes: 'Lifting the leg too high or using momentum instead of controlled movement.'
          },
          {
            name: 'Supine Bridge',
            description: 'Lie on your back with knees bent and feet flat, then lift your hips up, creating a straight line from shoulders to knees.',
            benefits: 'Strengthens the lower back, glutes, and hamstrings, and stretches the hip flexors.',
            commonMistakes: 'Pushing the hips too high or letting them sag, which can strain the back.'
          },
          {
            name: 'Pelvic Tilts',
            description: 'Lie on your back with knees bent, flatten your back against the floor by slightly tilting your pelvis and contracting your abs.',
            benefits: 'Improves mobility in the lower back and strengthens abdominal muscles.',
            commonMistakes: 'Overarching the back or holding the breath during the exercise.'
          }
      ];
      
  
    const filteredStretches = stretches.filter(stretch => 
      stretch.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageUrl = encodeURIComponent(window.location.href);
    const shareMessage = encodeURIComponent("Check out these great lower body stretches for strength and flexibility!");
  
    return (
      <PageContainer>
        <SectionTitle>Back Stretches for Strength and Flexibility</SectionTitle>
        
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
    );
  }