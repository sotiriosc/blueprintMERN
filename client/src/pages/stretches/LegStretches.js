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

// Leg Stretches Page Component
export default function LegStretches() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const stretches = [
        {
          name: 'Quadriceps Stretch',
          description: 'Stand on one foot, pull your other heel to your buttocks, keeping your knees together and pushing your hips forward.',
          benefits: 'Stretches the front of the thigh and improves flexibility of the hip flexors.',
          commonMistakes: 'Arching the back too much or pulling the ankle away from the body, which reduces the stretch’s effectiveness.'
        },
        {
          name: 'Hamstring Stretch',
          description: 'Sit on the ground with one leg outstretched, bend forward from your hips towards the foot of the extended leg.',
          benefits: 'Loosens the back of the thigh, which can alleviate lower back discomfort.',
          commonMistakes: 'Rounding the back, which can strain the spine instead of stretching the hamstring.'
        },
        {
          name: 'Calf Stretch',
          description: 'Step one foot back, press your heel into the floor, and lean forward with your other leg, keeping your back straight.',
          benefits: 'Prevents Achilles tendon issues and improves ankle flexibility.',
          commonMistakes: 'Not keeping the heel on the ground or the back leg straight, which diminishes the stretch.'
        },
        {
          name: 'Hip Flexor Stretch',
          description: 'In a lunge position, with one knee on the floor, lean forward into your front leg, pushing your hips down.',
          benefits: 'Reduces tension in the hip flexors, especially beneficial for those who sit for extended periods.',
          commonMistakes: 'Overextending the hip or arching the back, which can cause injury.'
        },
        {
          name: 'Adductor Stretch',
          description: 'Sit with the soles of your feet together, pull them towards your body, and gently press your knees towards the floor.',
          benefits: 'Improves flexibility in the inner thigh and groin area.',
          commonMistakes: 'Forcing the knees down which can lead to groin strain.'
        },
        {
          name: 'Glute Stretch',
          description: 'Lie on your back, cross one ankle over the opposite knee, and pull the thigh towards your chest.',
          benefits: 'Releases tension in the glutes and can alleviate sciatic pain.',
          commonMistakes: 'Pulling too hard on the thigh or not keeping the back flat on the ground.'
        },
        {
          name: 'IT Band Stretch',
          description: 'Cross one leg behind the other and lean to the side towards the front foot until you feel a stretch along the outer thigh.',
          benefits: 'Targets the iliotibial band that is often tight in runners and cyclists.',
          commonMistakes: 'Leaning forward or backward instead of directly to the side, which reduces the effectiveness of the stretch.'
        },
        {
          name: 'Standing Shin Stretch',
          description: 'While standing, place the top of one foot on the ground behind you and gently press the top of the foot into the ground.',
          benefits: 'Stretches the shin muscles, which can help prevent shin splints.',
          commonMistakes: 'Putting too much weight on the foot or not maintaining balance, which could lead to falling.'
        },
        {
          name: 'Knee to Chest Stretch',
          description: 'Lie on your back and pull one knee up to your chest while keeping the other leg straight on the ground.',
          benefits: 'Stretches the lower back and hips along with the hamstrings.',
          commonMistakes: 'Lifting the head or the other leg off the ground, which can strain the back.'
        },
        {
          name: 'Lying Quad Stretch',
          description: 'Lie on one side, grab the top of the ankle on your upper leg, and pull it towards your buttocks, keeping both knees together.',
          benefits: 'Isolates the quadriceps without putting pressure on the knees.',
          commonMistakes: 'Twisting the hips forward which can reduce the stretch and put stress on the spine.'
        },
        {
          name: 'Piriformis Stretch',
          description: 'Sit with one leg straight out, cross the other leg over the thigh, and twist your torso towards the bent leg.',
          benefits: 'Stretches the deep gluteal muscles and can help alleviate tightness related to sciatica.',
          commonMistakes: 'Twisting too far or too quickly which can strain the back muscles.'
        },
        {
          name: 'Lunge Stretch',
          description: 'Step one leg forward into a lunge, keeping the front knee above the ankle and the back leg straight.',
          benefits: 'Stretches the hip flexors, quadriceps, and hamstrings of the back leg.',
          commonMistakes: 'Letting the front knee extend past the toes, which can lead to knee strain.'
        },
        {
          name: 'Seated Wide Leg Stretch',
          description: 'Sit with legs extended out to the sides and lean forward from the hips, keeping the spine straight.',
          benefits: 'Opens up the hips and stretches the inner thighs and hamstrings.',
          commonMistakes: 'Rounding the back which diminishes the stretch and can cause back pain.'
        },
        {
          name: 'Ankle Stretch',
          description: 'Seated with legs extended, loop a towel around the ball of the foot and gently pull back, keeping the knee straight.',
          benefits: 'Improves flexibility in the ankles and the surrounding muscles.',
          commonMistakes: 'Pulling too forcefully on the towel, which can strain the muscles around the ankle.'
        },
        {
          name: 'Calf Raise and Drop',
          description: 'Stand on a step with heels hanging off the edge, raise up onto the balls of the feet, and then lower down.',
          benefits: 'Strengthens and stretches the calf muscles simultaneously.',
          commonMistakes: 'Dropping the heels too quickly which can lead to Achilles tendon injury.'
        }
      ];
      
  
    const filteredStretches = stretches.filter(stretch => 
      stretch.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageUrl = encodeURIComponent(window.location.href);
    const shareMessage = encodeURIComponent("Check out these great lower body stretches for strength and flexibility!");
  
    return (
      <PageContainer>
        <SectionTitle>Leg and lower body Stretches for Strength and Flexibility</SectionTitle>
        
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