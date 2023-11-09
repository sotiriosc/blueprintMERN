import React from 'react';
import styled from 'styled-components';

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


const ShoulderExercise = () => {
  const exercises = [
    {
        title: 'Shoulder Press',
        instructions: 'Perform this exercise either seated or standing. Start by gripping the barbell or dumbbells with a neutral grip. Keep your shoulders centered and apart, neck neutral, and your stomach sucked in. Lower the weight in a controlled manner just below chin level and then press up while maintaining your balanced posture. Concentrate on fully extending your arms at the top, ensuring your shoulder axis remains centered and your stomach stays tucked in.',
        videoUrl: '',
      },
      {
        title: 'Individual Side Lateral Raises',
        instructions: 'Using light weights, hold the dumbbells at your sides. Ensure your chest is pushed out, and your shoulders are stretched apart to work on widening your lateral deltoids. Raise the dumbbells to the sides until parallel to the floor and hold at the top. Lower them back down in a controlled manner, keeping your posture aligned and stomach sucked in throughout the exercise.',
        videoUrl: '',
      },
      {
        title: 'Rear Delt Raises',
        instructions: 'Rear delts can be a stubborn muscle group. The trick to activating them is to superset: perform a heavy set followed by a lighter set to get a good pump and burn. Maintain a straight back, keep your stomach sucked in, and your shoulders aligned and stretched apart. Slowly raise the weights to the sides, targeting the rear delts, and lower them in a controlled manner.',
        videoUrl: '',
      },
      {
        title: 'Front Delt Raises',
        instructions: 'Hold the dumbbells in front of you, palms facing your body. Keep your shoulders apart and centered, and your stomach sucked in. Raise the weights in front of you until they reach shoulder height. Lower them back down in a controlled manner, maintaining your balanced posture throughout the movement.',
        videoUrl: '',
      },
      {
        title: 'Cable Raises',
        instructions: 'Cable machines offer the versatility to target front, side, and rear deltoids. Adjust the pulley to the desired height. Grasp the handle and stand with your shoulders stretched apart, stomach sucked in, and back straight. Perform raises targeting the desired deltoid area, maintaining control and keeping your shoulders and neck neutral throughout the movement.',
        videoUrl: '',
      },
      {
        title: 'Rotator Cuff Exercises',
        instructions: 'Perform simple external and internal rotations using a light dumbbell. Maintain a straight back, keep your stomach sucked in, and your shoulders aligned and stretched apart. These exercises help in keeping the shoulder joint stable and should not be neglected.',
        videoUrl: '',
      },

    // Add more exercises here
  ];

  return (
    <PageContainer>
  <h1 style={{ textAlign: 'center', maxWidth: '95%' }}>Best Shoulder Exercises</h1>

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

export default ShoulderExercise;
