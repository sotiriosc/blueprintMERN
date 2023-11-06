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

const SocialShareContainer = styled.div`
  /* Styling for your social share container */
`;

const ShareButton = styled.button`
  /* Styling for your share buttons */
`;

// Leg Stretches Page Component
export default function LegStretches() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    // Placeholder for stretches data
    const stretches = [
      // Add your stretches here
      // Example: { name: 'Triceps Stretch', description: '...', benefits: '...' }
    ];
  
    const filteredStretches = stretches.filter(stretch => 
      stretch.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageUrl = encodeURIComponent(window.location.href);
    const shareMessage = encodeURIComponent("Check out these great leg stretches for strength and flexibility!");
  
    return (
      <PageContainer>
        <SectionTitle>Leg Stretches for Strength and Flexibility</SectionTitle>
        
        <SearchBarContainer>
          <SearchInput 
            type="text" 
            placeholder="Search stretches..." 
            onChange={handleSearchChange} 
            value={searchTerm}
          />
        </SearchBarContainer>
        {/* Page Introduction */}
        {/* Key Benefits */}
        {/* Stretch: Triceps Stretch */}
        {/* Benefits for Triceps Stretch */}
        {/* Stretch: Biceps Stretch */}
        {/* Benefits for Biceps Stretch */}
        {/* ... More stretches */}
        {/* Common Mistakes */}
        {/* FAQ Section */}
        {/* Conclusion */}

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