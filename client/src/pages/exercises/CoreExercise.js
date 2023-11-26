import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const PageContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Courier New', Courier, monospace; 
`;

const ExerciseContainer = styled.div`
  width: 100%;
  max-width: 800px; 
  text-align: center;
  margin-bottom: 2rem;
`;


const ExerciseTitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 0;
`;


const Instructions = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const VideoWrapper = styled.div`
  iframe {
    width: 100%;
    height: auto;
  }
  @media (min-width: 768px) {
    iframe {
      width: 560px;
      height: 315px;
    }
  }
`;

const VideoPlaceholder = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 300px;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;


const CoreExercise = () => {
  const exercises = [
    {
        title: 'Russian Twists',
        instructions: 'Sit on the ground and lean back slightly, keeping your back straight. Hold a weight with both hands and twist your torso to each side, focusing on the quality of each rep. Breathe out as you twist and inhale as you return to the center, keeping your shoulders apart and your stomach sucked in.',
        videoUrl: '',
      },
      {
        title: 'Bicycle Crunches',
        instructions: 'Lie on your back with your hands behind your head. Bring your knees towards your chest and begin a pedaling motion while bringing your opposite elbow to each knee. Keep your stomach sucked in and breathe consciously; exhale as you crunch and inhale as you release.',
        videoUrl: '',
      },
      {
        title: 'Leg Raises',
        instructions: 'Lie flat on the ground and place your hands beneath your glutes. Raise your legs to a 90-degree angle, maintaining control and keeping your stomach sucked in. Lower them back down without letting your feet touch the ground. Breathe in as you lower your legs and exhale as you raise them.',
        videoUrl: '',
      },
      {
        title: 'Mountain Climbers',
        instructions: 'Start in a plank position. Bring each knee towards your chest in a running motion. Maintain aligned shoulders, a neutral neck, and a sucked-in stomach. Focus on breathing; exhale as you bring each knee forward and inhale as you return to the starting position.',
        videoUrl: '',
      },
      {
        title: 'Hanging Leg Raises',
        instructions: 'Hang from a pull-up bar with your arms fully extended. Keep your stomach sucked in and raise your legs to hip level, or higher if possible. Lower them back down in a controlled manner. Exhale as you raise your legs and inhale as you lower them.',
        videoUrl: '',
      },

    // Add more exercises here
  ];

  return (
    <>
    <Helmet>
  <title>Ultimate Core Workouts - Strengthen Your Core Muscles</title>
  <meta name="description" content="Discover effective core exercises for a strong and toned midsection. Featuring step-by-step instructions and video demonstrations for optimal core training." />
  <meta name="keywords" content="core exercises, abdominal workouts, core strengthening, fitness, workout routines, gym exercises, Russian twists, bicycle crunches, leg raises, mountain climbers, hanging leg raises" />
</Helmet>

    <PageContainer>
  <h1 style={{ textAlign: 'center', maxWidth: '95%' }}>Best Core Exercises</h1>

  {exercises.map((exercise, index) => (
    <ExerciseContainer key={index}>
      <ExerciseTitle>{exercise.title}</ExerciseTitle>
      <Instructions>{exercise.instructions}</Instructions>
      <VideoWrapper>
        {exercise.videoUrl ? (
          <iframe 
            title={exercise.title}
            width="560" 
            height="315" 
            src={exercise.videoUrl} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        ) : (
          <VideoPlaceholder>
            Future YouTube Video
          </VideoPlaceholder>
        )}
      </VideoWrapper>
    </ExerciseContainer>
  ))}
</PageContainer>
</>
  );
};

export default CoreExercise;
