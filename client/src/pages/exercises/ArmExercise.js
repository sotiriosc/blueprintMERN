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

const IntroSection = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
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
      instructions: `Stand as straight and firm throughout your body. Ensure your posture is as aligned as possible and your shoulder axis is centered. While stretching your shoulders and pushing your chest out, allow the dumbbell to fully stretch your bicep. Slowly and with control, while holding your position, flex your target muscle as hard as you can, shortening its length to your best ability. Slowly bring down the weight, controlling its position and your posture, until it reaches its initial position, stretching your muscle to its longest length. Repeat to target repetition or until failure.`,
      videoUrl: 'https://www.youtube.com/embed/kwG2ipFRgfo',
    },
    {
      title: 'Tricep Dumbbell Extension',
      instructions: `Bend over and form an 'L' with your body, keeping your head parallel to the ground. Suck your gut in, push your chest out, and straighten your back. Stretch your shoulders apart and use the weights to create a stretch on the triceps by bringing down the weights while your elbows are pointing towards your back. As you begin to lift the weight back up, control the weight carefully and deliberately, keeping your shoulders perfectly centered on their axis. Once you reach the top of the movement, focus on contracting and shortening the triceps muscle as hard as you can, giving it an extra squeeze to maximize the contraction. Then, slowly control the weight back down towards your starting position. Complete as many reps as desired or until failure.`,
    },
    
    // Add more exercises here
  ];

  return (
    <PageContainer>
  <h1 style={{ textAlign: 'center', maxWidth: '95%' }}>Best Arm Exercises</h1>
  <IntroSection>
  <div className="intro-section">
    <h2>Introduction: The Balanced Blueprint Approach</h2>
    <p>If you're new to working out, don't fret about pushing yourself too hard initially. Your body will need time to adapt to this new, invigorating lifestyle. Overdoing it can lead to unnecessary soreness and hinder your long-term progress.</p>
    <p>At Balanced Blueprint, we emphasize perfection in exercise—working to continuously improve, adapt, and fine-tune your routine. We believe that your body should function as a unified whole, operating in harmony both physically and mentally.</p>
    <p>Be mindful of your entire being during each workout. A positive mental state, nurtured by supportive relationships and a sense of community, can boost your stamina and performance. Your emotional well-being is a crucial part of your overall fitness.</p>
    <h3>Breathing and Form</h3>
    <p>Conscious breathing can amplify your workouts. Typically, exhale during the challenging, concentric part of the movement and inhale during the easier, eccentric portion. Controlled breathing also allows you to stretch your body, broadening your back and enhancing your V-taper.</p>
    <h3>Alignment and Posture</h3>
    <p>Keeping your body in proper alignment is crucial. Focus on maintaining an upright posture, level shoulders, and a balanced neck and girdle. Over time, you can correct any misalignments, often brought on by emotional stress or insecurity, to improve your body's symmetry.</p>
    <h3>Mindset Matters</h3>
    <p>Lastly, your mental outlook can make or break your fitness journey. Aimlessness is the enemy; a ship without a destination drifts. By setting concrete goals, you navigate towards success. Recognize your own importance and the impact you can have on others. In doing so, you create an environment for mutual growth and happiness.</p>
  </div>
  </IntroSection>
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
