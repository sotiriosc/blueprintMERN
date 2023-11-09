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
    
    const StressManagementHeader = () => {
        return (
          <HeaderContainer>
            <SectionTitle>Stress Management: Take Control</SectionTitle>
            <SubTitle>Unlock the door to a calmer, more fulfilling life.</SubTitle>
          </HeaderContainer>
        );
      };

const IntroductionSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Understanding Stress</SectionTitle>
        <Paragraph>
          Stress is the body's natural defense against predators and danger. It floods the body with hormones to prepare systems to evade or confront danger, a response known as the "fight-or-flight" mechanism. In the modern world, we may not face predators, but challenges and demands can trigger a similar response. Stress can be short-term ("acute"), or it can be long-term ("chronic") and continuous, which can lead to serious health problems.
        </Paragraph>
        <Paragraph>
          On the mental plane, acute stress can push us to meet life's challenges, from work deadlines to personal obstacles. However, when the mind is relentlessly taxed, our mental resilience can wane, leading to decreased concentration, mood swings, and anxiety. Physically, chronic stress can wear down our systems, leading to a suppressed immune response, increased blood pressure, and a heightened risk of cardiovascular disease.
        </Paragraph>
        <Paragraph>
          Despite its formidable nature, stress is not an invincible foe. With the right tools and mindset, managing stress can become second nature, leading to improved overall well-being and life satisfaction. Embracing stress management techniques can not only mitigate the negative effects of stress but also enhance your ability to thrive under pressure, turning potential adversity into a catalyst for growth and achievement.
        </Paragraph>
        <SubTitle>Take Charge of Your Stress</SubTitle>
        <Paragraph>
          Here at Balanced Blueprint, we believe in empowering you with the knowledge and tools to turn the tide on stress. Our holistic approach will guide you through practices and habits that can transform stress from a daily struggle into a source of personal power. Let's embark on this journey to tranquility and empowerment together.
        </Paragraph>
      </ContentSection>
    );
  };
  

    const SymptomsSection = () => {
        return (
          <ContentSection>
            <SectionTitle>Recognizing the Symptoms of Stress</SectionTitle>
            <Paragraph>
              Stress manifests in various forms and recognizing the symptoms can be the first step to managing it effectively. While everyone experiences stress differently, there are common signs that can signal when stress is starting to have a detrimental effect on your health.
            </Paragraph>
            <SubTitle>Physical Symptoms:</SubTitle>
            <List>
              <ListItem>Headaches or dizziness</ListItem>
              <ListItem>Muscle tension or pain</ListItem>
              <ListItem>Stomach problems</ListItem>
              <ListItem>Chest pain or a faster heartbeat</ListItem>
              <ListItem>Trouble sleeping</ListItem>
              <ListItem>Fatigue</ListItem>
            </List>
            <SubTitle>Emotional Symptoms:</SubTitle>
            <List>
              <ListItem>Anxiety or irritability</ListItem>
              <ListItem>Depression or sadness</ListItem>
              <ListItem>Feeling overwhelmed</ListItem>
              <ListItem>Mood swings or anger</ListItem>
              <ListItem>Feeling insecure or inadequate</ListItem>
              <ListItem>Lack of motivation or focus</ListItem>
            </List>
            <SubTitle>Behavioral Symptoms:</SubTitle>
            <List>
              <ListItem>Eating too much or too little</ListItem>
              <ListItem>Procrastinating or neglecting responsibilities</ListItem>
              <ListItem>Increased use of alcohol, tobacco, or other drugs</ListItem>
              <ListItem>Exhibiting nervous behaviors like nail-biting or pacing</ListItem>
            </List>
            <Paragraph>
              Identifying these symptoms as they arise can help you take proactive steps to mitigate the impact of stress. The subsequent sections will explore various methods and techniques to address and manage these symptoms effectively.
            </Paragraph>
          </ContentSection>
        );
      };
      

    const CausesSection = () => {
        return (
          <ContentSection>
            <SectionTitle>Understanding the Causes of Stress</SectionTitle>
            <Paragraph>
              Stress can creep into our lives through many doors. Understanding its sources is the first step toward managing stress effectively and crafting a more balanced life.
            </Paragraph>
            <SubTitle>Work and Career:</SubTitle>
            <Paragraph>
              Professional responsibilities, deadlines, and interpersonal dynamics at work can all be significant sources of stress. Balancing the demands of productivity with personal well-being is a common challenge in the modern workplace.
            </Paragraph>
            <SubTitle>Personal Relationships:</SubTitle>
            <Paragraph>
              While relationships can be a source of great joy, they can also be a source of stress. Conflicts with family, friends, or partners require energy and emotional investment to navigate.
            </Paragraph>
            <SubTitle>Health Concerns:</SubTitle>
            <Paragraph>
              Personal health issues or caring for a family member with health problems can lead to chronic stress, which in turn can affect one's own health further, creating a cycle that can be hard to break.
            </Paragraph>
            <SubTitle>Financial Well-being:</SubTitle>
            <Paragraph>
              Financial insecurity or the pressure to maintain a certain lifestyle can lead to constant worry, making financial health a common stressor for many people.
            </Paragraph>
            <SubTitle>Life Changes:</SubTitle>
            <Paragraph>
              Major life changes, even positive ones like a new job or the birth of a child, can bring about stress as one adjusts to new responsibilities and altered routines.
            </Paragraph>
            <SubTitle>Everyday Hassles:</SubTitle>
            <Paragraph>
              Sometimes it's not just the big things; daily hassles and annoyances, like traffic, misplaced keys, or minor disagreements can accumulate and contribute to one's stress load.
            </Paragraph>
            <Paragraph>
              By identifying these common stressors, you can begin to develop strategies to manage them effectively. The key is not to eliminate stress completely but to learn how to control it and how to bounce back from its effects.
            </Paragraph>
          </ContentSection>
        );
      };
      
      const TechniquesSection = () => {
        return (
          <ContentSection>
            <SectionTitle>Mastering Stress with Proven Techniques</SectionTitle>
            <Paragraph>
              Managing stress effectively requires a toolbox of techniques that you can turn to. The key is to find what works best for you and to remember that a combination of strategies is often the most effective. Below, we explore a variety of approaches that empower you to regain control and restore balance.
            </Paragraph>
      
            <SubTitle>Mindfulness and Meditation:</SubTitle>
            <Paragraph>
              Mindfulness teaches us to be present in the moment, to acknowledge our thoughts and feelings without judgment. Meditation, a practice often used in mindfulness, allows us to still our minds and find peace in the midst of chaos. Together, they can reduce the stress response and promote relaxation.
            </Paragraph>
      
            <SubTitle>Physical Activity and Exercise:</SubTitle>
            <Paragraph>
              Exercise is a powerful stress reliever. It pumps up your endorphins, improves your mood, and can serve as a valuable distraction from your daily worries. Whether it's a brisk walk, a session of high-intensity training, or yoga, find a rhythm of activity that brings you joy and vitality.
            </Paragraph>
      
            <SubTitle>Time Management and Organization:</SubTitle>
            <Paragraph>
              Stress often arises from feeling out of control. By mastering time management and organization, you can prioritize tasks, set boundaries, and create a sense of order. This empowerment can significantly reduce stress levels and improve productivity.
            </Paragraph>
      
            <SubTitle>Social Support and Communication:</SubTitle>
            <Paragraph>
              Building a strong support network can provide you with shoulders to lean on when stress weighs heavily. Communication is key; sharing your experiences with friends, family, or support groups can provide relief and strengthen your resilience.
            </Paragraph>
      
            <SubTitle>Professional Help and When to Seek It:</SubTitle>
            <Paragraph>
              Sometimes, stress can become overwhelming, affecting your health and happiness. In such cases, it's wise to seek professional help. Therapists, counselors, and psychologists can offer strategies to cope with stress and can provide guidance tailored to your unique situation.
            </Paragraph>
      
            <Paragraph>
              Each of these techniques can be a lifeline in turbulent times. We encourage you to explore these methods, learn more about them, and integrate them into your life. Remember, managing stress is not about suppressing it but understanding and directing it towards a more balanced and fulfilling life.
            </Paragraph>
          </ContentSection>
        );
      };

      const DeepDiveSection = () => {
        return (
          <ContentSection>
            <SectionTitle>Deep Dive into Stress-Relief Techniques</SectionTitle>
            
            <SubTitle>Mindfulness Meditation Guide:</SubTitle>
            <Paragraph>
              Find a quiet space and make yourself comfortable. Begin by taking several deep breaths to center your focus. Observe your breath's natural rhythm without trying to change it. As thoughts arise, acknowledge them without judgment and return your focus to your breath. Start with five minutes a day, gradually increasing the time as you feel more comfortable with the practice.
            </Paragraph>
            {/* Link to video or animation for Mindfulness Meditation */}
      
            <SubTitle>Exercise Routine for Stress Relief:</SubTitle>
            <Paragraph>
              Engage in at least 30 minutes of moderate to vigorous physical activity most days of the week. This could be a brisk walk, a jog, a dance class, or any other form of exercise you enjoy. The goal is to increase your heart rate and release endorphins, improving your mood and lowering stress.
            </Paragraph>
            {/* Link to video or animation for Exercise Routine */}
      
            <SubTitle>Effective Time Management:</SubTitle>
            <Paragraph>
              Start by setting clear goals for what you want to achieve. Break these goals into tasks and prioritize them based on importance and urgency. Use planners or digital tools to keep track of your tasks and deadlines. Don't forget to schedule breaks and leisure activities to maintain a healthy work-life balance.
            </Paragraph>
            {/* Link to video or animation for Time Management */}
      
            <SubTitle>Building Your Support Network:</SubTitle>
            <Paragraph>
              Reach out to friends, family, and colleagues who you trust and feel comfortable with. Attend social events, join clubs, or volunteer to meet new people. Practice active listening and open communication to strengthen these relationships. Remember, it’s about quality, not quantity.
            </Paragraph>
            {/* Link to video or animation for Building Support Networks */}
      
            <SubTitle>When to Seek Professional Help:</SubTitle>
            <Paragraph>
              If stress is consistently overwhelming and you find it difficult to cope, it may be time to seek professional help. This step is about empowerment, not defeat. Professionals can offer personalized strategies and support systems that provide relief and promote long-term well-being.
            </Paragraph>
            {/* Link to video or animation for Seeking Professional Help */}
      
            <Paragraph>
              These deep dives are designed to give you actionable steps to manage and alleviate stress. By engaging with these techniques, you'll be taking active strides towards a more serene and balanced life.
            </Paragraph>
          </ContentSection>
        );
      };
      
      const LifestyleAdjustmentsSection = () => {
        return (
          <ContentSection>
            <SectionTitle>Lifestyle Adjustments for Stress Reduction</SectionTitle>
            <Paragraph>
              Small changes in your daily life can lead to significant improvements in how you handle stress. Adjusting your lifestyle doesn’t have to be drastic; even the most minor tweaks can help create a more serene state of mind.
            </Paragraph>
      
            <SubTitle>Daily Habits for a Balanced Life:</SubTitle>
            <List>
              <ListItem>Start your day with a plan. Spend a few minutes each morning to outline your key tasks for the day.</ListItem>
              <ListItem>Engage in regular physical activity. Aim for at least 30 minutes of activity that you enjoy, whether it's a walk, yoga, or gardening.</ListItem>
              <ListItem>Integrate relaxation techniques into your routine. This can be deep breathing exercises, progressive muscle relaxation, or visualization.</ListItem>
              <ListItem>Connect with others. Make time for friends and family, as social connections can act as a buffer against stress.</ListItem>
              <ListItem>Prioritize sleep. Aim for 7-9 hours of quality sleep each night to restore your mind and body.</ListItem>
              <ListItem>Eat a balanced diet. Nutritious foods can combat the impact of stress by boosting the immune system and lowering blood pressure.</ListItem>
              <ListItem>Practice mindfulness throughout the day. Take short breaks to simply observe your surroundings and breathe.</ListItem>
              <ListItem>Reflect on the day’s achievements. No matter how small, acknowledging your accomplishments can boost your mood and resilience.</ListItem>
            </List>
      
            <Paragraph>
              By weaving these habits into the fabric of your day, you'll not only manage stress more effectively but also enhance your overall quality of life. Remember, the journey to a stress-managed life is continuous, and every step, no matter how small, is progress.
            </Paragraph>
          </ContentSection>
        );
      };
      
      
    return (
        <PageContainer>
        <StressManagementHeader />
        <IntroductionSection />
        <SymptomsSection />
        <CausesSection />
        <TechniquesSection />
        <DeepDiveSection />
        <LifestyleAdjustmentsSection />


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

  