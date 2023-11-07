import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 20px auto; /* Auto margin for horizontal centering */
  font-family: courier, sans-serif;
  width: 80%; /* Takes up 80% of the page */
  text-align: center; /* Centers text */
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  margin-top: 20px;
  text-align: center; /* Centers text *
`;

const Paragraph = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
  text-align: left; /* Align the text to the left */
`;

const SubTitle = styled.h3`
  font-size: 2em;
  margin-top: 20px;
  text-align: center; /* Centers text */
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

export default function CreatingDietPlan() {

  const pageUrl = encodeURIComponent(window.location.href);
  const shareMessage = encodeURIComponent("Check out this info on creating a diet plan!");

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

      
      <SectionTitle>Step 5: Rediscover Forgotten Healthy Foods and Create a Tailored Diet Plan</SectionTitle>
<Paragraph>
  Adopting a healthier lifestyle involves more than just eliminating unhealthy choices; it's about incorporating foods that actively support your wellbeing. Whether you discover nutrient-dense foods like root vegetables or high-fiber grains, such as quinoa, it's an opportunity to revitalize your diet and come closer to your health goals.
</Paragraph>

<SubTitle>A Comprehensive Example: What I Eat</SubTitle>
<Paragraph>
  To give you an idea of a balanced diet that focuses on nutrient-dense foods, let's walk through my typical day:
</Paragraph>

<Paragraph>
  <strong>Morning:</strong> I begin the day with eggs, oatmeal, and fresh seasonal fruits. Eggs are a superb source of protein, while oatmeal provides the necessary fiber for a great start to the day. The fresh fruits add natural sugars and more fiber, making for a complete morning meal. I often accompany this with freshly squeezed store-bought juice for an extra vitamin kick. I also include nuts like almonds, walnuts, and sunflower seeds, excellent for hormonal balance and long-lasting energy. If that wasn't nutritious enough, I use protein milk in my oatmeal for added protein content.
</Paragraph>

<Paragraph>
  <strong>Additional Morning Boost:</strong> To further enrich my meal, I incorporate a tablespoon each of ground flax seeds, black chia seeds, and hemp seeds. These seeds are not only high in omega fatty acids, beneficial for brain and skin health, but also rich in fiber which aids digestion and supports heart and insulin health.
</Paragraph>

<Paragraph>
  <strong>Afternoon/Post-Exercise/Work:</strong> After a good day at work or workout, protein is essential for muscle recovery. That's where lean meats like chicken, fish, or beef come into the picture, serving as high-quality protein sources to rebuild those worked muscles. Alongside the lean meat, I typically combine quinoa, beans, and chickpeas for an incredibly nutritious trio. Now, you might be thinking about insulin levels—don't worry. Although this meal has a low glycemic index and won't cause an insulin spike, it's still very much anabolic. It maintains a sustained insulin level that's beneficial not only for muscle building but also for pancreatic health. Yes, we're all about holistic well-being here!
</Paragraph>



<Paragraph>
  <strong>Evening:</strong> In the evening, I aim for a balance of indulgence and health. A favorite is a ham and Swiss sandwich, offering a blend of protein and fats, along with some comfort. Remember, it's not about denying yourself pleasures, but about making educated choices that align with your health goals.
</Paragraph>

<Paragraph>
  Being well-informed about the foods you eat and how they contribute to your objectives is crucial. With knowledge comes the power to create a diet that not only satisfies your palate but also propels you toward endless health benefits.
</Paragraph>


<Paragraph>
  <strong>Step 6: Crafting Your Diet Plan </strong>
   Now that you're armed with information and options, it's time to build your diet plan. Design meals that provide a balanced intake of proteins, healthy fats, and fibers. Create a weekly menu, if that helps, and consider portion sizes based on your personal caloric needs. To estimate your caloric needs, you can use various online calculators such as <a href="https://www.myfitnesspal.com/" target="_blank" rel="noopener noreferrer">MyFitnessPal</a>, <a href="https://cronometer.com/" target="_blank" rel="noopener noreferrer">Cronometer</a>, or consult with a healthcare provider. 
</Paragraph>


     
<SectionTitle>Step 7: Food Preparation and Storage</SectionTitle>

<Paragraph>
  Preparing your meals in advance is about more than just convenience; it's a proactive strategy for success. Spending a few hours after shopping to cook in batches and portion out snacks ensures that everything is stored in a way that keeps it fresh and easy to access. This not only saves you time during the week but also eliminates the all-too-common excuse of being 'too tired to cook.' You're more likely to stick to your diet plan when nutritious meals are ready-to-go. Plus, knowing that your food is already prepared puts psychological pressure against wasting it, aligning with a responsible and sustainable lifestyle.
</Paragraph>

     
<SectionTitle>Step 8: Execution and Consistency</SectionTitle>

<Paragraph>
  The success of any diet plan hinges on consistency and rhythm. Stick to your meal times and make a contingency plan for scenarios like eating out or unexpected cravings. By adhering to a consistent schedule, you align with the natural rhythms of life, which inherently rewards good habits. It's important to remember that reaping the benefits of a healthy diet isn't about making a monumental change overnight, but rather about doing the right things consistently over time. Conversely, negative outcomes are also the result of consistent actions, whether it's neglecting your diet or ignoring signs from your body. By embracing consistency, you set the stage for ongoing success and well-being.
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
<ShareButton onClick={() => window.open(`sms:?&body=${encodeURIComponent(shareMessage)}%20${encodeURIComponent(pageUrl)}`, '_blank')}>
    Share via SMS
  </ShareButton>

        {/* Add more buttons for other social networks */}
      </SocialShareContainer>
    </PageContainer>
  );
};