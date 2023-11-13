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
  margin: 15px ;
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
const ContentSection = styled.section`
  margin: 40px 0;
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

const HeaderContainer = styled.div`
  background: url('/path-to-your-header-image.jpg') no-repeat center center; // Add your header image path
  background-size: cover;
  padding: 100px 0; // Adjust the padding to suit your design
`;

// Expand the StressManagement component
export default function StressManagement() {
  // Existing state and functions ...
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleButtonClick = () => {
        alert('This feature is coming soon!');
      };  

    const pageUrl = encodeURIComponent(window.location.href);
    const shareMessage = encodeURIComponent("Check out this information on stress management!");

    // The IntroductionSection component
    
    // Header Section Content
const EmotionalDevelopmentHeader = () => {
  return (
    <HeaderContainer>
      <SectionTitle>Emotional Development Mastery</SectionTitle>
      <SubTitle>Navigate the landscape of your emotions with confidence and resilience.</SubTitle>
    </HeaderContainer>
  );
};

const IntroductionEmotionalDevelopment = () => {
  return (
    <ContentSection>
      <SectionTitle>Introduction to Emotional Development</SectionTitle>
      <Paragraph>
        Emotional development is the expansion of one’s ability to both feel and express emotions appropriately, understand and empathize with others, and navigate the complex world of human emotions with agility. It is a cornerstone of robust mental health, influencing our thoughts, behaviors, and interactions with the world around us.
      </Paragraph>
      <Paragraph>
        The journey toward emotional maturity is transformative, offering profound benefits that permeate every aspect of life. With emotional maturity comes a heightened inner peace, fostering relationships rooted in mutual respect and understanding. Decisions become more reflective, aligning actions with one’s deepest values and aspirations. Just as James Allen illustrates the power of thought to shape our reality, emotional development empowers us to build a reality enriched with emotional intelligence and conscious choice.
      </Paragraph>
      <Paragraph>
        Embrace this path and unlock the potential to craft a life not led by fleeting emotions but guided by a harmonized heart and mind. The insights and strategies shared here are your map and compass to this fulfilling journey.
      </Paragraph>
    </ContentSection>
  );
};

const UnderstandingEmotionsSection = () => {
  return (
    <ContentSection>
      <SectionTitle>Understanding Emotions</SectionTitle>
      <Paragraph>
        Emotions, complex and varied, are an integral part of the human experience. They range from the basic, like happiness, sadness, fear, disgust, surprise, and anger, to the more nuanced, such as anticipation, trust, and joy. Each emotion serves a purpose, signaling to us and others about our state of mind and influencing our actions and decisions. Happiness can motivate us to pursue activities that are rewarding, while fear can protect us from danger. Sadness can be a call to seek support, and anger can push us to address injustices.
      </Paragraph>
      <Paragraph>
        Emotional intelligence (EI) is the ability to recognize, understand, and manage our own emotions, as well as to recognize, understand, and influence the emotions of others. It involves a set of skills that help us process and utilize emotional information effectively. High EI contributes to greater mental health, better job performance, and stronger personal and professional relationships. It's not just about controlling emotions but harnessing them as a guide towards more adaptive and constructive behaviors.
      </Paragraph>
      <Paragraph>
        By developing emotional intelligence, we not only become adept at navigating our own emotions but also improve our empathy and connection with others. This growth enables us to build a life that is not just emotionally rich but also resonant with a deeper understanding of the world around us.
      </Paragraph>
    </ContentSection>
  );
};

const SelfAssessmentSection = () => {
  return (
    <ContentSection>
      <SectionTitle>Emotional Self-Assessment</SectionTitle>
      <Paragraph>
        Understanding where you stand on the journey of emotional development can guide you toward areas for growth and improvement. Reflect on the following questions to assess your emotional maturity and intelligence:
      </Paragraph>
      <List>
        <ListItem>How often do you feel emotions you cannot explain?</ListItem>
        <ListItem>Can you identify the triggers that lead to your emotional responses?</ListItem>
        <ListItem>How well do you manage stress without becoming overwhelmed?</ListItem>
        <ListItem>Do you recognize how your emotions affect your behavior and decisions?</ListItem>
        <ListItem>Can you empathize with others and understand their emotions?</ListItem>
        <ListItem>How effectively do you communicate your emotions to others?</ListItem>
        <ListItem>Do you take responsibility for your emotional reactions, rather than blaming others or external circumstances?</ListItem>
        <ListItem>How quickly do you bounce back from emotional setbacks?</ListItem>
      </List>
      <Paragraph>
        This self-assessment is not about judging yourself harshly; it's about gaining insight and setting the stage for continuous growth. Emotional development is a lifelong journey, and recognizing your current state is the first step toward enhanced emotional well-being.
      </Paragraph>
    </ContentSection>
  );
};

const StrategiesForEmotionalGrowthSection = () => {
  return (
    <ContentSection>
      <SectionTitle>Strategies for Emotional Growth</SectionTitle>
      <Paragraph>
        Cultivating emotional intelligence is a proactive journey. Below are strategies designed to foster self-awareness, improve emotional regulation, and enhance empathy. Each strategy is paired with practical steps you can take to weave emotional growth into the fabric of your daily life.
      </Paragraph>

      <SubTitle>Self-Reflection:</SubTitle>
      <Paragraph>
        Engage in regular journaling to explore your feelings and the motives behind your actions. Ask yourself, "What emotions am I feeling?" and "Why am I feeling this way?" Consider the outcomes of your responses to various situations and how you might handle them differently in the future.
      </Paragraph>

      <SubTitle>Mindfulness:</SubTitle>
      <Paragraph>
        Practice mindfulness by allocating a few minutes each day to sit quietly and focus on your breath. When your mind wanders to other thoughts, gently bring your attention back to your breathing. This exercise helps center your thoughts and feelings in the present moment.
      </Paragraph>

      <SubTitle>Empathy Exercises:</SubTitle>
      <Paragraph>
        Improve your empathy by actively listening to others without judgment. Put yourself in their shoes and consider their perspective. After conversations, reflect on the emotions they may have felt and why, to deepen your understanding of others’ experiences.
      </Paragraph>

      <SubTitle>Emotional Regulation:</SubTitle>
      <Paragraph>
        Develop emotional regulation by identifying emotions as they arise and acknowledging them. Implement calming techniques such as deep breathing or counting to ten before reacting, especially in moments of high stress or anger.
      </Paragraph>

      <SubTitle>Effective Communication:</SubTitle>
      <Paragraph>
        Enhance communication by expressing your feelings in a clear, direct, and appropriate way. Use "I" statements to take ownership of your emotions without placing blame, such as "I feel [emotion] when [situation], because [reason]."
      </Paragraph>

      <Paragraph>
        These strategies are stepping stones on the path to emotional maturity. As you practice and integrate them into your life, you will likely find an increased sense of emotional balance and well-being.
      </Paragraph>
    </ContentSection>
  );
};

const NavigatingDifficultEmotionsSection = () => {
  return (
    <ContentSection>
      <SectionTitle>Navigating Difficult Emotions</SectionTitle>
      <Paragraph>
        Encountering difficult emotions is an inevitable part of life, yet how we navigate these moments can profoundly impact our well-being and relationships. Developing the skills to deal with negative emotions effectively is essential for emotional resilience.
      </Paragraph>

      <SubTitle>Cognitive Reframing:</SubTitle>
      <Paragraph>
        Cognitive reframing is a technique that involves changing the way you look at a situation to alter its emotional impact. When faced with a difficult emotion, ask yourself, "What's another way to view this situation?" or "What can I learn from this experience?" By reframing, you can shift from a negative to a more positive or neutral perspective.
      </Paragraph>

      <SubTitle>Stress Management Techniques:</SubTitle>
      <Paragraph>
        Managing stress is vital in dealing with negative emotions. Techniques such as deep breathing exercises, progressive muscle relaxation, or engaging in physical activities like walking or yoga can significantly reduce stress levels. Find a technique that works for you and incorporate it into your routine, especially during or after high-stress events.
      </Paragraph>

      <SubTitle>Acceptance:</SubTitle>
      <Paragraph>
        Sometimes, the most powerful thing you can do is to accept your emotions. Recognize that it's okay to feel anger, sadness, or frustration. Acceptance doesn’t mean resignation—it means acknowledging your feelings as valid without being overwhelmed by them.
      </Paragraph>

      <SubTitle>Seeking Support:</SubTitle>
      <Paragraph>
        Reach out to friends, family, or professionals for support. Sharing your feelings can provide relief, new perspectives, and coping strategies. Remember, seeking help is a sign of strength, not weakness.
      </Paragraph>

      <Paragraph>
        Navigating difficult emotions is not about suppression or elimination; it’s about understanding, managing, and using them as cues to take care of yourself and seek growth. With practice, these skills will become a natural part of your emotional toolkit.
      </Paragraph>
    </ContentSection>
  );
};
      
const BuildingEmotionalConnectionsSection = () => {
  return (
    <ContentSection>
      <SectionTitle>Building Emotional Connections</SectionTitle>
      <Paragraph>
        The art of forging deep emotional connections lies in the power of communication. It's through sharing our inner world and understanding others that we nurture these bonds. Emotional connections are the threads that weave the tapestry of our social lives, enriching our experiences and providing support through life's ups and downs.
      </Paragraph>

      <SubTitle>Active Listening:</SubTitle>
      <Paragraph>
        Active listening is the cornerstone of effective communication. It involves fully concentrating on the speaker, understanding their message, responding thoughtfully, and remembering the information. Practice active listening by maintaining eye contact, nodding, and avoiding interrupting while someone else is speaking.
      </Paragraph>

      <SubTitle>Expressing Empathy:</SubTitle>
      <Paragraph>
        Empathy allows us to see the world through another's eyes. Enhance your emotional connections by expressing empathy. Acknowledge others' feelings with statements like "I can see why you'd feel that way," which validate their experiences and foster mutual understanding.
      </Paragraph>

      <SubTitle>Vulnerability:</SubTitle>
      <Paragraph>
        Vulnerability can be a gateway to deeper emotional connections. By opening up and sharing your own feelings, you invite others to do the same. Start small by sharing personal stories or concerns with trusted friends or family members.
      </Paragraph>

      <SubTitle>Nonverbal Communication:</SubTitle>
      <Paragraph>
        Nonverbal cues often speak louder than words. Pay attention to body language, facial expressions, and tone of voice, both in yourself and others. These cues can provide insight into feelings that might not be expressed verbally.
      </Paragraph>

      <SubTitle>Regular Check-Ins:</SubTitle>
      <Paragraph>
        Foster emotional connections by checking in with those around you regularly. Simple questions like "How are you really doing?" can open the door to meaningful conversations and shared support.
      </Paragraph>

      <Paragraph>
        Remember, building emotional connections is a dynamic and ongoing process. It requires patience, effort, and genuine interest in the well-being of others. As you cultivate these skills, you'll find your relationships becoming more profound and rewarding.
      </Paragraph>
    </ContentSection>
  );
};

const ResourcesForLearningSection = () => {
  return (
    <ContentSection>
      <SectionTitle>Resources for Further Learning</SectionTitle>
      <Paragraph>
        Expanding your knowledge and skills in emotional development is a journey that extends beyond this platform. We have curated a list of resources to help you continue learning and growing. Whether you prefer to read, listen, or engage interactively, there's something here for everyone.
      </Paragraph>

      <SubTitle>Books:</SubTitle>
      <List>
        <ListItem>"Emotional Intelligence" by Daniel Goleman</ListItem>
        <ListItem>"Daring Greatly" by Brené Brown</ListItem>
        <ListItem>"Nonviolent Communication" by Marshall B. Rosenberg</ListItem>
        <ListItem>"The Language of Emotions" by Karla McLaren</ListItem>
      </List>

      

      <SubTitle>Podcasts:</SubTitle>
      <List>
        <ListItem>The Science of Happiness</ListItem>
        <ListItem>Unlocking Us with Brené Brown</ListItem>
        <ListItem>The Emotional Intelligence Podcast</ListItem>
        
      </List>

      
      <Paragraph>
        These resources are stepping stones to greater self-awareness and emotional proficiency. We encourage you to explore these at your own pace and discover the tools and insights that resonate most with you.
      </Paragraph>
    </ContentSection>
  );
};


      
    return (
        <PageContainer>
          <EmotionalDevelopmentHeader />
          <IntroductionEmotionalDevelopment />
          <UnderstandingEmotionsSection />
          <SelfAssessmentSection />
          <StrategiesForEmotionalGrowthSection />
          <NavigatingDifficultEmotionsSection />
          <BuildingEmotionalConnectionsSection />
          <ResourcesForLearningSection />

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

  