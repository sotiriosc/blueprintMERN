import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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


const ArmExercises = () => {
  const exercises = [
    {
      title: 'Bicep Curl',
      instructions: 'Stand up straight with a dumbbell in each hand. Curl the weights while contracting your biceps. Lower the dumbbells back to the starting position.',
      videoUrl: 'https://www.youtube.com/embed/kwG2ipFRgfo',
    },
    {
      title: 'Tricep Pushdown',
      instructions: 'Attach a bar to a high pulley and grab it with an overhand grip. Push the bar down while extending your arms and flexing your triceps. Return slowly to the starting position.',
    },
    // Add more exercises here
  ];

  return (
    <PageContainer>
      <h1 style={{ textAlign: 'center', maxWidth: '95%' }}>Best Arm Exercises</h1>

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
  );
};

export default ArmExercises;
