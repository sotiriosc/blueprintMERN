import React, { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { SEND_CHAT_GPT_QUERY, DELETE_USER_RESPONSE  } from '../../utils/mutations';
import { FETCH_USER_RESPONSES} from '../../utils/queries';
import { Search } from 'semantic-ui-react';


function ChatGptPage() {
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState([]);
  const { data, loading: loadingResponses, refetch } = useQuery(FETCH_USER_RESPONSES);
  const [deleteResponse] = useMutation(DELETE_USER_RESPONSE, {
    onCompleted: () => refetch(),
  });
  const [sendQuery, { loading, error }] = useMutation(SEND_CHAT_GPT_QUERY);

  useEffect(() => {
    if (data && data.userResponses) {
      // console.log("User Responses:", data.userResponses); // For debugging
      setResponses(data.userResponses);
    }
  }, [data]);
  

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleDismiss = async (responseId) => {
    // console.log('Dismissing response with ID:', responseId); // For debugging
    await deleteResponse({ variables: { responseId } });
  };
  
  const promptRef = useRef(null);

  const loadingGifUrl = "https://media.tenor.com/c1Q1VD-Aq18AAAAC/muppetwiki-muppet-wiki.gif";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await sendQuery({
        variables: { prompt },
        update: (cache, { data: { sendChatGptQuery } }) => {
          // Update Apollo cache if needed
          // Example: cache.modify()...
        }
      });
  
      if (data) {
        const newResponse = {
          id: data.sendChatGptQuery.id,
          query: prompt,
          response: data.sendChatGptQuery.reply
        };
        setResponses(prevResponses => [...prevResponses, newResponse]);
        setPrompt('');
        promptRef.current.focus();
      }
  
      // Optionally, refetch relevant queries to synchronize with the database
      refetch(); // This assumes 'refetch' is available from useQuery
    } catch (err) {
      console.error(err);
      // Handle error (e.g., rollback optimistic update, show error message)
    }
  };
  
  
  
  const styles = {
    chatPage: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '90%',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
    },
    chatForm: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', // Center vertically
      gap: '10px',
      marginBottom: '20px',
      width: '80%', // Set the width of the form
      marginLeft: 'auto', // These two lines center the form horizontally
      marginRight: 'auto',
    },
    inputPrompt: {
      width: '100%',
      height: '150px',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      resize: 'none',
    },
    submitButton: {
      width: '50%',
      padding: '10px 20px',
      fontSize: '16px',
      color: 'white',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    statusMessage: {
      fontSize: '14px',
      margin: '10px 0',
    },
    loading: {
      color: '#007bff',
    },
    error: {
      color: 'red',
    },
    responseContainer: {
      textAlign: 'left',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '5px',
      border: '1px solid #ddd',
    },
    responseContent: {
      whiteSpace: 'pre-line',
      wordBreak: 'break-word',
    }
  };
  const SocialShareContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px; /* This creates space between your buttons */
`;

const ShareButton = styled.button`
  background-color: #007bff
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkBlue; /* Darken the button a tad on hover */
    color: white;
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
  
  // Hover effect for submit button
  styles.submitButton[':hover'] = {
    backgroundColor: '#0056b3'
  };

  const pageUrl = encodeURIComponent(window.location.href);
  const shareMessage = encodeURIComponent("Meet your 24/7 Personal AI Trainer!");

 

  return (
    <div style={styles.chatPage}>
      <Helmet>
  <html lang="en" />
  <title>Chat with AI Trainer - Personalized Fitness and Nutrition Advice</title>
  <meta name="description" content="Engage with an AI personal trainer for customized fitness guidance and healthy meal planning. Get expert advice tailored to your needs, anytime." />
  <meta name="keywords" content="AI Trainer, Personal Trainer, Fitness Advice, Nutrition Guide, Healthy Eating, Workout Tips, Meal Planning, Fitness Questions" />
  <meta name="author" content="Balanced Blueprint AI Trainer" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="http://www.balancedblueprint.ca/aiTrainer" />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://www.balancedblueprint.ca/aiTrainer" />
  <meta property="og:title" content="Chat with AI Trainer - Personalized Fitness and Nutrition Advice" />
  <meta property="og:description" content="Engage with an AI personal trainer for customized fitness guidance and healthy meal planning." />
  <meta property="og:image" content="https://images.unsplash.com/photo-1684369176170-463e84248b70?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

  {/* Twitter */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="http://www.balancedblueprint.ca/aiTrainer" />
  <meta property="twitter:title" content="Chat with AI Trainer - Personalized Fitness and Nutrition Advice" />
  <meta property="twitter:description" content="Engage with an AI personal trainer for customized fitness guidance and healthy meal planning." />
  <meta property="twitter:image" content="https://images.unsplash.com/photo-1684369176170-463e84248b70?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

  {/* Additional tags for SEO and tracking */}
  {/* Example: <meta name="theme-color" content="#ffffff" /> */}
  {/* Example: <script type="application/ld+json">{"@context": "http://schema.org"}</script> */}
</Helmet>

      <h1>Your Personal AI Trainer</h1>
      <p>Ask me a fitness question! You can even let me know whats in your fridge and request advice on a healthy meal to make with what ever you got.</p>
      <p>All users receive 3 free trial questions per year, if you would like to subscribe to the feature, please visit "My Profile" page.</p>
      <form onSubmit={handleSubmit} style={styles.chatForm}>
      <textarea
  ref={promptRef}
  style={styles.inputPrompt}
  placeholder="Enter your prompt"
  value={prompt}
  onChange={handleInputChange}
/>
  {/* Submit button */}
  <button type="submit" style={styles.submitButton}>
    Send
  </button>
</form>
{loading && (
  <div style={{
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw', // 100% of the viewport width
    height: '100vh', // 100% of the viewport height
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    zIndex: 1000 // Ensure it's above other content
  }}>
    <img src={loadingGifUrl} alt="Loading..." style={{ width: '300px', height: '300px' }} />
    <p style={{ color: 'white', fontSize: '24px', marginTop: '20px' }}>
      Just a moment as we work out your answer!
    </p>
  </div>
)}


      {error && <p style={{...styles.statusMessage, ...styles.error}}>Error: {error.message}</p>}
      
      {/* Display all responses */}
      {responses.map((response) => (
  <div key={response.id} style={styles.responseContainer}> {/* Ensure response.id is unique */}
    <p>{response.query}</p>
    <div style={styles.responseContent}>{response.response}</div>
    <button onClick={() => handleDismiss(response.id)}>
      Dismiss
    </button>
  </div>
))}


    
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
  </div>
  );
}

export default ChatGptPage;
