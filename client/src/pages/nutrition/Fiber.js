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
  font-size: 20px;
  
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

export default function Fiber() {

  const pageUrl = encodeURIComponent(window.location.href);
  const shareMessage = encodeURIComponent("Get your fill on fiber!");

  return (
    <PageContainer>
      <SectionTitle>The Comprehensive Guide to Dietary Fiber</SectionTitle>
      
      <Paragraph>
        Dietary fiber is a crucial component of a healthy diet, known for its significant benefits to digestion, weight management, and overall health. This guide will take you through everything you need to know about fiber, its types, and how to incorporate it effectively into your daily nutrition.
      </Paragraph>

      <SubTitle>Table of Contents</SubTitle>
      <List>
        <ListItem>1. Introduction</ListItem>
        <ListItem>2. Types of Fiber
          <List>
            <ListItem>Soluble Fiber</ListItem>
            <ListItem>Insoluble Fiber</ListItem>
          </List>
        </ListItem>
        <ListItem>3. Benefits of Fiber
          <List>
            <ListItem>Digestive Health</ListItem>
            <ListItem>Weight Management</ListItem>
            <ListItem>Cardiovascular Health</ListItem>
          </List>
        </ListItem>
        <ListItem>4. How to Incorporate Fiber in Your Diet
          <List>
            <ListItem>Recommended Intake</ListItem>
            <ListItem>Foods Rich in Fiber</ListItem>
            <ListItem>Fiber Supplements</ListItem>
          </List>
        </ListItem>
        <ListItem>5. Myths and Misconceptions about Fiber</ListItem>
        <ListItem>6. Frequently Asked Questions
         
        </ListItem>
        <ListItem>7. Conclusion</ListItem>
      </List>

      <SectionTitle>Types of Fiber</SectionTitle>

<SubTitle>Soluble Fiber</SubTitle>
<Paragraph>
  Imagine soluble fiber as your digestive system's best friend. When soluble fiber enters your gut, it dissolves in water and transforms into a gel-like substance. This gel slows digestion and the rate at which your body absorbs sugar, helping to keep blood glucose levels stable. Foods rich in soluble fiber include oats, legumes, nuts, seeds, and fruits like apples and blueberries. By incorporating these into your diet, you're not only supporting your gut health but also joining a heart-healthy regime that could lower cholesterol and reduce your risk of heart disease. Let's make a toast with a bowl of oatmeal to a happier heart and a balanced life!
</Paragraph>

<SubTitle>Insoluble Fiber</SubTitle>
<Paragraph>
  Now, meet insoluble fiber, the natural regulator. This type of fiber does not dissolve in water. Instead, it adds bulk to your stool and helps food pass more quickly through the stomach and intestines. This process is like a gentle internal workout for your digestive tract, keeping everything moving and reducing the likelihood of constipation. High-fiber vegetables, whole grains, and wheat bran are packed with insoluble fiber. Imagine each crunchy bite as a step towards optimal digestive wellness, paving the way for a vibrant, more energetic you. Embrace the crunch, embrace the health!
</Paragraph>

<Paragraph>
  It's not just about adding fiber to your diet; it's about creating a symphony of nutritional harmony. The interplay between soluble and insoluble fiber can have profound effects on your health, reducing your risk of chronic diseases and enhancing your quality of life. Let's make mindful choices to fuel our bodies with the variety it deserves. Remember, every fiber-rich meal is a leap towards a healthier, more robust version of you. Ready to make the switch? Your body will thank you for it!
</Paragraph>

<SectionTitle>Benefits of Fiber</SectionTitle>

<SubTitle>Digestive Health</SubTitle>
<Paragraph>
  The journey of fiber through your digestive system is akin to a cleansing river, flowing through and keeping everything in a natural balance. A high-fiber diet helps maintain bowel integrity and health, acting like a broom that sweeps away waste and toxins. It also reduces the risk of developing diverticular disease, hemorrhoids, and even certain types of cancer. With each fiber-filled meal, envision giving your digestive tract the tender care it needs to function smoothly, like a well-oiled machine.
</Paragraph>

<SubTitle>Weight Management</SubTitle>
<Paragraph>
  Fiber is the unsung hero in the world of weight management. It contributes to a feeling of fullness without adding many calories. Soluble fiber, in particular, can help control appetite by forming a gel that slows the emptying of the stomach. It’s a tool for sustainable weight management, helping you listen to your body’s true hunger signals. It’s not a quick fix; it’s a lifestyle change that supports a healthier relationship with food and with your body.
</Paragraph>

<SubTitle>Cardiovascular Health</SubTitle>
<Paragraph>
  Like a steadfast guardian, fiber helps protect your heart. Research suggests that a high intake of dietary fiber can lower your risk of heart disease. Soluble fiber, especially, can help manage cholesterol levels by binding to cholesterol particles and carrying them out of the body. Think of it as your personal cardiovascular custodian, ensuring your blood flows freely and your heart beats to the rhythm of life.
</Paragraph>

<Paragraph>
  Fiber's benefits transcend the physical—it impacts every aspect of well-being. By prioritizing fiber, you’re not just eating food; you’re making a profound decision to enhance your life quality. It's a commitment to nourishing not just your body, but also your longevity and zest for life. As you sit down for your next meal, remember: every fiber-rich forkful is a gift to your future self.
</Paragraph>


<SectionTitle>How to Incorporate Fiber in Your Diet</SectionTitle>

<SubTitle>Recommended Intake</SubTitle>
<Paragraph>
  The question isn't just 'Why fiber?' but 'How much?' The answer varies, but for adults, the American Heart Association suggests a daily fiber intake of 25 grams for women and 34 grams for men. Yet, the average person consumes only about half of that. To bridge this gap, start by introducing fiber-rich foods gradually into your meals, allowing your body to adjust. It's not about overhauling your diet overnight; it's about weaving fiber into your life's tapestry, one strand at a time.
</Paragraph>

<SubTitle>Foods Rich in Fiber</SubTitle>
<Paragraph>
  The bounty of fiber-rich foods is vast and varied. Begin your day with whole grains like oatmeal or bran cereal. Embrace the crunch of nuts and seeds as snacks, and enrich your meals with legumes, lentils, and a rainbow of fruits and vegetables. Here's a tip: Opt for whole fruits over juices, and choose raw or steamed veggies over processed snacks. Each choice is a step towards fiber fulfillment.
</Paragraph>

<SubTitle>Fiber Supplements</SubTitle>
<Paragraph>
  While whole foods are the best source of fiber, there are times when you might need a boost. Fiber supplements can be helpful, especially if you're struggling to meet your fiber goals through diet alone. However, remember that supplements should complement, not replace, the variety of fibers found in natural foods. If you're considering a supplement, consult with a healthcare provider to find the option that harmonizes with your health needs.
</Paragraph>

<Paragraph>
  Enriching your diet with fiber doesn't have to be a chore. It's a joyful exploration of textures and tastes. It's the satiating crunch of an apple, the comforting warmth of a bean stew, or the refreshing zing of a berry smoothie. It's about celebrating food that loves you back, filling you not just with nutrients, but with vitality. Ready to spin the wheel of fibers? Your adventure in wholesome eating awaits!
</Paragraph>

<SectionTitle>Myths and Misconceptions about Fiber</SectionTitle>

<Paragraph>
  Fiber's benefits are well-known, yet there are several myths that muddy the waters of understanding. Let’s debunk these myths and shine a light on the truth to empower your dietary choices.
</Paragraph>

<SubTitle>Myth: Fiber is just for digestion.</SubTitle>
<Paragraph>
  While fiber is indeed a champion for digestive health, its benefits are multifaceted. Fiber plays a crucial role in maintaining healthy blood sugar levels, supporting heart health, and even aiding in weight management. It’s not just about keeping you regular—it’s about nurturing a foundation for overall health.
</Paragraph>

<SubTitle>Myth: All fiber is the same.</SubTitle>
<Paragraph>
  Not all fibers are created equal. There's soluble fiber, which dissolves in water, and insoluble fiber, which does not. Each serves different purposes in the body and can be found in varying types of foods. Understanding this distinction is crucial for tailoring your fiber intake to meet your body’s needs.
</Paragraph>

<SubTitle>Myth: You can get enough fiber from supplements alone.</SubTitle>
<Paragraph>
  Supplements can complement your fiber intake but they can't fully replace the diverse types of fiber and the nutritional complexity found in whole foods. Nature packages fiber with a host of other beneficial compounds like vitamins, minerals, and antioxidants, making whole foods the superior source.
</Paragraph>

<SubTitle>Myth: Too much fiber is harmless.</SubTitle>
<Paragraph>
  Although fiber is a dietary powerhouse, like anything, it's best in the right amounts. Excessive intake of fiber can lead to discomfort, bloating, or more serious issues like nutrient malabsorption or intestinal blockage. Listen to your body and increase your fiber intake gradually to find the balance that works best for you.
</Paragraph>

<Paragraph>
  Dispelling these myths opens the door to embracing fiber with clarity and confidence. With this newfound knowledge, you’re better equipped to weave fiber into your life in a way that enhances your health without falling prey to common misunderstandings. Remember, the path to well-being is paved with both knowledge and the wisdom to see beyond the myths.
</Paragraph>

<SectionTitle>Frequently Asked Questions</SectionTitle>

<SubTitle>Is too much fiber bad for you?</SubTitle>
<Paragraph>
  Moderation is key in all aspects of nutrition, fiber included. While a fiber-rich diet is beneficial, an excess can lead to discomfort, such as bloating, gas, and even constipation or diarrhea. The key is to increase fiber intake gradually and ensure you're also drinking plenty of water.
</Paragraph>

<SubTitle>Can I rely on fiber supplements?</SubTitle>
<Paragraph>
  Fiber supplements can be useful, especially if dietary restrictions prevent you from consuming enough whole foods. However, they shouldn't be the primary source of fiber, as whole foods provide a complex matrix of nutrients and other health benefits.
</Paragraph>

<SubTitle>How does fiber affect digestion?</SubTitle>
<Paragraph>
  Fiber aids in normalizing bowel movements by increasing the weight and size of your stool and softening it. Insoluble fiber specifically helps food pass more quickly through the stomach and intestines, while soluble fiber can help prevent stools from being too watery.
</Paragraph>

<SubTitle>Can fiber help me lose weight?</SubTitle>
<Paragraph>
  Yes, high-fiber foods tend to be more filling than low-fiber foods, so you're likely to eat less and stay satisfied longer. Also, high-fiber foods tend to take longer to eat and are less "energy-dense," which means they have fewer calories for the same volume of food.
</Paragraph>

<SubTitle>Do kids need fiber too?</SubTitle>
<Paragraph>
  Absolutely. Fiber is important for children for the same reasons it's important for adults. It can help prevent constipation, which is common in children, and plays a role in maintaining a healthy weight. It's important to encourage kids to eat fruits, vegetables, and whole grains.
</Paragraph>

<SubTitle>Does fiber have any role in preventing disease?</SubTitle>
<Paragraph>
  Indeed, diets high in dietary fiber have been shown to reduce the risk of heart disease, type 2 diabetes, and colorectal cancer. The various components of fiber work together to promote a healthy metabolism and immune system.
</Paragraph>

<SubTitle>What are the signs I'm not getting enough fiber?</SubTitle>
<Paragraph>
  Common signs include constipation, weight gain, blood sugar fluctuations, and feeling hungry soon after eating. A consistent lack of fiber may lead to more significant digestive problems over time.
</Paragraph>

<SubTitle>Can increasing fiber intake improve skin health?</SubTitle>
<Paragraph>
  While fiber's impact on skin health isn't direct, its role in digestion can indirectly affect skin health. A well-functioning digestive system aids in the elimination of toxins, which can contribute to clearer skin.
</Paragraph>

<SubTitle>How can I add more fiber to my diet without feeling bloated?</SubTitle>
<Paragraph>
  Start slowly, and gradually increase your intake to allow your digestive system to adapt. Also, ensure you're drinking plenty of water, as fiber works best when it absorbs water.
</Paragraph>

<SubTitle>Are there any times I should avoid high-fiber foods?</SubTitle>
<Paragraph>
  If you have certain medical conditions, such as a flare of inflammatory bowel disease or after certain surgeries, you may be advised to follow a low-fiber diet. Always consult with a healthcare provider for personalized advice.
</Paragraph>

<SectionTitle>Conclusion</SectionTitle>

<Paragraph>
  Embracing fiber is not just a dietary choice—it's a step towards a healthier life. With its numerous benefits for digestion, weight management, and cardiovascular health, fiber is a true powerhouse of nutrition. We've journeyed through the various types of fiber, their sources, and how to integrate them into our daily routines. We've dispelled myths, answered pressing questions, and provided actionable advice to help you leverage fiber's full potential.
</Paragraph>

<Paragraph>
  Remember, incorporating fiber into your diet is a journey, not a race. It’s about making consistent, mindful choices that contribute to your overall well-being. With every fiber-rich forkful, you're investing in a future of health and vitality. So here’s to making choices that count, to the power of fiber, and to the incredible journey of health that lies ahead. Thank you for joining us on this path to wellness. Let’s continue to make choices that nourish not just our bodies, but also our souls. 💖
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
