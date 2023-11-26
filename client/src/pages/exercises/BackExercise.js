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


const BackExercise = () => {
  const exercises = [
    {
      title: 'Pull Ups',
      instructions: `Grab the pull-up bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than your shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width. As you have both arms extended in front of you holding the bar at the chosen grip width, keep your torso as straight as possible while creating a curvature on your lower back and sticking your chest out. This is your starting position. Pull your torso up until the bar touches your upper chest by drawing the shoulders and the upper arms down and back. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space and only the arms should move. `,
      videoUrl: 'https://www.youtube.com/embed/eGo4IYlbE5g',
    },
    {
      title: 'Row Machine',
      instructions: `Sit down on the machine and select the weight. Place your feet on the front platform and grab the top handles. Pull back until your torso is at a 90-degree angle from your legs. Your back should be slightly arched and your chest should be sticking out. This is your starting position. Using your back muscles, pull the handles back towards your torso while keeping the arms close to it until you touch the abdominals. Breathe out as you perform that movement. At that point you should be squeezing your back muscles hard. Hold that contraction for a second and slowly go back to the original position while breathing in. Repeat for the recommended amount of repetitions. `,
      videoUrl: 'https://www.youtube.com/embed/6Z15_WdXmZo',
    },
    {
      title: 'Lat Pulldown',
      instructions: `Sit down on a pull-down machine with a wide bar attached to the top pulley. Make sure that you adjust the knee pad of the machine to fit your height. These pads will prevent your body from being raised by the resistance attached to the bar. Grab the bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than your shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width. As you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position. As you breathe out, bring the bar down until it touches your upper chest by drawing the shoulders and the upper arms down and back. `,
      videoUrl: 'https://www.youtube.com/embed/1nAmi0QxwzE',
    },
    {
      title: 'Dead Lifts',
      instructions: `Approach the bar so that it is centered over your feet. Your feet should be about hip-width apart. Bend at the hip to grip the bar at shoulder-width allowing your shoulder blades to protract. Typically, you would use an alternating grip. With your feet and your grip set, take a big breath and then lower your hips and flex the knees until your shins contact the bar. Look forward with your head and keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor. `,
      videoUrl: 'https://www.youtube.com/embed/op9kVnSso6Q',
    },
    {
      title: 'face Pulls',
      instructions: `Attach a rope attachment to a cable station. Grab the rope with a neutral grip (palms facing each other). Take a few steps back to create tension on the cable. Place one foot slightly in front of the other for balance. Pull the rope towards your face by externally rotating your shoulders. Your hands should be in line with your ears. Pause, then slowly return to the starting position. `,
      videoUrl: 'https://www.youtube.com/embed/4QqRvBqRqIc',
    },
    {
      title: 'Bent Over Row',
      instructions: `With a dumbbell in each hand (palms facing your torso), bend your knees slightly and bring your torso forward by bending at the waist; as you bend make sure to keep your back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The weights should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position. While keeping the torso stationary, lift the dumbbells to your side (as you breathe out), keeping the elbows close to the body (for the wide grip version, the elbows should be pointing outwards). On the top contracted position, squeeze the back muscles and hold for a second. Slowly lower the weight again to the starting position as you inhale. Repeat for the recommended amount of repetitions. `,
      videoUrl: 'https://www.youtube.com/embed/6TmWvczWk0M',
    },

    // Add more exercises here
  ];

  return (
    <>
      <Helmet>
        <title>Effective Back Workouts - Strengthen Your Back Muscles</title>
        <meta name="description" content="Explore the best back exercises for a strong and toned back. Our guide includes detailed instructions and video demonstrations for optimal back training." />
        <meta name="keywords" content="back exercises, back workouts, pull ups, row machine, lat pulldown, deadlifts, strength training, muscle toning, fitness, gym exercises" />
      </Helmet>

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
            
      </>
  );
};

export default BackExercise;
