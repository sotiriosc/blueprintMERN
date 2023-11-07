import React from 'react';
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
export default function Macronutrients() {

  
  const pageUrl = encodeURIComponent(window.location.href);
  const shareMessage = encodeURIComponent("Check out these great arm stretches for strength and flexibility!");

  return (
    <PageContainer>

      {/* Header */}
      <SectionTitle>Understanding Macronutrients</SectionTitle>
      <SubTitle>Unlock the secrets to better nutrition, muscle-building, and overall well-being.</SubTitle>
      
      {/* Introduction */}
      <Paragraph>
       Macronutrients are more than just the calories we consume; they're the foundational elements that power our body, help us build muscle, and sustain our energy levels. Whether you're a fitness enthusiast looking to maximize your gains or someone simply interested in a healthier lifestyle, understanding macronutrients can unlock a new level of well-being. In this guide, we'll explore what macronutrients are, why they're important, and how you can utilize them effectively to reach your health and fitness goals.
      </Paragraph>

      {/* Table of Contents */}
      <SectionTitle>Table of Contents</SectionTitle>
      <List>
        <ListItem>What are Macronutrients?</ListItem>
        <ListItem>The Three Types of Macronutrients</ListItem>
        <ListItem>Importance of Macronutrients</ListItem>
        <ListItem>Macronutrients and Health</ListItem>
        <ListItem>Micronutrients for Different Age Groups</ListItem>
        <ListItem>How to Get Your Micronutrients</ListItem>
        <ListItem>FAQs</ListItem>
        <ListItem>Conclusion</ListItem>
      </List>

      <SectionTitle>What are Macronutrients?</SectionTitle>
      <Paragraph>
        Macronutrients are the nutrients our bodies require in large amounts to function properly—namely, carbohydrates, proteins, and fats. These are not just caloric currency; they serve distinct roles in keeping us alive, well, and active. Unlike micronutrients, such as vitamins and minerals, which are required in smaller amounts, macronutrients make up the bulk of our diet and are directly responsible for our energy production.
      </Paragraph>
      <Paragraph>
        Let's break it down:
      <ul>
        <li><strong>Carbohydrates</strong> are the body's preferred source of immediate energy. They fuel our muscles, support brain function, and can be easily stored for later use.</li>
        <li><strong>Proteins</strong> are the building blocks of life. Composed of amino acids, proteins are essential for cell regeneration, immune function, and muscle growth.</li>
        <li><strong>Fats</strong> are not the enemy! They are a concentrated energy source and are essential for nutrient absorption, hormone production, and overall cell structure.</li>
      </ul>
      </Paragraph>
      <Paragraph>
        When we talk about optimizing your macronutrient intake, we're essentially talking about optimizing your body's physiological functions. Understanding the role of each macronutrient can help you fine-tune your diet to better align with your personal health goals, whether it's weight loss, muscle gain, or enhanced athletic performance.
      </Paragraph>


      <SectionTitle>The Three Types of Macronutrients</SectionTitle>

      <SubTitle>Proteins</SubTitle>
      <Paragraph>
       As we touched upon earlier, proteins are the building blocks of life. They are involved in almost every cell function. When we consume proteins, our body breaks them down into amino acids, which are the fundamental units used for cell growth and repair. If you're an athlete or someone who's looking to gain muscle, protein is particularly essential. It helps in muscle repair, recovery, and growth. It's not just for bodybuilders—adequate protein is crucial for everyone, as it supports immune function and various other metabolic activities.
      </Paragraph>

      <SubTitle>Carbohydrates</SubTitle>
      <Paragraph>
       While often unfairly demonized, carbohydrates are your body's primary fuel source, especially during exercise. Carbs are broken down into glucose, which is then used by cells for energy. Excess glucose can be stored in the liver and muscles as glycogen, serving as a valuable energy reserve. Carbohydrates aren't just about energy; they also affect mood and cognition. Foods rich in complex carbohydrates, like whole grains and vegetables, provide essential fiber that supports digestive health and helps control blood sugar levels.
      </Paragraph>

      <SubTitle>Fats</SubTitle>
      <Paragraph>
       Let's debunk the myth: not all fats are bad! Fats serve as a dense source of energy, with 9 calories per gram compared to the 4 calories per gram in proteins and carbohydrates. They are essential for absorbing fat-soluble vitamins like A, D, E, and K. Healthy fats, like those found in avocados, nuts, and fatty fish, support brain health, cellular function, and hormone production. Understanding the types of fats—saturated, unsaturated, and trans fats—can help you make smarter choices that align with your health objectives.
      </Paragraph>

      <SectionTitle>Importance of Macronutrients</SectionTitle>

      <SubTitle>Energy Production</SubTitle>
      <Paragraph>
       Macronutrients are the cornerstone of your body's energy supply. Carbohydrates are typically the primary source, quickly converted into glucose for immediate use. Fats provide a more sustained, long-term energy supply and are especially important during endurance activities. Even proteins can be converted into glucose for energy, although this is generally a last resort, as proteins are more effectively used for growth and repair.
      </Paragraph>

      <SubTitle>Muscle Repair and Growth</SubTitle>
      <Paragraph>
       Proteins come into the spotlight here. They are vital for repairing damaged tissues and building new muscle fibers, especially after physical exercise. Consuming adequate protein can help accelerate recovery, reduce muscle soreness, and ensure optimal gains in muscle mass. Remember, muscle tissue is metabolically active and helps in burning calories even at rest.
      </Paragraph>

      <SubTitle>Hormone Production</SubTitle>
      <Paragraph>
       Hormones are the body's signaling molecules, regulating everything from mood to metabolism. Both proteins and fats are crucial for hormone production. For instance, fats are integral in forming the structure of hormones like estrogen and testosterone. Meanwhile, some amino acids derived from protein act as precursors to hormones like adrenaline. Balancing your macronutrients can, therefore, play a significant role in maintaining hormonal health.
      </Paragraph>

      <SubTitle>Brain Function</SubTitle>
      <Paragraph>
       Never underestimate the role of macronutrients in cognitive function. Your brain uses a lot of energy, and it prefers glucose, derived from carbohydrates, as its energy source. Fats, particularly omega-3 fatty acids, are essential for brain health, contributing to improved cognitive performance and possibly even reducing the risk of neurological disorders. Even proteins have a role in neurotransmitter function, influencing mood and alertness.
      </Paragraph>

      <SectionTitle>Macronutrients and Health</SectionTitle>

      <SubTitle>Weight Management</SubTitle>
      <Paragraph>
       Understanding and managing your macronutrient intake can be a game-changer for weight management. Proteins can help you feel full and satisfied, reducing the likelihood of overeating. Carbohydrates, especially complex carbs, also contribute to satiety and can provide sustained energy. Fats, although calorie-dense, can also contribute to feelings of fullness. Balancing these macronutrients can help you create a sustainable calorie deficit or surplus, depending on your weight goals.
      </Paragraph>

      <SubTitle>Risk of Chronic Diseases</SubTitle>
      <Paragraph>
       The types of macronutrients you consume can have a long-term impact on your health, affecting your risk for chronic diseases like diabetes, heart disease, and obesity. Consuming high-quality carbohydrates (think whole grains, fruits, and vegetables) over processed ones can help regulate blood sugar and reduce the risk of type 2 diabetes. Healthy fats, like those found in olive oil and fish, can improve cholesterol levels and lower the risk of heart disease. Adequate protein intake can support lean muscle mass, reducing the risk of metabolic syndrome and related diseases.
      </Paragraph>

      <SubTitle>Mood and Mental Health</SubTitle>
      <Paragraph>
       There is increasing evidence to show that the quality and ratio of macronutrients can significantly influence your mood and overall mental health. Complex carbohydrates are essential for serotonin production, a neurotransmitter that regulates mood, sleep, and appetite. Fats, particularly omega-3 fatty acids, are correlated with lower rates of depression and anxiety. Proteins, rich in amino acids, are precursors to neurotransmitters that regulate mood and cognitive function. 
      </Paragraph>
      <SectionTitle>Macronutrients for Muscle Building</SectionTitle>

      <SubTitle>Protein Intake and Timing</SubTitle>
      <Paragraph>
       Protein is often considered the building block of muscle. Consuming enough protein is essential for muscle repair and growth. The timing of your protein intake can also be crucial. Many athletes and bodybuilders consume protein pre- and post-workout to maximize muscle protein synthesis. Consuming protein-rich meals and snacks evenly spaced throughout the day can also aid in optimal muscle repair and growth.
      </Paragraph>

     <SubTitle>Carbohydrates and Workout Performance</SubTitle>
     <Paragraph>
      Carbohydrates serve as the primary fuel for your muscles during high-intensity workouts. Proper carb intake can not only boost performance but also improve recovery. Consuming complex carbohydrates a few hours before your workout can provide a sustained energy source, allowing you to push harder in your training sessions. Post-workout carbs can also speed up recovery by replenishing glycogen stores in the muscles.
     </Paragraph>

     <SubTitle>Fats for Hormone Production and Recovery</SubTitle>
     <Paragraph>
      Fats are essential for the production of hormones like testosterone, which plays a critical role in muscle growth. Additionally, fats are crucial for absorbing fat-soluble vitamins like A, D, and E, which can aid in muscle recovery. Omega-3 fatty acids, found in fish and flaxseeds, have anti-inflammatory properties that can speed up recovery and reduce muscle soreness.
     </Paragraph>

     <SectionTitle>Tips and Tricks</SectionTitle>

<SubTitle>How to Calculate Macros</SubTitle>
<Paragraph>
  Calculating your macros can be done through a variety of methods, but one of the most commonly used is the "percentage rule." Start by determining your daily caloric needs, which can be estimated using your weight, height, age, and activity level. Once you have your daily caloric intake, allocate a percentage of those calories to each macronutrient group. A common ratio for balanced nutrition might be 40% carbs, 30% protein, and 30% fats.
</Paragraph>

<SubTitle>Tips on Balancing Macros</SubTitle>
<Paragraph>
  Achieving the right balance of macros is crucial for both overall health and specific fitness goals. Here are some tips for balancing your macros:
  - Make sure you're getting a mix of complex carbohydrates, lean proteins, and healthy fats in every meal.
  - Adjust your macros based on your workouts. On heavy training days, you may need more carbs and protein for energy and recovery.
  - Don’t forget about fiber and micronutrients. While focusing on macros, it's essential to include a variety of fruits and vegetables to provide necessary vitamins and minerals.
</Paragraph>

<SubTitle>Signs You May Need to Adjust Your Macros</SubTitle>
<Paragraph>
  Listening to your body is vital. Here are some signs that may indicate you need to adjust your macros:
  - Constant fatigue or lack of energy during workouts
  - Difficulty in gaining muscle or losing fat despite consistent exercise
  - Persistent feelings of hunger or fullness
  - Fluctuations in mood or mental focus
If you notice any of these signs, consider revisiting your macro ratios or consulting a registered dietitian for personalized guidance.
</Paragraph>

<SectionTitle>FAQs</SectionTitle>

<SubTitle>What are macronutrients?</SubTitle>
<Paragraph>
  Macronutrients are the nutrients that provide calories or energy, and are required in larger amounts. The three primary macronutrients are carbohydrates, proteins, and fats. They serve as the body's main sources of energy, help in cellular structure and function, and carry out numerous other roles.
</Paragraph>

<SubTitle>How do I calculate my macronutrient needs?</SubTitle>
<Paragraph>
  Calculating your macronutrient needs usually involves determining your daily caloric requirements first. This can be based on factors such as age, weight, height, and activity level. Once you have that information, you can allocate specific percentages of your calories to proteins, fats, and carbohydrates.
</Paragraph>

<SubTitle>Do I need to track my macros every day?</SubTitle>
<Paragraph>
  Daily tracking is not necessary for everyone but can be helpful for those with specific health or fitness goals. Consistency is key, so even if you’re not tracking daily, having a general awareness of your macronutrient intake can be beneficial.
</Paragraph>

<SubTitle>Is it possible to eat too much of a certain macronutrient?</SubTitle>
<Paragraph>
  Yes, an imbalance in macronutrient intake can potentially lead to various health issues. Consuming too many carbohydrates can contribute to weight gain and blood sugar issues, while excessive protein can put strain on the kidneys. Excessive fats, especially saturated fats, can raise cholesterol levels.
</Paragraph>

<SubTitle>How do macros affect muscle growth?</SubTitle>
<Paragraph>
  Macronutrients play a significant role in muscle growth and recovery. Proteins are the building blocks of muscle, carbs provide the energy required for your workouts, and fats support hormone production that is crucial for muscle growth.
</Paragraph>

<SectionTitle>Conclusion</SectionTitle>
<Paragraph>
  Understanding macronutrients is more than just a dietary concern—it's a pathway to optimizing your overall well-being, from physical health to mental resilience. Whether you're looking to manage your weight, build muscle, or simply maintain a balanced lifestyle, a sound knowledge of macronutrients can go a long way in achieving your goals. Remember, nutrition isn't a one-size-fits-all affair. It requires a nuanced approach, self-awareness, and continual adjustments to suit your individual needs.
</Paragraph>
<Paragraph>
  In this guide, we've covered everything from what macronutrients are, their types, their importance, and their impact on health and muscle-building. With this foundational understanding, you're now better equipped to make conscious food choices that align with your goals.
</Paragraph>
<Paragraph>
  Your journey towards a healthier, fitter you starts with the choices you make today. Make them count!
</Paragraph>

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
