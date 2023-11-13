import React, { useState } from 'react'; 
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';



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
  margin: 20px;
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
    const shareMessage = encodeURIComponent("Check out this information on healthy lifestyle practices for good mental health and wellbeing!");

    // The IntroductionSection component
    
    // Header Section Content
    const LifestyleHeader = () => {
      return (
        <HeaderContainer>
          <SectionTitle>Lifestyle Practices for Well-Being</SectionTitle>
          <SubTitle>Crafting daily habits for a vibrant and fulfilling life.</SubTitle>
        </HeaderContainer>
      );
    };
    
    const IntroductionToLifestylePractices = () => {
      return (
        <ContentSection>
          <SectionTitle>Embracing Lifestyle Practices</SectionTitle>
          <Paragraph>
            Lifestyle practices encompass the choices we make every day that affect our physical, mental, and emotional health. They are the routines we engage in, the food we consume, the amount of sleep we get, and how we manage stress. These daily habits are the pillars upon which our well-being is built, influencing our energy levels, mood, and overall quality of life.
          </Paragraph>
          <Paragraph>
            The interconnection between lifestyle choices and health cannot be overstated. Nutrition, physical activity, sleep, stress management, and social interactions all play a critical role in maintaining balance within our bodies and minds. A positive lifestyle practice in one area often supports and enhances well-being in another, creating a synergistic effect that boosts overall health.
          </Paragraph>
          <Paragraph>
            As we delve into the various aspects of lifestyle practices, remember that small, consistent actions can lead to profound changes. The journey towards a healthier, more vibrant life begins with the steps we take today.
          </Paragraph>
        </ContentSection>
      );
    };
    
    const PillarsOfHealthyLifestyleSection = () => {
      return (
        <ContentSection>
          <SectionTitle>The Pillars of a Healthy Lifestyle</SectionTitle>
          <Paragraph>
            A healthy lifestyle is supported by several fundamental pillars, each contributing to the overall structure of our well-being. When these pillars are strong, they uphold and enhance our quality of life; when neglected, our well-being may waver. Here, we explore these essential elements and their roles in cultivating a healthy and fulfilling life.
          </Paragraph>
    
          <SubTitle>Nutrition:</SubTitle>
          <Paragraph>
            Good nutrition is the fuel for our body's engine, providing the energy and nutrients necessary for optimal function. A balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats can boost immunity, enhance mood, and reduce the risk of chronic diseases.
          </Paragraph>
    
          <SubTitle>Sleep:</SubTitle>
          <Paragraph>
            Sleep is the body's time to repair and rejuvenate. Quality sleep strengthens cognitive function, emotional resilience, and physical health. It's as crucial to well-being as eating and breathing, and consistent sleep patterns are key to long-term health.
          </Paragraph>
    
          <SubTitle>Exercise:</SubTitle>
          <Paragraph>
            Regular physical activity is vital for maintaining muscle strength, cardiovascular health, and flexibility. Beyond the physical benefits, exercise also releases endorphins, often referred to as 'feel-good' hormones, which can alleviate stress and promote a sense of well-being.
          </Paragraph>
    
          <SubTitle>Mindfulness:</SubTitle>
          <Paragraph>
            Mindfulness is the practice of being present and fully engaged with the current moment. It allows for a deeper understanding of our thoughts and feelings and can significantly reduce stress. Incorporating mindfulness into daily life can improve mental clarity, emotional stability, and overall life satisfaction.
          </Paragraph>
    
          <Paragraph>
            These pillars—nutrition, sleep, exercise, and mindfulness—work in harmony to support a robust and resilient you. By investing in each pillar, you are building a foundation for a life that's not only healthier but more joyful and meaningful as well.
          </Paragraph>
        </ContentSection>
      );
    };
    const AssessmentOfCurrentHabitsSection = () => {
      return (
        <ContentSection>
          <SectionTitle>Assessing Your Lifestyle Habits</SectionTitle>
          <Paragraph>
            Self-awareness is the first step toward positive change. By taking a moment to assess your current lifestyle habits, you can illuminate areas of strength and identify opportunities for growth. Reflect on the following aspects of your daily routine to gauge where you stand and where you might like to go.
          </Paragraph>
    
          <SubTitle>Your Self-Evaluation Checklist:</SubTitle>
          <Paragraph>Consider the following questions carefully and answer them honestly:</Paragraph>
          <List>
            <ListItem>Do you prioritize balanced nutrition, and how often do you include fruits, vegetables, and whole grains in your meals?</ListItem>
            <ListItem>How many hours of restful sleep do you get on average, and do you have a regular sleep schedule?</ListItem>
            <ListItem>What types of physical activity do you engage in, and with what frequency and intensity?</ListItem>
            <ListItem>How often do you practice mindfulness or relaxation techniques to manage stress?</ListItem>
            <ListItem>Do you have a structured routine that includes time for work, relaxation, and social activities?</ListItem>
            <ListItem>How do you monitor your progress towards your health and wellness goals?</ListItem>
            <ListItem>In what ways do you foster social connections, and how often do you interact with your community?</ListItem>
          </List>
          <Paragraph>
            This checklist is designed not as a measure of success or failure but as a starting point for reflection and future planning. Celebrate the habits that serve you well, and approach areas for improvement with curiosity and motivation. Small, incremental changes can lead to significant transformations.
          </Paragraph>
        </ContentSection>
      );
    };
    
    const NutritionAndHydrationSection = () => {
      let navigate = useNavigate();

      const handleNavigateToNutrition = () => {
        // Navigate to the Nutrition page
        navigate('/nutrition');
      };
    
      const handleNavigateToHydration = () => {
        // Navigate to the Hydration page
        navigate('/Hydration');
      };
      return (
        <ContentSection>
          <SectionTitle>Nutrition and Hydration for Vitality</SectionTitle>
          <Paragraph>
            The foods and beverages you consume play a pivotal role in your overall health. A balanced diet rich in nutrients supports your body's many functions and can significantly enhance your well-being. Hydration is equally crucial, as water is essential for every cell and function in your body.
          </Paragraph>
    
          <SubTitle>Building a Balanced Diet:</SubTitle>
          <Paragraph>
            Aim for a colorful plate at each meal, incorporating a variety of fruits and vegetables to ensure a range of vitamins and minerals. Include lean proteins to build and repair tissues and choose whole grains to provide the energy your body needs. Healthy fats, such as those found in avocados, nuts, and seeds, support brain health and help you feel full.
          </Paragraph>
    
          <SubTitle>Staying Hydrated:</SubTitle>
          <Paragraph>
            Hydration affects digestion, absorption, circulation, and even skin health. Drinking enough water each day is vital for these processes and more. If you find it challenging to drink enough water, try carrying a reusable water bottle, setting reminders to take sips throughout the day, or flavoring your water with fruits or herbs for a refreshing twist.
          </Paragraph>
    
          <Paragraph>
            We encourage you to explore the Nutrition and Hydration sections of this app for in-depth information, meal planning tips, and healthy recipes. There, you’ll find resources tailored to help you understand your body’s needs, make informed dietary choices, and establish habits that nourish and energize you.
          </Paragraph>
    
          <Button onClick={handleNavigateToNutrition}>Discover More in Nutrition</Button>
          <Button onClick={handleNavigateToHydration}>Explore Hydration Tips</Button>
        </ContentSection>
      );
    };

    const PhysicalActivitySection = () => {
      let navigate = useNavigate();
    
      const handleNavigateToExercises = () => {
        navigate('/exercises');
      };
    
      return (
        <ContentSection>
          <SectionTitle>Physical Activity for Every Level</SectionTitle>
          <Paragraph>
            Movement is a key aspect of a healthy lifestyle, regardless of your fitness level. Integrating physical activity into your day can enhance not only your physical health but also your mental well-being. The goal is to find joy in movement in ways that resonate with your personal interests and fitness level.
          </Paragraph>
    
          <SubTitle>For Beginners:</SubTitle>
          <Paragraph>
            Start with simple activities like walking, stretching, or yoga. These can be done almost anywhere and require minimal equipment. Commit to short sessions and gradually increase the duration as your body adapts.
          </Paragraph>
    
          <SubTitle>For Intermediate Levels:</SubTitle>
          <Paragraph>
            If you're already active, challenge yourself with structured workouts, such as cycling, swimming, or group fitness classes. Explore different types of exercises to keep your routine exciting and engaging.
          </Paragraph>
    
          <SubTitle>For Advanced Fitness Enthusiasts:</SubTitle>
          <Paragraph>
            Incorporate high-intensity interval training (HIIT), weightlifting, or advanced sport-specific training to push your limits and keep your workouts challenging.
          </Paragraph>
    
          <SubTitle>Making It Enjoyable:</SubTitle>
          <Paragraph>
            Choose activities that you enjoy, and exercise won't feel like a chore. Whether it's dancing, rock climbing, or playing a sport, having fun with your workout is key to maintaining consistency.
          </Paragraph>
    
          <SubTitle>Tips for Consistency:</SubTitle>
          <Paragraph>
            Set realistic goals and create a schedule that fits your lifestyle. Track your progress, celebrate your achievements, and stay flexible. Workouts should be adaptable to your life's ebb and flow.
          </Paragraph>
    
          <Paragraph>
            For personalized workout plans, tutorials, and a supportive fitness community, visit our "/exercises" section. There, you'll find resources tailored to every level to help you stay active and achieve your fitness goals.
          </Paragraph>
    
          <Button onClick={handleNavigateToExercises}>Explore Exercise Plans</Button>
        </ContentSection>
      );
    };
    
    const RestorativeSleepSection = () => {
      return (
        <ContentSection>
          <SectionTitle>Restorative Sleep: The Foundation of Recovery</SectionTitle>
          <Paragraph>
            Sleep is not a luxury—it's a fundamental process critical for physical repair, cognitive function, and emotional regulation. Quality sleep is as vital as nutrition and exercise for our health, and establishing a restful bedtime routine is essential for consistent, restorative sleep.
          </Paragraph>
    
          <SubTitle>Strategies for Improving Sleep Quality:</SubTitle>
          <List>
            <ListItem>Stick to a sleep schedule, even on weekends, to regulate your body's clock.</ListItem>
            <ListItem>Create a bedtime ritual that signals your body it's time to wind down, such as reading or gentle stretching.</ListItem>
            <ListItem>Ensure your sleep environment is conducive to rest, with a comfortable mattress and pillows, and minimal light and noise.</ListItem>
            <ListItem>Avoid screens at least an hour before bed, as the blue light can disrupt your natural sleep-wake cycle.</ListItem>
            <ListItem>Limit caffeine and heavy meals in the evening, and consider a light snack if you're slightly hungry at night.</ListItem>
          </List>
    
          <SubTitle>The Role of Sleep in Recovery and Emotional Regulation:</SubTitle>
          <Paragraph>
            During sleep, your body undergoes various processes that repair muscles, consolidate memories, and release hormones regulating growth and appetite. Adequate sleep is also intimately linked to emotional well-being. It helps process emotional information and supports a balanced mood, resilience, and decision-making capacity. Without sufficient sleep, you're more likely to experience irritability, stress, and mood swings.
          </Paragraph>
    
          <Paragraph>
            Recognize sleep as a pillar of your health. By prioritizing and improving your sleep, you're not just resting—you're actively contributing to your body's ability to function at its best.
          </Paragraph>
        </ContentSection>
      );
    };
    
    const MindfulnessAndRelaxationSection = () => {
      return (
        <ContentSection>
          <SectionTitle>Mindfulness and Relaxation</SectionTitle>
          <Paragraph>
            In our fast-paced world, taking the time to slow down and connect with the present moment can have a transformative effect on your well-being. Mindfulness and relaxation are accessible tools that can be woven into the fabric of everyday life, offering a refuge of calm and clarity amidst the hustle and bustle.
          </Paragraph>
    
          <SubTitle>Simple Mindfulness Exercises:</SubTitle>
          <List>
            <ListItem>Breathing Techniques: Take a few minutes for deep breathing exercises. Inhale slowly for a count of four, hold for a count of four, and exhale for a count of four. This can help center your thoughts and reduce anxiety.</ListItem>
            <ListItem>Observational Practice: Choose an object to observe for a minute or two. This could be a leaf, a cup of coffee, or even your own hands. Notice all the details, textures, and colors, bringing your focus to the present.</ListItem>
            <ListItem>Body Scan: Lie down and progressively relax each part of your body, starting from your toes and moving upwards. This exercise promotes bodily awareness and relaxation.</ListItem>
          </List>
    
          <SubTitle>Benefits of Regular Meditation:</SubTitle>
          <Paragraph>
            Meditation is a practice that nurtures the mind, body, and spirit. Engaging in regular meditation can enhance focus, lower stress levels, and improve emotional balance. It trains the brain to achieve sustained attention and to return to a state of calm when negative thoughts and emotions arise.
          </Paragraph>
    
          <SubTitle>Stress-Relief Practices:</SubTitle>
          <Paragraph>
            Incorporate stress-relief practices into your routine, such as listening to soothing music, enjoying nature, or practicing yoga. These activities can provide mental and emotional relief, contributing to a more relaxed state of being.
          </Paragraph>
    
          <Paragraph>
            As you explore various techniques, observe what works best for you. Mindfulness and relaxation are personal experiences, and their most profound benefits are often found in the nuances of your individual practice.
          </Paragraph>
        </ContentSection>
      );
    };
    
    const SocialConnectionsSection = () => {
      return (
        <ContentSection>
          <SectionTitle>Strengthening Social Connections</SectionTitle>
          <Paragraph>
            Humans are social creatures by nature, and our relationships with others have a profound impact on our mental health and happiness. Nurturing these connections can lead to a richer, more rewarding life and provide a strong support network for times of need.
          </Paragraph>
    
          <SubTitle>Value of Relationships and Community:</SubTitle>
          <Paragraph>
            Strong social ties can improve your mood, enhance your sense of belonging, and increase your sense of purpose. Involvement in community activities not only enriches your own life but also contributes to the well-being of those around you.
          </Paragraph>
    
          <SubTitle>Staying Socially Connected:</SubTitle>
          <List>
            <ListItem>Make Time for Family and Friends: Regularly schedule time to catch up with loved ones, whether it's a phone call, a coffee date, or a family dinner.</ListItem>
            <ListItem>Join Groups with Common Interests: Whether it's a book club, a fitness class, or a local gardening group, shared activities can be a great way to meet new people and strengthen bonds.</ListItem>
            <ListItem>Volunteer: Giving your time to a cause you care about can connect you with others and contribute to your sense of self-worth and community.</ListItem>
            <ListItem>Stay Open to New Relationships: Be open to forming new friendships throughout all stages of life. Each person you meet can bring unique perspectives and experiences to your world.</ListItem>
            <ListItem>Embrace Technology: Use social media and communication tools to maintain relationships, especially with those who are far away, while being mindful of the quality of interactions.</ListItem>
          </List>
    
          <Paragraph>
            Building and maintaining social connections requires effort and intention, but the rewards are immeasurable. These relationships not only provide joy and comfort but also act as pillars of support and sources of meaning in our lives.
          </Paragraph>
        </ContentSection>
      );
    };
    
    const TimeManagementAndOrganizationSection = () => {
      return (
        <ContentSection>
          <SectionTitle>Mastering Time Management and Organization</SectionTitle>
          <Paragraph>
            Effective time management and organization are key to reducing stress, enhancing productivity, and creating space for the things that matter most in life. By mastering these skills, you can transform your day-to-day experience, making it more structured, efficient, and rewarding.
          </Paragraph>
    
          <SubTitle>Organizing Your Day:</SubTitle>
          <Paragraph>
            Start by mapping out your day with clear objectives. Break down large tasks into manageable actions and set realistic timeframes for completion. Utilize planners, apps, or digital calendars to keep track of your commitments and deadlines. Remember, a well-organized day brings clarity and calm to a busy life.
          </Paragraph>
    
          <SubTitle>Setting Goals and Prioritizing:</SubTitle>
          <Paragraph>
            Establish your goals, both short-term and long-term, and prioritize them based on their significance. Use the Eisenhower Matrix to categorize tasks by urgency and importance, focusing on what drives you towards your goals while managing or delegating less critical tasks.
          </Paragraph>
    
          <SubTitle>Taking Meaningful Breaks:</SubTitle>
          <Paragraph>
            Intersperse your work with short breaks to prevent burnout. Step away from your workspace for a brisk walk, a moment of meditation, or just to enjoy a cup of tea. These pauses can refresh your mind, boost creativity, and improve focus when you return to your tasks.
          </Paragraph>
    
          <Paragraph>
            Remember, time management and organization are not about filling every moment with work; they're about finding the most effective, balanced way to use your time. With these tools, you can carve out more moments for relaxation, self-care, and joy, leading to a more balanced lifestyle.
          </Paragraph>
        </ContentSection>
      );
    };

    const HabitFormationSection = () => {
      return (
        <ContentSection>
          <SectionTitle>Creating and Sustaining New Habits</SectionTitle>
          <Paragraph>
            Habits are the small decisions and actions you perform daily. Over time, these repeated behaviors become automatic processes that can significantly impact your life. Understanding the psychology of habit formation and utilizing specific strategies can empower you to create lasting positive changes.
          </Paragraph>
    
          <SubTitle>The Psychology Behind Habits:</SubTitle>
          <Paragraph>
            Every habit is built upon a simple loop: cue, routine, and reward. The cue triggers the behavior, the routine is the behavior itself, and the reward is the benefit you gain from the behavior. Recognizing and utilizing this loop is key to forming new habits and breaking undesirable ones.
          </Paragraph>
    
          <SubTitle>Developing New Habits:</SubTitle>
          <List>
            <ListItem>Start Small: Choose one new habit you'd like to develop and break it down into the smallest possible step.</ListItem>
            <ListItem>Set Clear Intentions: Be specific about what you want to achieve and why it's important to you.</ListItem>
            <ListItem>Create a Cue: Designate a consistent trigger for your new habit, whether it's a time of day, a particular location, or an action that already exists in your routine.</ListItem>
            <ListItem>Reward Yourself: Choose a meaningful reward that will motivate you to repeat the behavior.</ListItem>
            <ListItem>Stay Consistent: The more consistently you perform the behavior, the more automatic it will become. Try to perform your new habit at the same time and place each day.</ListItem>
          </List>
    
          <SubTitle>Breaking Old Habits:</SubTitle>
          <List>
            <ListItem>Identify Triggers: Understand what cues initiate the undesired habit and try to eliminate or alter them.</ListItem>
            <ListItem>Change the Routine: Replace the unwanted behavior with a more positive one that fulfills a similar need.</ListItem>
            <ListItem>Shift Your Mindset: Focus on the long-term benefits of breaking the habit rather than the immediate gratification it provides.</ListItem>
            <ListItem>Seek Support: Don’t hesitate to ask for help from friends, family, or professionals to reinforce your commitment to change.</ListItem>
          </List>
    
          <Paragraph>
            Remember, habit formation is a process that requires patience and persistence. Embrace each small victory along the way and be kind to yourself if you encounter setbacks. With time and practice, these new habits will become a natural part of your daily life, leading to lasting positive change.
          </Paragraph>
        </ContentSection>
      );
    };
    
    const SustainableLifestyleChangesSection = () => {
      return (
        <ContentSection>
          <SectionTitle>Embracing Sustainable Lifestyle Changes</SectionTitle>
          <Paragraph>
            Adopting a healthier lifestyle is not about fleeting trends or temporary overhauls; it’s about creating sustainable changes that you can maintain over the long term. This means finding balance, making adaptable choices, and evolving your habits as your life changes.
          </Paragraph>
    
          <SubTitle>Adaptability in Your Lifestyle:</SubTitle>
          <Paragraph>
            Life is dynamic, and our routines need to be flexible enough to accommodate those changes. Establish core habits that are manageable and can be adapted to different circumstances—like shorter home workouts when you can’t go to the gym or simple mindfulness exercises during busy days.
          </Paragraph>
    
          <SubTitle>The Role of Flexibility:</SubTitle>
          <Paragraph>
            Flexibility is the key to sustainability. It’s about making the best choices available at the moment rather than adhering strictly to ideal scenarios that may not always be practical. Learn to navigate life's unpredictable nature with a flexible approach to your wellness practices.
          </Paragraph>
    
          <SubTitle>Self-Compassion on the Journey:</SubTitle>
          <Paragraph>
            Approach your health journey with self-compassion. Recognize that perfection is unattainable and that progress is not linear. Treat yourself with kindness and understanding on the days when things don't go as planned, and celebrate your efforts rather than just outcomes.
          </Paragraph>
    
          <Paragraph>
            Sustainable lifestyle changes are those that bring joy, invigorate your health, and feel rewarding rather than restrictive. By incorporating flexibility and self-compassion into your approach, you’re more likely to enjoy the journey and continue it for life.
          </Paragraph>
        </ContentSection>
      );
    };
    
    const ConclusionAndCallToActionSection = () => {
      return (
        <ContentSection>
          <SectionTitle>Your Path to a Healthier Life</SectionTitle>
          <Paragraph>
            Throughout this journey, we've explored the multifaceted aspects of living a balanced life. From the food you eat to the quality of your sleep, the management of stress, and the joy found in physical movement, each element plays a crucial role in crafting a lifestyle that supports your overall health and happiness.
          </Paragraph>
          <Paragraph>
            Remember, the pursuit of well-being is a personal and evolving journey. It's about making choices that align with your values and goals, understanding that each day presents a new opportunity for growth and well-being. Embrace the journey with kindness towards yourself, and recognize that every small step is progress.
          </Paragraph>
          <Paragraph>
            Now is the time to take that first step. Choose one area to focus on, set a tangible goal, and begin building the habits that will lead to a more vibrant and fulfilling life. You have the power to shape your health and your future, starting right now.
          </Paragraph>
          
        </ContentSection>
      );
    };
    


      
    return (
        <PageContainer>
        <LifestyleHeader />
        <IntroductionToLifestylePractices />
        <PillarsOfHealthyLifestyleSection />
        <AssessmentOfCurrentHabitsSection />
        <NutritionAndHydrationSection />
        <PhysicalActivitySection />
        <RestorativeSleepSection /> 
        <MindfulnessAndRelaxationSection />
        <SocialConnectionsSection />
        <TimeManagementAndOrganizationSection />
        <HabitFormationSection />
        <SustainableLifestyleChangesSection />
        <ConclusionAndCallToActionSection />


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

  