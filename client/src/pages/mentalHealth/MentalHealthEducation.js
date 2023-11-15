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
  background: url('') no-repeat center center; // Add your header image path
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
    const shareMessage = encodeURIComponent("Check out this information on Mental health education!");

    // The IntroductionSection component
    
    // Header Section Content
// Inside your component file


const MentalHealthHeader = () => {
    const imageSrc = 'https://images.pexels.com/photos/8378741/pexels-photo-8378741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'; // Direct URL to the image

    return (
        <HeaderContainer>
            
            <SectionTitle>Understanding Mental Health</SectionTitle>
            <SubTitle>Empower Your Mind with Knowledge and Awareness</SubTitle>
            <img src={imageSrc} alt="Mental Health" style={{ width: '50%', height: 'auto' }} />
        </HeaderContainer>
    );
};

  
  const UnderstandingMentalHealthDisordersSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Understanding Mental Health Disorders</SectionTitle>
        <Paragraph>
          Mental health disorders affect millions of people around the globe and come in many forms, from mood disorders like depression and bipolar disorder to anxiety disorders, schizophrenia, and more. Recognizing the symptoms and understanding the causes are the first steps towards effective management and recovery.
        </Paragraph>
        <Paragraph>
          Common symptoms can range from persistent feelings of sadness or fear, extreme mood changes, social withdrawal, to changes in eating and sleeping habits, among others. Causes are often a complex blend of genetic, biological, environmental, and psychological factors.
        </Paragraph>
        <Paragraph>
          Education plays a pivotal role in destigmatizing mental health issues. By learning about these disorders, we can foster empathy, support those affected, and encourage an open dialogue that can lead to early intervention and better health outcomes.
        </Paragraph>
        <Paragraph>
          It's crucial to remember that mental health disorders are medical conditions, not personal failings. Like any other illness, they require understanding, treatment, and compassion.
        </Paragraph>
      </ContentSection>
    );
  };
  
  const MentalHealthAwarenessSection = () => {
    return (
      <ContentSection>
        <SectionTitle>The Importance of Mental Health Awareness</SectionTitle>
        <Paragraph>
          Awareness about mental health is more than just understanding the conditions themselves; it's about cultivating an environment where conversations around mental health are normalized and encouraged. This awareness can break down barriers, eliminate stigma, and pave the way for a more empathetic society.
        </Paragraph>
        <Paragraph>
          By fostering mental health awareness, individuals are empowered to seek help early, and those around them are more equipped to provide the appropriate support. It encourages the implementation of comprehensive mental health education in schools, workplaces, and communities, leading to a well-informed public that can recognize signs of mental distress and know how to respond.
        </Paragraph>
        <Paragraph>
          Awareness also plays a critical role in influencing policy and funding decisions. It can lead to the development of better support systems, resources, and treatment options that are accessible to those in need. As society becomes more aware, the collective push for improved mental health services and insurance coverage gains momentum, facilitating a broader reach of mental health care.
        </Paragraph>
        <Paragraph>
          Ultimately, mental health awareness is about recognizing the intrinsic value of mental well-being in our lives and in the lives of those around us. It's about creating a world where mental health is regarded with the same seriousness as physical health, for a holistic approach to the well-being of all individuals.
        </Paragraph>
      </ContentSection>
    );
  };

  const SelfCareStrategiesSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Self-Care Strategies for Mental Well-being</SectionTitle>
        <Paragraph>
          Taking care of your mental health is as vital as taking care of your physical health. Self-care strategies are key to maintaining mental well-being and can help you manage stress, reduce the risk of illness, and increase your energy levels. Here are some practical tips to incorporate into your self-care routine:
        </Paragraph>
  
        <SubTitle>Mindfulness Practices:</SubTitle>
        <Paragraph>
          Mindfulness can reduce stress and anxiety and improve your mood. Techniques such as meditation, deep breathing exercises, and yoga can help you stay grounded and focused on the present moment.
        </Paragraph>
  
        <SubTitle>Adequate Rest:</SubTitle>
        <Paragraph>
          Quality sleep is crucial for mental health. Establish a regular sleep schedule, create a restful environment, and develop a calming bedtime routine to enhance your sleep quality.
        </Paragraph>
  
        <SubTitle>Healthy Relationships:</SubTitle>
        <Paragraph>
          Cultivate supportive relationships that foster mutual respect and understanding. Spend time with loved ones, communicate openly, and engage in positive social activities.
        </Paragraph>
  
        <SubTitle>Recreational Activities:</SubTitle>
        <Paragraph>
          Participate in activities that bring you joy and relaxation. Whether it's reading, hiking, painting, or playing music, engaging in hobbies can provide a much-needed break from the stresses of daily life.
        </Paragraph>
  
        <Paragraph>
          Remember, self-care is a personal journey, and what works for one person might not work for another. The key is to find activities that you enjoy and that contribute to your mental well-being, making them a regular part of your life.
        </Paragraph>
      </ContentSection>
    );
  };


  
  const NavigatingMentalHealthServicesSection = () => {
    const mentalHealthServicesImageSrc = 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Replace with your actual image URL

    return (
      <ContentSection>
        <img src={mentalHealthServicesImageSrc} alt="Mental Health Services" style={{ width: '100%', height: 'auto' }} />
        <SectionTitle>Navigating Mental Health Services</SectionTitle>
        <Paragraph>
          Accessing mental health services can be a significant step toward recovery and managing mental well-being. Understanding how to navigate these services and knowing what to expect can make the process more approachable and less daunting.
        </Paragraph>
  
        <SubTitle>Finding the Right Support:</SubTitle>
        <Paragraph>
          Start by consulting with your primary healthcare provider, who can offer an initial evaluation and, if necessary, referrals to mental health specialists. Mental health services can be accessed through local clinics, hospitals, or private practices, as well as through telehealth platforms.
        </Paragraph>
  
        <SubTitle>Types of Mental Health Professionals:</SubTitle>
        <Paragraph>
          Psychologists, psychiatrists, licensed clinical social workers, and licensed professional counselors are some of the professionals who play different roles in mental health care. Psychologists and therapists provide therapy and counseling, while psychiatrists can prescribe medication and manage its effects. Social workers offer support and resources to help navigate life's challenges, and counselors specialize in specific issues like addiction, grief, or family therapy.
        </Paragraph>
  
        <SubTitle>What to Expect in Therapy:</SubTitle>
        <Paragraph>
          In therapy, you can expect confidentiality, a non-judgmental space, and collaborative goal-setting. Your therapist will work with you to identify issues, develop coping strategies, and create a plan tailored to your needs. The process is dynamic and varies according to individual circumstances and goals.
        </Paragraph>
  
        <Paragraph>
          Seeking help is a brave and proactive step. Remember, the goal of mental health services is to provide support and strategies that empower you to lead a fulfilling life. You are not alone, and help is available.
        </Paragraph>
      </ContentSection>
    );
  };

  const SupportSystemsAndCommunityResourcesSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Support Systems and Community Resources</SectionTitle>
        <Paragraph>
          Building a strong support system and knowing the community resources available to you are crucial components of maintaining and improving mental health. These resources can provide you with the necessary tools and support to navigate life's challenges.
        </Paragraph>
  
        <SubTitle>Personal Support Systems:</SubTitle>
        <Paragraph>
          Your personal support system may include family, friends, peers, or mentors. These individuals can offer emotional support, understanding, and practical help when needed. Don't hesitate to reach out to them; sharing your experiences can be both comforting and empowering.
        </Paragraph>
  
        <SubTitle>Professional Support Networks:</SubTitle>
        <Paragraph>
          Beyond your personal circle, professional support networks such as therapists, counselors, and support groups offer specialized assistance. They can help you work through issues, provide coping strategies, and connect you with others experiencing similar challenges.
        </Paragraph>
  
        <SubTitle>Community Resources:</SubTitle>
        <Paragraph>
          Many communities have resources such as helplines, support groups, and educational workshops focused on mental health. Organizations like Kids Help Phone offer confidential services for young people seeking help with any issue they might be facing. Additionally, international agencies provide resources that can be accessed online, offering support across different regions.
        </Paragraph>
  
        <List>
          <ListItem>
            <a href="https://kidshelpphone.ca/" target="_blank" rel="noopener noreferrer">
              Kids Help Phone (Canada)
            </a> - A 24/7 counseling and information service for young people.
          </ListItem>
          <ListItem>
            <a href="https://www.mhanational.org/" target="_blank" rel="noopener noreferrer">
              Mental Health America
            </a> - Provides a hub of information and support services.
          </ListItem>
          <ListItem>
            <a href="https://www.mind.org.uk/" target="_blank" rel="noopener noreferrer">
              Mind (UK)
            </a> - Offers an extensive range of mental health information and support.
          </ListItem>
          <ListItem>
            <a href="https://www.beyondblue.org.au/" target="_blank" rel="noopener noreferrer">
              Beyond Blue (Australia)
            </a> - Provides information and support to help everyone in Australia achieve their best possible mental health.
          </ListItem>
          <ListItem>
            <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer">
              World Health Organization
            </a> - Offers global resources and information on mental health.
          </ListItem>
        </List>
  
        <Paragraph>
          Utilizing these support systems and community resources can provide you with a sense of solidarity and the reassurance that you are not alone. They are powerful tools that can aid in your journey to mental wellness.
        </Paragraph>
      </ContentSection>
    );
  };
  
  const MentalHealthInDifferentDemographicsSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Mental Health Across Life's Spectrum</SectionTitle>
        <Paragraph>
          Mental health does not discriminate and can affect anyone at any point in their life. However, the way it manifests and the types of challenges faced can vary widely across different demographics. Age, life stages, and occupational stress are just a few factors that can influence mental health needs and the approach to care.
        </Paragraph>
  
        <SubTitle>Understanding Different Needs:</SubTitle>
        <Paragraph>
          Young adults may face stress related to education and entering the workforce, while professionals might grapple with work-life balance and job security. Parents and caregivers could experience stress from their responsibilities, and older adults might deal with life transitions and isolation.
        </Paragraph>
  
        <SubTitle>Tailored Mental Health Advice:</SubTitle>
        <Paragraph>
          It's essential to recognize these differences and seek tailored advice that resonates with your life situation. For instance, students may benefit from stress management techniques geared towards academic pressures, whereas working professionals might need strategies that focus on balancing professional demands with personal life.
        </Paragraph>
  
        <Paragraph>
          No matter your stage of life or circumstances, there are strategies and resources available to support your mental well-being. It's about finding the right tools that work for you and applying them in a way that fits your individual journey.
        </Paragraph>
  
        <Paragraph>
          Remember, seeking support is a sign of strength, and addressing mental health proactively can lead to better outcomes and a more fulfilling life. Don’t hesitate to reach out for help, whether it’s through friends, family, community resources, or professional services.
        </Paragraph>
      </ContentSection>
    );
  };
  

  const AdvocacyAndAllyshipSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Advocacy and Allyship in Mental Health</SectionTitle>
        <Paragraph>
          Being an advocate for mental health means taking active steps to raise awareness, reduce stigma, and support those around you. As an ally, you can create waves of positive change within your community, encouraging open dialogue and fostering a culture of support.
        </Paragraph>
  
        <SubTitle>Becoming a Mental Health Advocate:</SubTitle>
        <Paragraph>
          Advocacy can take many forms, from sharing information and resources to supporting mental health initiatives in your area. You can participate in or organize events such as workshops, fundraisers, or awareness campaigns to promote understanding and action for mental health causes.
        </Paragraph>
  
        <SubTitle>Supporting Those Around You:</SubTitle>
        <Paragraph>
          When someone you know is facing mental health challenges, your support can make a significant difference. Offering a listening ear, providing resources, or simply being there can be powerful. Remember, sometimes the simplest acts of kindness can be the most impactful.
        </Paragraph>
  
        <Paragraph>
          Regular engagement with friends, family, and colleagues can help build a supportive community. Check in with each other, share experiences, and create an environment where everyone feels safe to speak openly about their mental health without fear of judgment.
        </Paragraph>
  
        <Paragraph>
          By stepping up as an advocate and ally, you contribute to a world where mental well-being is prioritized, and everyone has access to the support they need. Together, we can build communities that are not only aware but also deeply compassionate and responsive to mental health needs.
        </Paragraph>
      </ContentSection>
    );
  };
  
  const ConclusionAndCallToActionSection = () => {
    return (
      <ContentSection>
        <SectionTitle>Embrace the Journey of Mental Well-being</SectionTitle>
        <Paragraph>
          We've explored the multifaceted nature of mental health and the importance of understanding, awareness, and support. Mental well-being is a journey that intertwines with every aspect of our lives, impacting how we think, feel, and engage with the world.
        </Paragraph>
        <Paragraph>
          The key takeaways from this exploration remind us that mental health is a universal concern, touching individuals across all demographics. It's a shared responsibility to foster environments that promote open discussions, provide support, and offer resources for those in need.
        </Paragraph>
        <Paragraph>
          As you move forward, carry with you the knowledge that your actions can have a profound impact. Whether it's through advocacy, creating awareness, or simply being there for someone, your involvement matters. Engage with your community, support friends and family, and never hesitate to seek help when you need it.
        </Paragraph>
        <Paragraph>
          Mental health is an integral part of our collective humanity, and together, we can build a world that champions mental wellness and supports each individual's journey towards a happier, healthier life.
        </Paragraph>
      </ContentSection>
    );
  };
  
  
  

      
    return (
        <>
      <Helmet>
        <title>Understanding Mental Health - Balanced Blueprint</title>
        <meta name="description" content="Learn about mental health disorders, awareness, and self-care strategies." />
        <meta name="keywords" content="mental health, mental well-being, self-care, mental health awareness, mental health support" />
        {/* Other meta tags */}
      </Helmet>
        <PageContainer>
          <MentalHealthHeader />
            <UnderstandingMentalHealthDisordersSection />
            <MentalHealthAwarenessSection />
            <SelfCareStrategiesSection />
            <NavigatingMentalHealthServicesSection />
            <SupportSystemsAndCommunityResourcesSection />
            <MentalHealthInDifferentDemographicsSection />
            <AdvocacyAndAllyshipSection />  
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
        </>
    );
  }

  