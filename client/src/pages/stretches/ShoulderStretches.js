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
// Shoulder Stretches Page Component
export default function ShoulderStretches() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const stretches = [
        {
            name: 'Pendulum Stretch',
            description: 'Lean forward, allowing one arm to hang down. Swing the arm gently in small circles, gradually increasing the diameter.',
            benefits: 'Helps to relieve tension and increase mobility in the shoulder joint.',
            commonMistakes: 'Swinging the arm too vigorously which can aggravate the shoulder.'
          },
          {
            name: 'Neck Release',
            description: 'Sit or stand with a straight spine, slowly tilt your head to one side to stretch the opposite shoulder. Hold and then repeat on the other side.',
            benefits: 'Stretches the neck and the tops of the shoulders, relieving tension.',
            commonMistakes: 'Pulling the head with the hand rather than using the neck muscles.'
          },
          {
            name: 'Cross-Body Shoulder Stretch',
            description: 'Bring one arm across your body at about shoulder height and use the opposite hand to apply gentle pressure to increase the stretch.',
            benefits: 'Stretches the shoulder muscles, particularly the posterior deltoid.',
            commonMistakes: 'Applying too much pressure or raising the shoulder to the ear.'
          },
          {
            name: 'Shoulder Blade Squeeze',
            description: 'Sit or stand up straight, then pull your shoulder blades together as if trying to hold a pencil between them.',
            benefits: 'Strengthens the muscles between the shoulder blades, improving posture.',
            commonMistakes: 'Shrugging the shoulders up to the ears instead of squeezing them directly back.'
          },
          {
            name: 'Eagle Arms Stretch',
            description: 'Extend your arms straight in front of you, cross one over the other, bend at the elbows, and try to touch your palms together.',
            benefits: 'Stretches the upper back and shoulder blades and can help relieve tension headaches.',
            commonMistakes: 'Forcing the hands together which can strain the wrists.'
          },
          {
            name: 'Door Frame Stretch',
            description: 'Place your hands on either side of a door frame at shoulder height, then step or lean forward until you feel a stretch in the chest and shoulders.',
            benefits: 'Opens up the chest and shoulders, countering the forward slump of poor posture.',
            commonMistakes: 'Leaning too far forward and arching the back.'
          },
          {
            name: 'Cow Face Arms',
            description: 'Reach one arm overhead and bend the elbow, trying to touch the upper back, and reach the other arm behind your back aiming for the fingers to touch.',
            benefits: 'Stretches the triceps and the shoulders and improves arm mobility.',
            commonMistakes: 'Straining the neck by pushing the head forward.'
          },
          {
            name: 'Shoulder Shrugs',
            description: 'Raise both shoulders up towards the ears, hold for a few seconds, and then release them back down.',
            benefits: 'Relieves stress and tension in the shoulder and neck area.',
            commonMistakes: 'Rolling the shoulders which can create tension instead of releasing it.'
          },
          {
            name: 'Dynamic Shoulder Circles',
            description: 'Standing with your arms by your sides, make large, controlled circles with your shoulders, both forwards and backwards.',
            benefits: 'Improves shoulder mobility and releases tension in the shoulder girdle.',
            commonMistakes: 'Making jerky, uncontrolled movements.'
          },
          {
            name: 'Reverse Prayer Pose',
            description: 'Bring your hands behind your back, press the palms together in a prayer position, with fingers pointing upwards if possible.',
            benefits: 'Stretches the shoulders and the front of the wrists, and opens the chest.',
            commonMistakes: 'Over-pressing the hands which can cause wrist discomfort.'
          }
      ];
      
  
    const filteredStretches = stretches.filter(stretch => 
      stretch.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageUrl = encodeURIComponent(window.location.href);
    const shareMessage = encodeURIComponent("Check out these great shoulder stretches for strength and flexibility!");
  
    return (
      <>
      <Helmet>
  <title>Effective Shoulder Stretches | Enhance Flexibility & Strength</title>
  <meta name="description" content="Discover the best shoulder stretches to increase flexibility, alleviate tension, and build strength. Perfect for all fitness levels." />
  <meta name="keywords" content="Shoulder Stretches, Flexibility, Shoulder Strength, Injury Prevention, Stretching Exercises" />
  <meta property="og:title" content="Effective Shoulder Stretches | Enhance Flexibility & Strength" />
  <meta property="og:description" content="Explore our guide to effective shoulder stretches. Learn techniques to improve your shoulder flexibility and strength, suitable for all fitness enthusiasts." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={window.location.href} />
  <meta property="og:image" content="URL_to_a_relevant_image" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Effective Shoulder Stretches | Enhance Flexibility & Strength" />
  <meta property="twitter:description" content="Master shoulder stretches for enhanced flexibility, strength, and well-being. Click to explore our comprehensive guide." />
  <meta property="twitter:image" content="URL_to_a_relevant_image" />
  <link rel="canonical" href={window.location.href} />
</Helmet>

      
      <PageContainer>
        <SectionTitle>Shoulder Stretches for Strength and Flexibility</SectionTitle>
        
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
<ShareButton onClick={() => {
    const smsBody = encodeURIComponent(shareMessage + pageUrl);
    window.open(`sms:?body=${smsBody}`, '_blank');
}}>
  Share via SMS
</ShareButton>

      </SocialShareContainer>
      
      </PageContainer>
      </>
    );
  }