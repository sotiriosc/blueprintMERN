import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 20px auto; /* Auto margin for horizontal centering */
  font-family: Arial, sans-serif;
  width: 80%; /* Takes up 80% of the page */
  text-align: center; /* Centers text */
`;

const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-top: 20px;
  text-align: left; /* Align the titles to the left */
`;

const Paragraph = styled.p`
  font-size: 1em;
  margin-bottom: 20px;
  text-align: left; /* Align the text to the left */
`;


export default function CreatingDietPlan() {
  return (
    <PageContainer>
      <SectionTitle>The Balanced Blueprint for Creating a Diet Plan</SectionTitle>

      <Paragraph>
        Creating a successful and healthy diet plan is not about finding shortcuts; it's about creating a balanced and sustainable approach to nutrition that will improve your life in the long run. Here are comprehensive steps to guide you through this journey.
      </Paragraph>

      <SectionTitle>Step 1: Self-Assessment</SectionTitle>
      <Paragraph>
        Before even stepping into a grocery store, it's important to take stock of where you are right now. This could involve consulting with a healthcare provider for a full physical examination, discussing your health goals, and perhaps undergoing some nutritional blood tests. These tests can help you understand any deficiencies or health issues you may need to address.
      </Paragraph>

      <SectionTitle>Step 2: Define Your Goals</SectionTitle>
      <Paragraph>
        What do you aim to achieve with your diet plan? Whether it's weight loss, muscle gain, improved stamina, or simply maintaining your current health status, having clear goals will help you tailor your diet accordingly.
      </Paragraph>

      <SectionTitle>Step 3: Nutritional Education</SectionTitle>
      <Paragraph>
        Understanding the basics of nutrition is critical. Know what macronutrients (proteins, fats, carbohydrates) and micronutrients (vitamins, minerals) are and what roles they play in your body. This will empower you to make informed choices.
      </Paragraph>

      <SectionTitle>Step 5: Rediscover Forgotten Healthy Foods</SectionTitle>
      <Paragraph>
       As you explore, you may come across foods you haven't thought about in years. Root vegetables like turnips, high-fiber grains like quinoa, or even simple items like spinach can be powerful allies in your quest for better health.
      </Paragraph>

      <SectionTitle>Step 6: Crafting Your Diet Plan</SectionTitle>
     
      <Paragraph>
      Now that you're armed with information and options, it's time to build your diet plan. Design meals that provide a balanced intake of proteins, healthy fats, and fibers. Create a weekly menu, if that helps, and consider portion sizes based on your personal caloric needs, which can be estimated using various online calculators or with the help of a healthcare provider.
      </Paragraph>
     
      <SectionTitle>Step 7: Food Preparation and Storage</SectionTitle>
    
      <Paragraph>
      Once the shopping is done, consider spending a few hours on meal preparation. Cook in batches, portion out snacks, and make sure everything is stored in a way that keeps it fresh and easy to access. This not only saves you time during the week but also helps you stick to your plan.
      </Paragraph>
     
      <SectionTitle>Step 8: Execution and Consistency</SectionTitle>
      
      <Paragraph>
      Consistency is the key to any successful diet plan. Stick to your meal times, and make sure you have planned for contingencies, such as eating out or unexpected cravings.
      </Paragraph>
      
      <SectionTitle>Step 9: Track and Tweak</SectionTitle>
     
      <Paragraph>
      Monitoring your progress is crucial. Utilize a food diary or an app to track what you eat and how it makes you feel. Take note of your energy levels, your sleep quality, and any fluctuations in weight or measurements. This information can help you tweak your plan for ongoing improvement.
      </Paragraph>
      
      <SectionTitle>Step 10: Regular Check-Ins</SectionTitle>
      
      <Paragraph>
      Schedule regular check-ins with yourself, and possibly with a healthcare provider, to assess how well your plan is working. Be prepared to make adjustments as you go along, whether that's to caloric intake, the balance of nutrients, or the types of foods you're eating.
      </Paragraph>

    <Paragraph>
    By following these comprehensive steps, you're not just dieting—you're adopting a more mindful, balanced, and sustainable approach to nutrition. The goal is not just to live but to thrive, achieving the best state of health you can enjoy for the rest of your life.
    </Paragraph>
    </PageContainer>
  );
};


