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


const ArmExercise = () => {
  const exercises = [
    {
      title: 'Double Bicep Curl',
      instructions: `Stand as straight and firm throughout your body. Ensure your posture is as aligned as possible and your shoulder axis is centered. While stretching your shoulders and pushing your chest out, allow the barbell to fully stretch your biceps. Slowly and with control, while holding your position, flex your target muscle (biceps) as hard as you can, shortening its length to your best ability. Slowly bring down the weight, controlling its position and your posture, until it reaches its initial position, stretching your muscle to its longest length. Repeat to target repetition or until failure.`,
      videoUrl: 'https://youtu.be/n9mpFcG_eNw',
    },
    {
      title: 'Hammer Curl',
      instructions: `Stand with your feet shoulder-width apart and your knees slightly bent. Hold a dumbbell in each hand with your palms facing your sides and your arms straight. Keep your elbows close to your sides and rotate your forearms so that your palms are facing forward. Keeping your upper arms still, bend your elbows and curl the dumbbells as close to your shoulders as you can. Pause, then slowly lower the weights back to the starting position. This completes one rep.`,
      videoUrl: 'https://www.youtube.com/embed/0lZaQyt3b1Q',
    },
    {
      title: 'Concentration Curl',
      instructions: `Sit on a flat bench with your feet firmly on the floor and your back straight. Hold a dumbbell in one hand with your palm facing up. Rest your elbow on the inside of your thigh, just above your knee. Slowly curl the weight up toward your shoulder, keeping your upper arm still. Squeeze your biceps at the top of the movement, then lower the weight back to the starting position. Repeat for the desired number of repetitions, then switch arms.`,
      videoUrl: 'https://www.youtube.com/embed/2-1iYXkxL8g',
    },
    {
      title: 'Tricep Dumbbell Extension',
      instructions: `Bend over and form an 'L' with your body, keeping your head parallel to the ground. Suck your gut in, push your chest out, and straighten your back. Stretch your shoulders apart and use the weights to create a stretch on the triceps by bringing down the weights while your elbows are pointing towards your back. As you begin to lift the weight back up, control the weight carefully and deliberately, keeping your shoulders perfectly centered on their axis. Once you reach the top of the movement, focus on contracting and shortening the triceps muscle as hard as you can, giving it an extra squeeze to maximize the contraction. Then, slowly control the weight back down towards your starting position. Complete as many reps as desired or until failure.`,
      
    },
    {
      title: 'Tricep Dips',
      instructions: `Place your hands shoulder-width apart on a secured bench or stable chair. Slide your butt off the front of the bench with your legs extended out in front of you. Straighten your arms, keeping a little bend in your elbows to keep tension on your triceps and off your elbow joints. Slowly bend your elbows to lower your body toward the floor until your elbows are at about a 90-degree angle. Be sure to keep your back close to the bench. Once you reach the bottom of the movement, press down into the bench to straighten your elbows, returning to the starting position. This completes one rep. Keep your shoulders down as you lower and raise your body. You can bend your legs to modify this exercise.`,
      videoUrl: 'https://www.youtube.com/embed/0326dy_-CzM',
    },
    {
      title: 'Skull Crushers',
      instructions: `Lie flat on your back on a bench and hold a dumbbell in each hand above you with your arms extended and palms facing. Keeping your upper arms still, slowly bend your elbows to lower the weights until they are near your ears. Pause, then slowly raise the weights back to the starting position. This completes one rep.`,
      videoUrl: 'https://www.youtube.com/embed/2yjwXTZQDDI',
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

export default ArmExercise;
