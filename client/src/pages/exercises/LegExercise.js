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


const LegExercise = () => {
  const exercises = [
    {
        title: 'Squat (My Favorite)',
        instructions: `The squat is my favorite exercise as it engages the whole body. Start slow, focusing on form. As you lower into the squat, maintain perfect posture and use your diaphragm to keep your stomach sucked in. Go as low as you can while staying in control. Slowly build up your strength, always prioritizing form over ego lifting. This way, you'll be lifting heavy and safely in no time.`,
        videoUrl: '',
      },
      {
        title: 'Leg Press',
        instructions: 'Sit down on the leg press machine, placing your feet shoulder-width apart. Lower the weight slowly, keeping your posture straight and your stomach sucked in. Push through your heels to return to the starting position. Make sure to control the weight throughout the entire motion.',
        videoUrl: '',
      },
      {
        title: 'Lunges',
        instructions: 'Start in a standing position, taking a step forward into a lunge. Lower your body until both knees are bent at a 90-degree angle. Keep your posture perfect, shoulders aligned, and your stomach sucked in. Push through the front heel to return to the starting position and switch legs.',
        videoUrl: '',
      },
      {
        title: 'Calf Raises',
        instructions: 'Stand upright with your feet hip-width apart. Slowly raise your heels off the ground, pushing through the balls of your feet. Lower back down in a controlled manner. Keep your shoulders apart, your stomach sucked in, and focus on the quality of each rep.',
        videoUrl: '',
      },
      {
        title: 'Hamstring Curls',
        instructions: 'Lie face down on the hamstring curl machine. Curl your legs towards your buttocks, controlling the weight as you go. Lower the weight back down slowly. Keep your posture straight, your stomach sucked in, and focus on quality reps.',
        videoUrl: '',
      },
      {
        title: 'Pistol Squat',
        instructions: 'Start in a standing position, then extend one leg straight in front of you. Slowly lower yourself on the other leg into a squat, maintaining balance and keeping your extended leg off the ground. Maintain perfect posture and keep your stomach sucked in as you lower yourself and push back up.',
        videoUrl: '',
      }
    // Add more exercises here
  ];

  return (
    <PageContainer>
  <h1 style={{ textAlign: 'center', maxWidth: '95%' }}>Best Leg Exercises</h1>

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

export default LegExercise;
