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
    const shareMessage = encodeURIComponent("Discover the importance of Attitude!");

    // The IntroductionSection component
    
    // Header Section Content
// Inside your component file
const MentalHealthHeader = () => {
    const imageSrc = 'https://images.pexels.com/photos/3817723/pexels-photo-3817723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'; // Put your actual image link here
  
    return (
      <HeaderContainer>
        <SectionTitle>Cultivating a Positive Attitude</SectionTitle>
        <SubTitle>Shaping Perspectives for a Healthier Mindset</SubTitle>
        {/* If you want an image inside the header, uncomment the next line */}
        <img src={imageSrc} alt="Header Visual" style={{ width: '50%', height: 'auto' }} />
      </HeaderContainer>
    );
  };

  // Introduction to Attitude component
const IntroductionToAttitudeSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Introduction to Attitude</SectionTitle>
        <Paragraph>
          Attitude plays a pivotal role in shaping our perceptions, reactions, and interactions with the world around us. It acts as a lens through which we view life's events, influencing our thoughts, feelings, and behaviors. A positive attitude can significantly affect our mental health, contributing to resilience, contentment, and overall life satisfaction.
        </Paragraph>
        <Paragraph>
          Cultivating a positive attitude is not about ignoring life's difficulties; rather, it's about approaching challenges with optimism and confidence. It involves recognizing the potential for growth in every situation and embracing a mindset that seeks out solutions and opportunities. This proactive stance empowers individuals to navigate daily life with a sense of purpose and agency, enhancing their well-being and the quality of their relationships.
        </Paragraph>
        <Paragraph>
          Moreover, a positive attitude can be a buffer against stress and adversity. It enables us to maintain hope and perseverance, even in the face of setbacks, and can lead to healthier coping strategies and a more robust support network. By fostering a positive attitude, we can create a virtuous cycle that uplifts not only ourselves but also those around us, contributing to a more supportive and thriving community.
        </Paragraph>
      </ContentSection>
    );
  };

  // The Power of Positivity component
const PowerOfPositivitySection = () => {
    return (
      <ContentSection>
        <SectionTitle>The Power of Positivity</SectionTitle>
        <Paragraph>
          The adage "look on the bright side" is more than just a cliché—it's backed by research indicating that a positive outlook can lead to better health, longer life, and increased success. Positivity isn't just about feeling happy; it's about fostering a mindset that can change how you navigate life's ups and downs.
        </Paragraph>
        <Paragraph>
          Studies have shown that optimism can lower stress, improve cardiovascular health, and bolster the immune system. People with a positive attitude are also more likely to engage in healthy behaviors such as regular exercise, a balanced diet, and getting adequate sleep—all of which can contribute to a longer lifespan.
        </Paragraph>
        <Paragraph>
          Moreover, positivity is linked to better coping skills during hardships and greater resilience. Optimistic individuals tend to view obstacles as temporary and manageable, rather than as insurmountable failures. This perspective allows them to bounce back from challenges more quickly and with less distress.
        </Paragraph>
        <Paragraph>
          Embracing positivity can also enhance social connections, as it often leads to more constructive interactions with others. People are generally drawn to those who exude a positive spirit, which can lead to stronger and more supportive relationships.
        </Paragraph>
        <Paragraph>
          It's important to note that cultivating positivity is not about denying negative emotions or avoiding difficult situations. It's about acknowledging them without letting them overshadow the potential for growth and joy in every experience.
        </Paragraph>
      </ContentSection>
    );
  };
  
  // Recognizing Negative Patterns component
const RecognizingNegativePatternsSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Recognizing Negative Patterns</SectionTitle>
        <Paragraph>
          Negative thought patterns, often known as cognitive distortions, can significantly distort reality and lead to increased stress, anxiety, and depression. Common patterns include all-or-nothing thinking, overgeneralization, and catastrophizing. These habits of thought can not only dampen your mood but also influence your behavior and decision-making processes.
        </Paragraph>
        <Paragraph>
          Recognizing these patterns is the first step toward change. Mindfulness and self-reflection can help you become aware of automatic negative thoughts. When you catch yourself engaging in a cognitive distortion, pause and ask yourself: "Is this thought based on facts or my interpretation? Is there evidence for this thought, or can I see an alternative explanation?"
        </Paragraph>
        <Paragraph>
          Challenging negative patterns involves questioning and reframing them into more balanced and realistic thoughts. Techniques such as journaling can be instrumental in tracking your thought patterns and reflecting on them. With practice, you can learn to transform these negative patterns into opportunities for positive growth and learning.
        </Paragraph>
        <Paragraph>
          Remember, while you may not have control over every situation you face, you do have control over how you interpret and respond to them. By actively working to recognize and adjust your thought patterns, you can cultivate a healthier, more adaptive mindset.
        </Paragraph>
      </ContentSection>
    );
  };
  
  // Mindset Shift Strategies component
const MindsetShiftStrategiesSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Mindset Shift Strategies</SectionTitle>
        <Paragraph>
          Cultivating a positive mindset is an active and intentional process that can lead to significant improvements in your quality of life. It involves recognizing the power of your own thoughts and taking charge of them through practices that promote a positive outlook.
        </Paragraph>
        <Paragraph>
          One fundamental technique is the practice of gratitude. By regularly acknowledging things you are thankful for, you can shift your focus from what's lacking to what's abundant. Start or end your day by listing three things you're grateful for, and watch how this small habit can transform your perspective.
        </Paragraph>
        <Paragraph>
          Reframing thoughts is another powerful strategy. This involves changing a negative thought into a positive or neutral one. For instance, instead of saying, "I can't handle this," you might reframe it to, "I'm going to learn how to handle this by taking one step at a time." Such reframing can turn challenges into opportunities for growth.
        </Paragraph>
        <Paragraph>
          Here are some actionable steps to help you develop a positive mindset:
        </Paragraph>
        <List>
          <ListItem>Keep a gratitude journal and regularly record moments and things that bring you joy.</ListItem>
          <ListItem>Practice positive affirmations that reinforce your self-worth and capabilities.</ListItem>
          <ListItem>Engage in visualization techniques, imagining yourself succeeding in your endeavors.</ListItem>
          <ListItem>Surround yourself with positive influences, including people, books, and media.</ListItem>
        </List>
        <Paragraph>
          These exercises can be the seeds of a more positive and resilient outlook on life. Like any skill, developing a positive mindset takes practice, but each effort brings you closer to a more optimistic and empowered way of living.
        </Paragraph>
        {/* Placeholder for image */}
        <img src="https://images.pexels.com/photos/5238645/pexels-photo-5238645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Positive Mindset" style={{ width: '60%', height: 'auto' }} />
      </ContentSection>
    );
  };
  
  // Influence of Attitude on Behavior component
const InfluenceOfAttitudeOnBehaviorSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Influence of Attitude on Behavior</SectionTitle>
        <Paragraph>
          The attitudes we hold shape our daily behavior and play a pivotal role in our decision-making processes. A positive attitude can propel us toward taking constructive actions, while a negative attitude might lead us to miss opportunities or avoid growth experiences.
        </Paragraph>
        <Paragraph>
          Our attitude is like a lens through which we view the world, and it influences how we perceive challenges and stress. With a positive mindset, obstacles become manageable, and stressors are seen as temporary hurdles rather than insurmountable barriers. This perspective allows for more effective problem-solving and stress management, as it promotes resilience and resourcefulness.
        </Paragraph>
        <Paragraph>
          Consider the following ways in which attitude can impact behavior and problem-solving:
        </Paragraph>
        <List>
          <ListItem>Decision-making: A positive attitude often leads to a 'can-do' approach, fostering a proactive and solution-oriented mindset.</ListItem>
          <ListItem>Stress Management: Positivity can reduce feelings of being overwhelmed and increase the likelihood of seeking support and employing coping strategies.</ListItem>
          <ListItem>Behavioral Change: Attitude can be the catalyst for change, inspiring actions that align with personal values and goals.</ListItem>
        </List>
        <Paragraph>
          Ultimately, our attitude sets the tone for how we interact with the world and respond to life's events. By cultivating a positive attitude, we equip ourselves with a tool that can transform our behavior in powerful ways, leading to a more fulfilling and successful life.
        </Paragraph>
        {/* Placeholder for image */}
        {/* <img src="path-to-your-attitude-influence-image.jpg" alt="Attitude Influence" style={{ width: '100%', height: 'auto' }} /> */}
      </ContentSection>
    );
  };
  
  // Building Resilience component
const BuildingResilienceSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Building Resilience</SectionTitle>
        <Paragraph>
          Resilience is the ability to bounce back from setbacks and adapt well to change. It is a quality that can be strengthened over time, and a positive attitude is a key ingredient in this process. When you cultivate a positive outlook, you lay a foundation for resilience that can sustain you through life's challenges.
        </Paragraph>
        <Paragraph>
          Here are some tips to help you build and maintain resilience:
        </Paragraph>
        <List>
          <ListItem>Focus on what you can control and let go of what you cannot.</ListItem>
          <ListItem>View challenges as opportunities for growth rather than insurmountable obstacles.</ListItem>
          <ListItem>Maintain a hopeful outlook and visualize what you want, rather than worrying about what you fear.</ListItem>
          <ListItem>Take decisive actions in adverse situations rather than detaching completely and wishing they would just go away.</ListItem>
          <ListItem>Look for lessons in your missteps and failures—every mistake has the potential to teach us something important.</ListItem>
          <ListItem>Strengthen your connections with others; being part of a community can provide support and encouragement.</ListItem>
          <ListItem>Take care of your mind and body by engaging in activities that promote well-being and relaxation.</ListItem>
        </List>
        <Paragraph>
          Cultivating resilience is not about never facing difficulties, but rather about how you respond to the difficulties you encounter. By developing a resilient attitude, you're preparing yourself to handle life's pressures with more ease and to recover more quickly from its ups and downs.
        </Paragraph>
        {/* Placeholder for image */}
        {/* <img src="path-to-your-resilience-building-image.jpg" alt="Building Resilience" style={{ width: '100%', height: 'auto' }} /> */}
      </ContentSection>
    );
  };
  
  // Attitude in Relationships component
const AttitudeInRelationshipsSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Attitude in Relationships</SectionTitle>
        <Paragraph>
          The attitude we bring into our interactions with others can lay the groundwork for the quality and depth of our relationships. A positive attitude helps foster trust, empathy, and understanding, while a negative outlook can lead to conflict and strain. By choosing to approach our relationships with positivity, we can cultivate a supportive and nurturing environment for ourselves and those around us.
        </Paragraph>
        <Paragraph>
          Here are some ways to promote positive communication and strengthen your relationships:
        </Paragraph>
        <List>
          <ListItem>Approach conversations with an open mind and a willingness to understand the other person's perspective.</ListItem>
          <ListItem>Express appreciation and gratitude regularly, acknowledging the positive aspects of your relationships.</ListItem>
          <ListItem>Listen actively and provide feedback that shows you value the other person's thoughts and feelings.</ListItem>
          <ListItem>Offer support and encouragement, celebrating successes and offering comfort during challenging times.</ListItem>
          <ListItem>Address conflicts with a constructive attitude, focusing on finding solutions rather than assigning blame.</ListItem>
          <ListItem>Maintain a sense of humor and light-heartedness to help navigate through tough situations.</ListItem>
        </List>
        <Paragraph>
          Remember, a positive attitude in relationships is not about ignoring problems or pretending everything is perfect; it's about addressing issues with a constructive approach that builds bridges instead of walls. By doing so, you can create lasting bonds based on mutual respect and caring.
        </Paragraph>
        {/* Placeholder for image */}
        {/* <img src="path-to-your-relationships-image.jpg" alt="Positive Relationships" style={{ width: '100%', height: 'auto' }} /> */}
      </ContentSection>
    );
  };
  
  // Sustaining a Positive Attitude component
const SustainingPositiveAttitudeSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Sustaining a Positive Attitude</SectionTitle>
        <Paragraph>
          Cultivating a positive attitude isn't just a one-time effort; it's an ongoing practice that can be maintained through daily habits and a conscious commitment to positive thinking. Sustaining a positive attitude over the long term can lead to better stress management, improved health, and greater overall happiness.
        </Paragraph>
        <Paragraph>
          Here are some daily habits and practices that can help you maintain a positive attitude:
        </Paragraph>
        <List>
          <ListItem>Start your day with a positive affirmation or a moment of gratitude to set a hopeful tone for the day.</ListItem>
          <ListItem>Incorporate activities that you love and that bring you joy into your daily routine.</ListItem>
          <ListItem>Practice mindfulness and remain present in the moment to appreciate the small pleasures of life.</ListItem>
          <ListItem>Engage in regular physical activity, which can boost mood and reduce anxiety through the release of endorphins.</ListItem>
          <ListItem>Surround yourself with positive influences, including people who uplift you and media that inspires you.</ListItem>
          <ListItem>Set realistic goals and celebrate your progress, no matter how small the achievements may seem.</ListItem>
          <ListItem>Reflect on the positive aspects of your day before going to bed, cultivating a sense of contentment.</ListItem>
        </List>
        <Paragraph>
          Remember that maintaining a positive attitude is a personal journey that may require adjustments along the way. It's important to be patient and kind to yourself as you develop these habits. Over time, these practices can become second nature, providing you with a reservoir of positivity to draw from even on challenging days.
        </Paragraph>
        {/* Placeholder for image */}
        {/* <img src="path-to-your-sustainability-image.jpg" alt="Sustaining Positivity" style={{ width: '100%', height: 'auto' }} /> */}
      </ContentSection>
    );
  };
  
  // Resources and Further Reading component
const ResourcesAndFurtherReadingSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Resources and Further Reading</SectionTitle>
        <Paragraph>
          For those eager to explore the topic of attitude and its profound impact on life further, numerous resources are available. From classic literature to modern digital content, here's a curated list to deepen your understanding and practice of maintaining a positive attitude.
        </Paragraph>
        
        <SubTitle>Books:</SubTitle>
        <List>
          <ListItem>"Think and Grow Rich" by Napoleon Hill</ListItem>
          <ListItem>"The Strangest Secret" by Earl Nightingale</ListItem>
          <ListItem>"The Power of Positive Thinking" by Norman Vincent Peale</ListItem>
          <ListItem>"Mindset: The New Psychology of Success" by Carol S. Dweck</ListItem>
        </List>
        
        <SubTitle>Podcasts:</SubTitle>
        <List>
          <ListItem>The Tony Robbins Podcast</ListItem>
          <ListItem>The Good Life Project</ListItem>
          <ListItem>On Being with Krista Tippett</ListItem>
        </List>
        
        <SubTitle>Online Resources:</SubTitle>
        <List>
          <ListItem>
            <a href="https://www.nightingale.com/" target="_blank" rel="noopener noreferrer">
              Earl Nightingale's official website
            </a> - Discover more about the 'Dean of Personal Development' and access his insights.
          </ListItem>
          <ListItem>
            <a href="https://www.ted.com/topics/positive+thinking" target="_blank" rel="noopener noreferrer">
              TED Talks on Positive Thinking
            </a> - Watch inspiring talks that explore the power of a positive mindset.
          </ListItem>
          <ListItem>
            <a href="https://www.headspace.com/" target="_blank" rel="noopener noreferrer">
              Headspace
            </a> - An app offering guided meditation and mindfulness practices.
          </ListItem>
          <ListItem>
            <a href="https://www.meetup.com/topics/positive-thinking/" target="_blank" rel="noopener noreferrer">
              Positive Thinking Groups - Meetup
            </a> - Find and join groups focused on positivity and personal growth.
          </ListItem>
        </List>
        
        <Paragraph>
          Delving into these resources can provide you with diverse perspectives on how a positive attitude can be nurtured and harnessed to transform your life. Whether you prefer to read, listen, or interact, there's a wealth of knowledge waiting to be explored.
        </Paragraph>
      </ContentSection>
    );
  };
  
  // Conclusion component
const ConclusionSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Embracing the Power of Attitude</SectionTitle>
        <Paragraph>
          The exploration of attitude throughout this page underscores its significance in shaping our perceptions, influencing our behavior, and ultimately, determining the course of our lives. A positive attitude serves as a catalyst for resilience, a compass in relationships, and a beacon for personal and professional success.
        </Paragraph>
        <Paragraph>
          We've seen how positivity can enhance our mental fortitude, steer us through adversity, and improve our overall well-being. By recognizing and altering negative thought patterns, we can shift our mindset to one that supports growth and fulfillment.
        </Paragraph>
        <Paragraph>
          The journey towards cultivating a sustained positive attitude is both challenging and rewarding. It requires consistent practice, a commitment to self-reflection, and the willingness to embrace change. As we integrate the strategies and insights presented here, we lay the foundation for a life enriched by optimism and driven by a constructive and affirmative outlook.
        </Paragraph>
        <Paragraph>
          May this journey inspire you to reflect on the power of your own attitude and encourage you to take proactive steps towards nurturing a perspective that elevates both your life and the lives of those around you.
        </Paragraph>
      </ContentSection>
    );
  };
  
      
    return (
        <>
      <Helmet>
      <title>Cultivating a Positive Attitude - Balanced Blueprint</title>
      <meta name="description" content="Discover the transformative power of a positive attitude and learn how to harness it for a more fulfilling life." />
      <meta name="keywords" content="positive attitude, mental health, optimism, resilience, mindset, self-improvement, personal growth" />
      <link rel="canonical" href="http://www.balancedblueprint.ca/attitude" />
      {/* Add any other meta tags as necessary */}
      </Helmet>
        <PageContainer>
         <MentalHealthHeader />
            <IntroductionToAttitudeSection />
            <PowerOfPositivitySection />
            <RecognizingNegativePatternsSection />
            <MindsetShiftStrategiesSection />
            <InfluenceOfAttitudeOnBehaviorSection />
            <BuildingResilienceSection />
            <AttitudeInRelationshipsSection />
            <SustainingPositiveAttitudeSection />
            <ResourcesAndFurtherReadingSection />
            <ConclusionSection />




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

  