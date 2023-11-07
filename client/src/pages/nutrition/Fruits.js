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

export default function Fruits() {

  const pageUrl = encodeURIComponent(window.location.href);
  const shareMessage = encodeURIComponent("Learn about the health benefits of fruits and vegetables!");

  return (
    <PageContainer>
      {/* Header */}
      <SectionTitle>The Nutritional Symphony of Fruits</SectionTitle>
      <SubTitle>Unlock the Power of Fruits in Your Diet</SubTitle>
      
      {/* Introduction */}
      <Paragraph>
        {/* To be filled */}
      </Paragraph>

      {/* Table of Contents */}
      <SectionTitle>Table of Contents</SectionTitle>
      <List>
        <ListItem>What Makes Fruits Special</ListItem>
        <ListItem>The Seasonal Advantage of Fruits</ListItem>
        <ListItem>Seasonal and Regional Varieties</ListItem>
        <ListItem>Picking the Right Fruits</ListItem>
        <ListItem>Money-saving Tips: Maximize Value and Minimize Waste</ListItem>
        <ListItem>Conclusion</ListItem>
        <ListItem>FAQs</ListItem>
      </List>

        {/* What Makes Fruits Special */}
        <SectionTitle>What Makes Fruits Special</SectionTitle>
        <Paragraph>
             Fruits are nature's candy, but they offer so much more than just sweetness. While being delicious, they are packed with a wide array of nutrients essential for our health. The fiber in fruits aids digestion, the natural sugars provide quick energy, and the vitamins and minerals contribute to overall well-being. 
             <br/><br/>
            But what truly sets fruits apart is their bioavailability—the ease with which our bodies can absorb the nutrients they contain. Unlike synthetic supplements, which may not get fully absorbed, the micronutrients in fruits come in a form that is readily accepted by our body.
            <br/><br/>
            Another unique feature is their phytonutrients, the plant chemicals that serve multiple functions, including antioxidant, anti-inflammatory, and even mood-enhancing properties. These phytonutrients are naturally designed to work in harmony with the vitamins, minerals, and other nutrients in the fruit, creating a nutritional symphony that no pill can replicate.
            <br/><br/>
             In essence, consuming a variety of fruits is like having a backstage pass to the full spectrum of nature's health benefits. It's a culinary and nutritional experience that is not just beneficial but also enjoyable. 
        </Paragraph>

    
        <SectionTitle>The Seasonal Advantage of Fruits</SectionTitle>

        <Paragraph>
            Seasonality is not just a buzzword; it's a guide to eating fruits at their best. When you consume fruits that are in season, you're not only getting them at their peak flavor but also at their nutritional zenith. It's as if nature has its own calendar, reminding us when it's time to enjoy the bounty it has to offer.
             <br/><br/>
             Fruits harvested in their proper season have the advantage of ripening naturally, often in their native or optimal growing regions. This ensures that they contain the maximum amount of nutrients. For example, oranges from California are best during their peak season from December to April. Not only are they juicier, but they are also packed with Vitamin C.
             <br/><br/>
             Timing your fruit consumption around the seasons can also save you money. Out-of-season fruits are usually imported and can be more expensive due to shipping and storage costs. Knowing when fruits like peaches, cherries, or oranges are in season in your locale ensures that you get the freshest produce without breaking the bank.
             <br/><br/>
             When you align your diet with the natural cycles of the Earth, it's as if Mother Nature herself becomes your personal nutritionist. Seasonal fruits aren't just delicious—they seem to offer exactly what our bodies need at just the right time. Consider how citrus fruits, rich in immune-boosting Vitamin C, are at their peak during the winter months when many are battling colds and flu. Come summer, we have a bounty of stone fruits like peaches and apricots, which are not only hydrating but also packed with nutrients that protect our skin from the sun's harsh rays. Trusting in nature's timing not only enhances your health but makes for a more joyful, flavorful life.
        </Paragraph>

      
        <SectionTitle>Seasonal and Regional Varieties</SectionTitle>

        <Paragraph>
          In places with four distinct seasons like Toronto—or similarly, New York—the rotation of available fruits keeps your diet interesting and maximizes the nutrients you receive. Spring welcomes a wave of fresh berries; strawberries usually lead the charge, offering a refreshing break from winter's heavier fare. By summer, local farmers' markets burst with an array of colorful fruits like peaches, cherries, and blueberries. Autumn introduces us to apples and pears, perfect for pies or a quick, nutritious snack. And while local options might be scant in winter, that's when imported citrus fruits come to the rescue, packed with vitamin C to help keep your immune system strong.
          <br/><br/>
          It's important to note that each region, influenced by its unique climate and soil conditions, offers a unique set of varieties. An apple in Toronto may taste slightly different than its counterpart in New York due to the nuances of the local environment. Embracing these regional differences is not just a culinary adventure but a journey in appreciating the bounty nature provides.
          <br/><br/>
          When you eat seasonally and regionally, you're not just getting the freshest produce; you're also supporting local farmers and businesses. This helps create a more sustainable food system and ensures that future generations will be able to enjoy the same variety of fruits that we do today.
          <br/><br/>
          But the real beauty of seasonal eating is that the fruits available at any given time seem perfectly suited to meet the specific needs of our bodies during that season. It's a wonderful harmony that illustrates how interconnected we are with the world around us.
        </Paragraph>

        <SectionTitle>Picking the Right Fruits</SectionTitle>

        <Paragraph>
            When it comes to fruits, not all are created equal—especially when you consider factors like ripeness, sourcing, and variety. Knowing how to pick the right fruit can significantly enhance your eating experience, offering you the best in flavor, texture, and nutritional content.
        </Paragraph>
        <Paragraph>
          First, it’s crucial to understand the signs of ripeness for different fruits. For example, a ripe banana will have small brown spots, whereas a ripe watermelon will feel heavy for its size and sound hollow when tapped. Familiarize yourself with these cues, and you'll optimize the nutrients and flavors you get from your fruits.
        </Paragraph>
        <Paragraph>
            Second, pay attention to sourcing. Locally-sourced fruits are usually fresher and offer a more accurate representation of the season’s offerings. Local produce is also more likely to retain its nutrient content as it has not undergone long transportation or extended storage. 
        </Paragraph>
        <Paragraph>
         Lastly, don't shy away from the unfamiliar. With such an array of fruits available, it can be rewarding to explore outside your comfort zone. Try exotic fruits that you haven't encountered before; you might just stumble upon a new favorite that also packs a nutritional punch!
        </Paragraph>
        <Paragraph>
            Whether you're shopping at a big grocery store, a local farmers' market, or even picking fruits from a tree, having the skills to select the right fruits is more than just practical—it elevates your entire culinary journey. And as you refine these skills, you'll find it easier to make fruits a regular, satisfying part of your diet.
        </Paragraph>

        <SectionTitle>Money-saving Tips: Maximize Value and Minimize Waste</SectionTitle>

        <Paragraph>
         Eating healthy doesn't have to break the bank, especially when it comes to enjoying fruits. There are several strategies to make the most of your budget while minimizing food waste, ensuring you get the most bang for your buck and the most nutrients for your body.
        </Paragraph>
        <Paragraph>
            Start by buying fruits that are in season. Seasonal fruits are not only more flavorful and nutrient-rich, but they are often less expensive because they are abundant. Plus, they haven't incurred the transportation costs associated with imported goods.
        </Paragraph>
        <Paragraph>
         Consider buying in bulk for fruits that you consume regularly and that have a longer shelf life, such as apples or oranges. This approach can significantly reduce the unit price, saving you money in the long run.
        </Paragraph>
        <Paragraph>
         Get creative with overripe or bruised fruits instead of throwing them away. Smoothies, jams, and desserts are excellent ways to utilize fruits that are past their prime but are still good to eat. 
        </Paragraph>
        <Paragraph>
         Don't disregard frozen fruits. While fresh is often best for taste and texture, frozen fruits are usually picked at peak ripeness and then frozen, retaining most of their nutrients. They are a cost-effective option for off-season cravings.
        </Paragraph>
        <Paragraph>
         Finally, proper storage is key. Learn the optimal storage conditions for different fruits to extend their shelf life. For example, berries last longer in the fridge, while bananas should be kept at room temperature until they ripen.
        </Paragraph>
        <Paragraph>
           By making these small adjustments in how you buy, store, and use fruits, you're not just saving money—you're also contributing to a more sustainable and waste-free lifestyle. 
        </Paragraph>

        <SectionTitle>Conclusion</SectionTitle>
        <Paragraph>
         In the grand tapestry of nutrition, fruits hold a special place. They offer a bounty of vitamins, minerals, and other nutrients in the most natural form, making them an irreplaceable component of a balanced diet. Their vibrant colors, diverse textures, and tantalizing flavors make eating healthy an enjoyable experience rather than a chore.
        </Paragraph>
        <Paragraph>
         This guide aimed to shed light on the many facets of fruits: their unique properties, seasonal and regional varieties, and even how to pick them right and save money while doing so. Remember that each season brings a new assortment of fruits, finely tuned by Mother Nature to meet your body’s nutritional needs. Citrus fruits with vitamin C to fight winter illness, stone fruits packed with antioxidants for summer skin protection—nature knows what it's doing.
        </Paragraph>
        <Paragraph>
        As you move forward in your journey toward a healthier lifestyle, consider fruits as your allies. Not only do they offer a wealth of nutritional benefits, but they also bring joy and zest to your daily meals. So go ahead, explore the fruit aisle with newfound knowledge and appreciation, and make fruits a staple in your diet. Your body, your taste buds, and even your wallet will thank you.
        </Paragraph>

        <SectionTitle>FAQ - Frequently Asked Questions</SectionTitle>

        <List>
         <ListItem><strong>What are the most nutritious fruits?</strong></ListItem>
         <Paragraph>Blueberries, strawberries, and oranges are often cited as some of the most nutritious fruits due to their high levels of vitamins, minerals, and antioxidants.</Paragraph>

         <ListItem><strong>Is it better to eat seasonal fruits?</strong></ListItem>
         <Paragraph>Eating seasonal fruits ensures that you get the freshest produce, which often translates to better taste and higher nutrient content.</Paragraph>

         <ListItem><strong>Are frozen fruits as good as fresh ones?</strong></ListItem>
         <Paragraph>Frozen fruits retain most of their nutrients and can be a great alternative when fresh produce is not available.</Paragraph>

         <ListItem><strong>How can I reduce waste when buying fruits?</strong></ListItem>
         <Paragraph>Buying fruits in season and in appropriate quantities can help reduce waste. Also, consider using all parts of the fruit, including the skin and seeds, when possible.</Paragraph>

         <ListItem><strong>Can I eat fruit if I’m trying to lose weight?</strong></ListItem>
         <Paragraph>Fruits are generally low in calories and high in nutrients, making them a good choice for weight loss when eaten in moderation.</Paragraph>

         <ListItem><strong>Do fruits lose nutrients when cooked?</strong></ListItem>
         <Paragraph>Some vitamins, like vitamin C, may degrade with heat, but cooking can also make some nutrients easier to absorb.</Paragraph>
 
         <ListItem><strong>Which fruits are best for skin health?</strong></ListItem>
         <Paragraph>Fruits rich in antioxidants, like berries and citrus fruits, can be beneficial for skin health.</Paragraph>

         <ListItem><strong>Can diabetics eat fruits?</strong></ListItem>
         <Paragraph>Yes, but it’s best to stick with fruits that have a low glycemic index, like berries, apple, and pear.</Paragraph>

         <ListItem><strong>What's the deal with organic fruits?</strong></ListItem>
         <Paragraph>Organic fruits are grown without synthetic pesticides or fertilizers. However, they are not necessarily more nutritious than conventional fruits.</Paragraph>

         <ListItem><strong>How do I know if a fruit is ripe?</strong></ListItem>
      <Paragraph>Signs of ripeness can vary between fruits but often involve a sweet aroma, vibrant color, and a slight give when gently pressed.</Paragraph>
</List>

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
      </SocialShareContainer>



    </PageContainer>
  );
}
