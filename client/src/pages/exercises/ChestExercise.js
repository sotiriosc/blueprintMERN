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


const ChestExercise = () => {
  const exercises = [
    {
      title: 'Push Ups',
      instructions: `Lie on the floor face down and place your hands about shoulder width apart, while holding your torso up at arms length. Next, lower yourself downward until your chest almost touches the floor as you inhale, be sure to keep your core snug and body straight. Now breathe out and press your upper body back up to the starting position while squeezing your chest. After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed. To promote chest muscle activation, keep your your shoulders back while squeezing your chest outward. `,
      videoUrl: 'https://www.youtube.com/embed/IODxDxX7oi4',
    },
    {
      title: 'Bench Press',
      instructions: 'The bench press can be performed on a flat, incline, and decline bench. Each variation has its own set of benefits and can be cycled through as desired. The flat bench provides an even distribution of weight on the pectoral muscles. In contrast, the incline targets the upper chest, and the decline focuses on the lower chest. To perform a bench press, lay flat on your back while squeezing your shoulders together. Push your chest out and suck your stomach in. Slowly lower the weight as low as you can, hold, and then push up. To keep constant tension on the muscles, push up to 70% of the top position, hold and flex your chest, then lower the weight and repeat the flex on your chest as you hold. Continue to repeat this process. Note: This exercise can be dangerous and should only be performed with a spotter or with a weight you have complete control over. ',
      videoUrl: 'https://www.youtube.com/embed/gRVjAtPip0Y',
    },
    {
      title: 'Dumbbell Flys',
      instructions: `Dumbbell Flys are an excellent exercise for isolating the chest muscles. They can be performed on a flat, incline, or decline bench. The flat bench version targets the middle part of the chest, incline focuses on the upper chest, and decline targets the lower chest. To execute Dumbbell Flys, lie flat on your back on a bench with a dumbbell in each hand, arms extended above your chest, palms facing each other. Lower your arms out wide in a controlled manner, keeping your elbows slightly bent. You should feel a stretch across your chest as your arms descend. When your arms are level with your body, start the lifting phase. Use your chest muscles to bring the dumbbells back to the starting position, as if you're hugging a large tree. Focus on the contraction at the top of the movement, pausing briefly to squeeze your chest muscles. Remember to breathe, exhaling as you lift the weights and inhaling as you lower them. Note: This exercise places a lot of stress on the shoulder joints, so it's crucial to use a weight you can control. Avoid letting your arms drop below shoulder level as this can cause unnecessary strain. Always consider working with a spotter for safety.`,
      videoUrl: '',
    },
    {
      title: 'Inner Dumbbell Press',
      instructions: 'The Inner Dumbbell Press focuses on isolating the central part of your chest. Start by lying flat on your back on a bench, holding a dumbbell in each hand directly above your chest. Press the weights together so they touch each other, effectively "squeezing" them together throughout the entire exercise. With your shoulders back and your chest pushed out, begin to lower the weights in a controlled manner towards the center of your chest. In this variation, the weights will always be over the center of your chest, rather than moving vertically. Press the weights back up while continually pressing them together, squeezing your chest muscles as hard as you can at the top of the movement. Exhale during the lifting phase and inhale during the lowering phase. Note: It\'s crucial to use a weight you can control and always consider the option of a spotter for added safety. Pay close attention to form to avoid shoulder strain.',
      videoUrl: '',
    },
    {
      title: 'Cable Crossover',
      instructions: 'The Cable Crossover is an excellent isolation exercise that targets the chest muscles. To start, position two pulleys on a cable machine to the highest settings and attach a single-grip handle to each. Stand between the pulleys, facing away from the machine, and grasp the handles with each hand. Step forward to create tension in the cables, adopting a staggered stance for stability. Your arms should be slightly bent and outstretched, forming a T-shape with your body. From this position, initiate the movement by pulling your arms toward each other in a wide arc, while keeping a slight bend in your elbows. Squeeze your chest muscles together as your hands meet in front of your body. Inhale as you slowly reverse the movement, allowing the cables to pull your arms back to the starting position, feeling a stretch in your chest. Exhale during the concentric phase (arms coming together) and inhale during the eccentric phase (arms going apart). Note: Always use a weight that you can control for the full range of motion, and be cautious to not overextend your shoulders.',
      videoUrl: '',
    },
    {
      title: 'Machine Press',
      instructions: `Machine Press exercises offer a different dynamic from free weights, as they can provide more controlled and targeted muscle engagement. While machines vary, most machine press setups allow for flat, incline, or decline positions. Don't hesitate to explore different machines to diversify your workout routine. However, it's crucial to approach new machines cautiously; while they can offer stability, they can also be more restrictive in terms of movement, which may lead to injuries if not used correctly. To perform a Machine Press, adjust the seat and handles to align with your chest. Sit down and grasp the handles with a full grip, keeping your feet firmly planted on the ground. Push your chest out, pull your shoulders back, and maintain a neutral spine. Press the handles forward in a controlled manner, fully engaging your chest muscles. Slowly return to the starting position. It's advisable to start with lighter weights to get accustomed to the machine's range of motion. As you become more comfortable, you can gradually increase the weight, but always prioritize form over lifting heavier. Note: Due to the restrictive nature of some machines, always progress with weight increments slowly and carefully to minimize the risk of injury.`,
      videoUrl: '',
    },

    // Add more exercises here
  ];

  return (
    <>
      <Helmet>
        <title>Ultimate Chest Workouts - Build a Stronger Chest</title>
        <meta name="description" content="Discover the best chest exercises for a robust and muscular chest. Featuring step-by-step guides and video demonstrations for effective workouts." />
        <meta name="keywords" content="chest exercises, chest workouts, push ups, bench press, muscle building, strength training, fitness, gym exercises" />
      </Helmet>
    <PageContainer>
  <h1 style={{ textAlign: 'center', maxWidth: '95%' }}>Best Chest Exercises</h1>

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

export default ChestExercise;
