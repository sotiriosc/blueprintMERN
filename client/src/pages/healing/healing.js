import React, { useState } from 'react'; 
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
  text-align: left;
  margin-bottom: 40px;  
  margin-top: 40px;
`;

const ListItem = styled.li`
  margin: 5px 0;
  font-size: 1.5em;
  
`;

const SearchBarContainer = styled.div`
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  font-size: 1em;
  padding: 10px;
  margin-top: 10px;
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const InjuryContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const InjuryTitle = styled.h4`
  font-size: 2em;
  color: #333;
`;

const InjurySymptons = styled.p`
  font-size: 1.2em;
  line-height: 1.4;
`;

const Exercises = styled.p`
  font-size: 1.2em;
  line-height: 1.4;
  font-style: italic;
`;

const Stretches = styled.p`
    font-size: 1.2em;
    line-height: 1.4;
    font-style: italic;
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

// Healking Injuries Page Component
export default function Healing() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const injuries = [
        {
          title: "Minor Ankle Sprain",
          symptoms: "Symptoms include pain, swelling, and difficulty walking. Rest your ankle, apply ice to reduce swelling, use compression bandages, and keep your ankle elevated. Avoid putting weight on it initially.",
          stretches: [
            {
              name: "Ankle Circles",
              description: "Sit comfortably and lift your injured foot. Slowly rotate your foot in a circular motion. Perform 10 circles in each direction."
            },
            {
              name: "Towel Stretch",
              description: "Sit with your leg stretched out. Loop a towel around your foot and gently pull towards you, keeping your knee straight. Hold for 15-30 seconds. Repeat 2-3 times."
            },
            {
              name: "Calf Stretches",
              description: "Stand facing a wall. Place your hands on the wall and extend your injured leg back, keeping your heel on the floor. Bend your front knee until you feel a stretch in the calf of the extended leg. Hold for 15-30 seconds. Repeat 2-3 times."
            }
          ],
          exercises: [
            {
              name: "Balancing Exercises",
              description: "Stand on one foot, using a wall or chair for support if needed. Hold the position for as long as you can, then switch feet. Repeat 2-3 times."
            },
            {
              name: "Gentle Ankle Flexion and Extension",
              description: "Sit down and extend your injured leg. Gently flex your ankle by pointing your toes away from you, and then bring them back towards you. Do 10-15 repetitions."
            },
            {
              name: "Toe Raises",
              description: "Stand with your feet shoulder-width apart. Slowly raise your heels off the ground, standing on your toes. Lower back down. Repeat 10-15 times."
            }
          ]
        },
        {
            title: "Mild Groin Strain",
            symptoms: "Pain and tenderness in the groin and inner thigh area. May feel pain when bringing the legs together or raising the knee.",
            stretches: [
              {
                name: "Seated Butterfly Stretch",
                description: "Sit with your feet together and knees bent outwards. Hold your feet and gently press your knees towards the ground. Hold for 30 seconds."
              },
              {
                name: "Standing Groin Stretch",
                description: "Stand and put your legs wide apart. Shift your weight to one side as if reaching sideways. Feel a stretch on the inner thigh of the opposite leg. Hold for 30 seconds, then switch sides."
              },
              {
                name: "Gentle Lunges",
                description: "Step forward with one foot and lower your hips until both knees are bent at about a 90-degree angle. Make sure your front knee is directly above your ankle. Hold for a few seconds, then switch legs."
              }
            ],
            exercises: [
              {
                name: "Lying Leg Raises",
                description: "Lie on your back, legs straight. Lift one leg upwards, keeping it straight. Hold for a few seconds, then lower it slowly. Repeat 10 times on each leg."
              },
              {
                name: "Gentle Squats",
                description: "Stand with feet shoulder-width apart, and perform a squat without going too deep. Keep your back straight and knees aligned with your feet. Do 10-15 repetitions."
              },
              {
                name: "Hip Adductor Strengthening",
                description: "Lie on your side, stack your feet, and bend your top knee, placing the foot in front of the lower leg. Raise the lower leg upwards. Do 10 repetitions, then switch sides."
              }
            ]
          },
          {
            title: "Hamstring Strain",
            symptoms: "A sudden sharp pain in the back of the thigh, especially during running or lifting heavy objects. Swelling and tenderness may occur.",
            stretches: [
              {
                name: "Seated Hamstring Stretch",
                description: "Sit on the ground with one leg extended out and the other bent inwards. Reach forward towards your foot on the extended leg. Hold for 30 seconds, then switch legs."
              },
              {
                name: "Standing Hamstring Stretch",
                description: "Place one foot in front of you, toes up. Bend your back slightly and lean forward from your hips. Keep your back straight. Hold for 30 seconds, then switch legs."
              },
              {
                name: "Towel Hamstring Stretch",
                description: "Lie on your back. Loop a towel around your foot and gently pull your straight leg up. Hold for 30 seconds. Repeat with the other leg."
              }
            ],
            exercises: [
              {
                name: "Bridges",
                description: "Lie on your back with your knees bent and feet flat on the ground. Lift your hips to create a straight line from your knees to shoulders. Hold for a few seconds, then lower. Do 10-15 repetitions."
              },
              {
                name: "Gentle Leg Curls",
                description: "Lie on your stomach. Slowly bend your knee and bring your heel towards your buttocks. Hold for a few seconds, then lower. Repeat 10 times."
              },
              {
                name: "Walking or Light Jogging",
                description: "Start with a gentle walk, gradually increasing to a light jog as your comfort allows. Avoid pushing through pain."
              }
            ]
          },
          {
            title: "Shin Splints",
            symptoms: "Pain along the inner side of the shinbone, often occurring after running or other high-impact activities. Tenderness, soreness, and mild swelling may be present.",
            stretches: [
              {
                name: "Seated Shin Stretch",
                description: "Sit on the floor with both legs extended. Gently point and flex your toes, feeling a stretch along your shin. Hold for 20 seconds, repeat 3 times."
              },
              {
                name: "Calf Stretches",
                description: "Stand facing a wall. Extend one leg behind you, keeping your heel on the ground. Lean forward until you feel a stretch in the calf of the extended leg. Hold for 30 seconds, then switch legs."
              },
              {
                name: "Toe Raises Against a Wall",
                description: "Stand with your back against a wall. Lift your toes while keeping your heels firmly on the ground. Hold for a few seconds, then release. Repeat 10-15 times."
              }
            ],
            exercises: [
              {
                name: "Toe Taps",
                description: "Sit in a chair with your feet flat on the ground. Lift the front part of your feet while keeping your heels on the ground, then tap your toes back down. Repeat for 1-2 minutes."
              },
              {
                name: "Gentle Walking",
                description: "Start with slow, gentle walks to gradually engage the shin muscles without overexertion. Gradually increase your pace and distance as comfort allows."
              },
              {
                name: "Slowly Building up to Jogging",
                description: "Once walking is comfortable and pain-free, slowly introduce light jogging, being mindful of any discomfort or pain."
              }
            ]
          },
          {
            title: "Wrist Sprain",
            symptoms: "Pain, swelling, and limited movement in the wrist. The pain may worsen when trying to grip objects or move the wrist.",
            stretches: [
              {
                name: "Wrist Flexor Stretch",
                description: "Extend your arm in front of you with your palm down. Gently bend your wrist down using the other hand. Hold for 15-30 seconds. Repeat with the other wrist."
              },
              {
                name: "Wrist Extensor Stretch",
                description: "Extend your arm in front of you with your palm facing up. Gently bend your wrist down using the other hand. Hold for 15-30 seconds. Repeat with the other wrist."
              },
              {
                name: "Gentle Rotation of the Wrist",
                description: "Hold your arm out in front with your elbow bent at a right angle. Gently rotate your wrist clockwise and then counterclockwise. Repeat 10 times in each direction."
              }
            ],
            exercises: [
              {
                name: "Grip Strengthening Exercises",
                description: "Use a soft stress ball or similar object. Squeeze the ball in your hand, hold for a few seconds, then release. Repeat 10-15 times with each hand."
              },
              {
                name: "Wrist Curls with Light Weights",
                description: "Hold a light dumbbell in your hand with your palm facing up. Bend your wrist upwards and then lower it back down. Do 10-15 repetitions with each hand."
              },
              {
                name: "Wrist Extensions",
                description: "Hold a light dumbbell with your palm facing down. Lift your hand upwards, bending at the wrist, and then lower it. Do 10-15 repetitions with each hand."
              }
            ]
          },
          {
            title: "Tennis Elbow",
            symptoms: "Pain and tenderness on the outside of the elbow, often aggravated by gripping or lifting. May experience stiffness and weakness in the forearm.",
            stretches: [
              {
                name: "Wrist Flexor Stretch",
                description: "Extend your arm in front of you with your palm down. Gently bend your wrist down using the other hand, stretching the outer forearm. Hold for 15-30 seconds, then switch arms."
              },
              {
                name: "Wrist Extensor Stretch",
                description: "Extend your arm in front of you with your palm facing up. Gently pull your fingers towards you with the other hand, stretching the inner forearm. Hold for 15-30 seconds, then switch arms."
              }
            ],
            exercises: [
              {
                name: "Wrist Flexor Strengthening",
                description: "Hold a light weight with your palm up. Bend your wrist upwards, then lower it. Do 10-15 repetitions with each hand."
              },
              {
                name: "Wrist Extensor Strengthening",
                description: "Hold a light weight with your palm down. Lift your hand upwards, bending at the wrist, then lower it. Do 10-15 repetitions with each hand."
              }
            ]
          },
          {
            title: "Golfer's Elbow",
            symptoms: "Pain and tenderness on the inside of the elbow, sometimes extending along the inner forearm. Grip strength may be weakened.",
            stretches: [
              {
                name: "Wrist Flexor Stretch",
                description: "Extend your arm with your palm down and gently bend your wrist down using the other hand. Hold for 15-30 seconds, then switch arms."
              },
              {
                name: "Wrist Extensor Stretch",
                description: "Extend your arm with your palm facing up. Gently pull your fingers towards you with the other hand. Hold for 15-30 seconds, then switch arms."
              }
            ],
            exercises: [
              {
                name: "Forearm Pronation and Supination",
                description: "Hold a light weight or hammer handle with your arm at a right angle and elbow at your side. Rotate your wrist up and down slowly. Do 10-15 repetitions with each hand."
              },
              {
                name: "Wrist Curls",
                description: "Hold a light weight with your palm facing up. Curl your wrist towards your body. Do 10-15 repetitions, then switch arms."
              }
            ]
          },
          {
            title: "Achilles Tendinitis",
            symptoms: "Pain and stiffness along the Achilles tendon and back of the heel, especially noticeable in the morning or after periods of inactivity.",
            stretches: [
              {
                name: "Calf Stretch Against Wall",
                description: "Stand facing a wall with one foot behind the other. Keep your back heel on the ground and bend the front knee. Hold for 30 seconds, then switch legs."
              },
              {
                name: "Seated Towel Stretch",
                description: "Sit with your leg outstretched. Loop a towel around the ball of your foot and gently pull towards you, keeping your knee straight. Hold for 30 seconds, then switch legs."
              }
            ],
            exercises: [
              {
                name: "Heel Drops",
                description: "Stand on a step with your toes on the edge and heels hanging off. Slowly lower your heels below the level of the step, then raise them. Do 10-15 repetitions."
              },
              {
                name: "Toe-to-Heel Raises",
                description: "Stand flat on the ground. Lift your toes, then lift your heels, rolling from toes to heels. Repeat for 1-2 minutes."
              }
            ]
          },
          {
            title: "Plantar Fasciitis",
            symptoms: "Sharp pain in the bottom of the foot near the heel. Pain is often worse in the morning or after standing for long periods.",
            stretches: [
              {
                name: "Towel Stretch",
                description: "Sit with your leg stretched out in front of you. Loop a towel around your foot and gently pull the towel towards you, keeping your knee straight. Hold for 15-30 seconds and repeat 2-3 times."
              },
              {
                name: "Calf Stretch",
                description: "Stand facing a wall with your hands on the wall at eye level. Put one leg behind you, heel down, and the other leg in front, bent at the knee. Push your hips towards the wall for a stretch. Hold for 30 seconds and switch legs."
              },
              {
                name: "Plantar Fascia Massage",
                description: "Roll your foot over a frozen water bottle or a round object like a foam roller. Do this for a few minutes to relieve discomfort."
              }
            ],
            exercises: [
              {
                name: "Toe Curls",
                description: "Curl your toes towards you and then extend them away. Repeat this motion for a few minutes to strengthen the foot muscles."
              },
              {
                name: "Arch Lifts",
                description: "Stand with your feet flat on the ground. Lift the arches of your feet while keeping your toes and heels on the ground. Hold for a few seconds, then release. Repeat 10 times."
              }
            ]
          },
          {
            title: "Rotator Cuff Tendinitis",
            symptoms: "A dull ache deep in the shoulder, often worsening with certain movements or when lying on the affected side.",
            stretches: [
              {
                name: "Pendulum Stretch",
                description: "Lean over slightly and let your affected arm hang down. Swing the arm gently in small circles. Do this for a minute or two to relieve tension."
              },
              {
                name: "Towel Stretch",
                description: "Hold a towel behind your back with one hand and grab the opposite end with your other hand. Gently pull the towel up with the good arm, stretching the affected arm. Hold for 15-30 seconds."
              },
              {
                name: "Doorway Stretch",
                description: "Stand in a doorway with your arms on the door frame, elbows at a 90-degree angle. Lean forward to stretch the front of your shoulder. Hold for 15-30 seconds."
              }
            ],
            exercises: [
              {
                name: "Wall Push-Ups",
                description: "Stand facing a wall with your arms straight in front of you. Lean forward slowly and push your body away from the wall. Do 10-15 repetitions."
              },
              {
                name: "Shoulder Blade Squeezes",
                description: "Sit or stand with your arms at your sides. Squeeze your shoulder blades together, hold for a few seconds, and release. Repeat 10-15 times."
              },
              {
                name: "Arm Slides",
                description: "Stand with your back against a wall, arms by your sides. Slide your arms upwards, keeping them against the wall, then back down. Repeat 10-15 times."
              }
            ]
          },
          {
            title: "Stress Fractures (Mild)",
            symptoms: "A small crack in a bone causing pain and swelling. Often occurs in the feet or lower legs and is common in athletes.",
            stretches: [
              {
                name: "Gentle Stretching of the Affected Area",
                description: "Perform mild stretching exercises for the affected area, but be careful not to exert too much pressure or force."
              },
              {
                name: "Toe Stretches",
                description: "Sit and extend your affected leg. Gently pull back on your toes to stretch the foot and lower leg. Hold for 30 seconds."
              },
              {
                name: "Calf Stretches",
                description: "Stand facing a wall, extend the injured leg back, keeping your heel on the ground. Lean forward, feeling a stretch in your calf. Hold for 30 seconds."
              }
            ],
            exercises: [
              {
                name: "Low-Impact Activities",
                description: "Engage in low-impact activities like swimming or cycling, which don’t put much stress on the fracture site."
              },
              {
                name: "Partial Weight-Bearing Exercises",
                description: "As the pain decreases, gradually introduce partial weight-bearing exercises as recommended by a healthcare professional."
              },
              {
                name: "Balancing Exercises",
                description: "Stand on the non-injured leg to help strengthen it and improve balance. Use a chair for support if necessary."
              }
            ]
          },
          {
            title: "Runner's Knee",
            symptoms: "Pain around or behind the kneecap, especially when bending the knee, walking, or climbing stairs. May feel a grinding sensation.",
            stretches: [
              {
                name: "Quadriceps Stretch",
                description: "Stand and hold your ankle to pull your foot towards your buttocks. Keep your knees together and hold the stretch for 30 seconds. Repeat with the other leg."
              },
              {
                name: "Hamstring Stretch",
                description: "Sit on the ground with one leg extended and the other bent. Reach towards your foot on the extended leg. Hold for 30 seconds, then switch legs."
              },
              {
                name: "IT Band Stretch",
                description: "Stand and cross one leg behind the other. Lean towards the side of the front leg until you feel a stretch along your outer thigh. Hold for 30 seconds, then switch sides."
              }
            ],
            exercises: [
              {
                name: "Straight Leg Raises",
                description: "Lie on your back with one leg straight and the other bent. Raise the straight leg slowly up to the height of the bent knee. Repeat 10-15 times, then switch legs."
              },
              {
                name: "Step-Ups",
                description: "Stand in front of a step. Step up with one foot, then the other, and step down in the same order. Do 10-15 repetitions per leg."
              },
              {
                name: "Calf Raises",
                description: "Stand with your feet hip-width apart. Raise up onto your toes, then slowly lower back down. Repeat 10-15 times."
              }
            ]
          },
          {
            title: "IT Band Syndrome",
            symptoms: "Pain on the outer side of the knee, which can radiate up or down the leg. Often worsens with activity and improves with rest.",
            stretches: [
              {
                name: "IT Band Stretch",
                description: "Cross one leg over the other and lean to the side towards the crossed-over leg. Hold the stretch for 30 seconds, then switch sides."
              },
              {
                name: "Glute Stretch",
                description: "Lie on your back with both knees bent. Cross one leg over the other thigh and pull your knee towards your chest. Hold for 30 seconds, then switch legs."
              },
              {
                name: "Hip Flexor Stretch",
                description: "Kneel on one knee, the other foot in front. Push your hips forward, keeping your back straight. Hold for 30 seconds, then switch legs."
              }
            ],
            exercises: [
              {
                name: "Foam Rolling",
                description: "Use a foam roller on the outer thigh and hip area. Roll back and forth slowly for a few minutes to help release tightness."
              },
              {
                name: "Hip Abduction",
                description: "Lie on your side with your bottom leg bent for support. Lift your top leg up and slightly back, then lower it. Do 10-15 repetitions, then switch sides."
              },
              {
                name: "Clamshells",
                description: "Lie on your side with knees bent. Keeping feet together, open your top knee like a clamshell, then close. Repeat 10-15 times, then switch sides."
              }
            ]
          }
          ,
          {
            title: "Pulled Muscles (Minor)",
            symptoms: "Sudden pain during activity, possible swelling, bruising, or weakness in the muscle.",
            stretches: [
              {
                name: "Gentle Stretching",
                description: "Gently stretch the affected muscle, holding each stretch for about 30 seconds. Avoid any stretch that causes pain."
              },
              {
                name: "Dynamic Stretching",
                description: "Perform light dynamic stretches that involve slowly moving the muscle in its full range of motion."
              },
              {
                name: "Yoga Poses",
                description: "Simple yoga poses can help stretch the affected muscle gently. Choose poses that target the specific muscle and avoid intense stretching."
              }
            ],
            exercises: [
              {
                name: "Gradual Range of Motion Exercises",
                description: "Once the pain decreases, gently exercise the muscle through its full range of motion. Increase intensity gradually, avoiding any movement that causes pain."
              },
              {
                name: "Light Resistance Exercises",
                description: "As the muscle heals, incorporate light resistance exercises to regain strength. Use resistance bands or light weights, and increase gradually."
              },
              {
                name: "Aquatic Therapy",
                description: "Performing exercises in water can help by providing resistance while reducing stress on the muscle."
              }
            ]
          },
          {
            title: "Bursitis (Mild)",
            symptoms: "Joint pain and swelling, typically in the shoulder, elbow, or hip. The area may be red and feel warm to the touch.",
            stretches: [
              {
                name: "Gentle Joint Stretch",
                description: "Perform mild stretching exercises for the affected joint, focusing on gentle, controlled movements. Avoid any stretch that causes pain or discomfort."
              },
              {
                name: "Range of Motion Exercises",
                description: "Slowly move the affected joint through its full range of motion. This can be done several times a day to maintain flexibility."
              },
              {
                name: "Yoga Poses",
                description: "Simple yoga poses can help improve flexibility and reduce stiffness in the affected joint. Choose poses that are gentle and do not strain the joint."
              }
            ],
            exercises: [
              {
                name: "Low-Impact Activities",
                description: "Engage in low-impact activities like walking or swimming that do not put excessive stress on the affected joint."
              },
              {
                name: "Strength Training",
                description: "Strengthen the muscles surrounding the affected joint with light resistance exercises, using resistance bands or light weights."
              },
              {
                name: "Aquatic Therapy",
                description: "Performing exercises in water can reduce the stress on the joint while providing resistance to strengthen the surrounding muscles."
              }
            ]
          },
          {
            title: "Mild Back Strain",
            symptoms: "Muscle tightness or pain in the lower back, sometimes radiating to the buttocks or legs. Pain may worsen with movement.",
            stretches: [
              {
                name: "Knee-to-Chest Stretch",
                description: "Lie on your back and pull one knee towards your chest, holding it with your hands. Hold for 30 seconds, then switch legs."
              },
              {
                name: "Pelvic Tilt",
                description: "Lie on your back with your knees bent and feet flat on the floor. Tighten your stomach muscles and press your lower back against the floor. Hold for 10 seconds."
              },
              {
                name: "Cat-Cow Stretch",
                description: "On your hands and knees, alternate between arching your back upwards (cat) and letting it sag towards the floor (cow). Move slowly and gently."
              }
            ],
            exercises: [
              {
                name: "Partial Crunches",
                description: "Lie on your back with knees bent. Cross arms over your chest and raise your shoulders off the floor. Hold for a second, then slowly lower back down."
              },
              {
                name: "Wall Sits",
                description: "Stand about 10 inches from a wall, then lean back until your back is flat against the wall. Slide down into a sitting position and hold for 10 seconds."
              },
              {
                name: "Hamstring Stretches",
                description: "Lie on your back and lift one leg up. Hold your thigh and slowly straighten your knee until you feel a stretch in the back of your thigh."
              }
            ]
          },
          {
            title: "Neck Strain",
            symptoms: "Pain and stiffness in the neck, sometimes extending to the shoulders or upper back. Pain may worsen with movement or certain positions.",
            stretches: [
              {
                name: "Neck Tilt",
                description: "Gently tilt your head towards your shoulder and hold for 30 seconds. Repeat on the other side."
              },
              {
                name: "Neck Turn",
                description: "Slowly turn your head to one side until you feel a stretch. Hold for 30 seconds, then repeat on the other side."
              },
              {
                name: "Chin Tuck",
                description: "While sitting upright, pull your head back until your neck is straight and you feel a stretch in the back of your neck. Hold for 5 seconds."
              }
            ],
            exercises: [
              {
                name: "Shoulder Rolls",
                description: "Raise your shoulders up, then roll them back and down. Repeat 10 times."
              },
              {
                name: "Shoulder Blade Squeeze",
                description: "Sit or stand with your arms at your sides. Squeeze your shoulder blades together and hold for 5 seconds. Repeat 10 times."
              },
              {
                name: "Isometric Neck Exercises",
                description: "Place your hand against the side of your head. Try to turn your head into your hand while resisting with your hand. Hold for 5 seconds, then repeat on the other side."
              }
            ]
            },          
            {
                title: "Hip Flexor Strain",
                symptoms: "Pain in the front of the hip or in the groin area, especially when lifting the knee towards the chest or during activity.",
                stretches: [
                  {
                    name: "Kneeling Hip Flexor Stretch",
                    description: "Kneel on one knee with the other foot in front. Push your hips forward and hold for 30 seconds. Repeat on the other side."
                  },
                  {
                    name: "Seated Butterfly Stretch",
                    description: "Sit with the soles of your feet together and knees bent outwards. Gently press your knees down with your elbows. Hold for 30 seconds."
                  },
                  {
                    name: "Psoas Stretch",
                    description: "Lunge forward with one foot, keeping the other leg extended behind you. Slightly bend your back knee towards the ground. Hold for 30 seconds, then switch legs."
                  }
                ],
                exercises: [
                  {
                    name: "Standing Hip Flexor",
                    description: "Stand and lift one knee towards your chest, then lower it. Repeat 10-15 times, then switch legs."
                  },
                  {
                    name: "Lying Leg Raises",
                    description: "Lie on your back and lift one leg straight up, then lower it slowly. Repeat 10-15 times, then switch legs."
                  },
                  {
                    name: "Bridges",
                    description: "Lie on your back with your knees bent and feet flat on the floor. Lift your hips to form a straight line from your shoulders to your knees. Hold for a few seconds, then lower."
                  }
                ]
              },
              {
                title: "Jumper's Knee (Mild)",
                symptoms: "Pain below the kneecap, especially when jumping, running, or walking. Can feel stiffness after prolonged sitting.",
                stretches: [
                  {
                    name: "Quadriceps Stretch",
                    description: "Stand and hold your ankle, pulling your foot towards your buttocks. Keep your knees together and hold the stretch for 30 seconds. Repeat with the other leg."
                  },
                  {
                    name: "Hamstring Stretch",
                    description: "Sit with one leg extended and the other bent. Reach towards your foot on the extended leg. Hold for 30 seconds, then switch legs."
                  },
                  {
                    name: "Calf Stretch",
                    description: "Stand facing a wall. Place one foot behind you, keeping the heel on the ground. Lean forward, feeling a stretch in your calf. Hold for 30 seconds, then switch legs."
                  }
                ],
                exercises: [
                  {
                    name: "Straight Leg Raises",
                    description: "Lie on your back with one leg straight and the other bent. Raise the straight leg up to the height of the bent knee. Repeat 10-15 times, then switch legs."
                  },
                  {
                    name: "Half Squats",
                    description: "Stand with your feet hip-width apart. Lower into a half squat, keeping your knees aligned with your feet. Do 10-15 repetitions."
                  },
                  {
                    name: "Leg Presses",
                    description: "Using a leg press machine, press with your legs without locking your knees. Start with light weight and increase gradually."
                  }
                ]
              },
              {
                title: "Carpal Tunnel Syndrome (Mild)",
                symptoms: "Numbness, tingling, or pain in the thumb and first three fingers. Symptoms often worsen at night.",
                stretches: [
                  {
                    name: "Wrist Flexor Stretch",
                    description: "Extend your arm in front with your palm down. Gently pull your fingers back towards your body with the other hand. Hold for 30 seconds, then switch arms."
                  },
                  {
                    name: "Wrist Extensor Stretch",
                    description: "Extend your arm with your palm facing up. Gently press down on your fingers with the other hand. Hold for 30 seconds, then switch arms."
                  },
                  {
                    name: "Median Nerve Glide",
                    description: "Extend your arm with your palm facing up. Gently bend your wrist, touch your thumb to each finger, then straighten them. Repeat 10 times."
                  }
                ],
                exercises: [
                  {
                    name: "Wrist Curls",
                    description: "Hold a light weight with your palm facing up. Bend your wrist upwards, then lower it. Do 10-15 repetitions with each hand."
                  },
                  {
                    name: "Grip Strengthening",
                    description: "Use a soft stress ball or hand gripper. Squeeze and hold for a few seconds, then release. Repeat 10-15 times with each hand."
                  },
                  {
                    name: "Finger Extensions",
                    description: "Wrap a rubber band around your fingers, then stretch them out against the band's resistance. Repeat 10-15 times."
                  }
                ]
              },
              {
                title: "Sciatica (Mild)",
                symptoms: "Pain that radiates along the sciatic nerve, from the lower back through the hips and buttocks, and down each leg. Numbness or tingling can also occur.",
                stretches: [
                  {
                    name: "Piriformis Stretch",
                    description: "Lie on your back with both knees bent. Cross one leg over the other thigh and pull your knee towards your chest. Hold for 30 seconds, then switch sides."
                  },
                  {
                    name: "Knee to Opposite Shoulder",
                    description: "Lie on your back with legs extended. Bend one knee and pull it across your body towards your opposite shoulder. Hold for 30 seconds, then switch sides."
                  },
                  {
                    name: "Seated Spinal Stretch",
                    description: "Sit on the ground with your legs extended. Bend one knee and place your foot outside the opposite thigh. Twist towards the bent knee, placing your opposite elbow on the outside of the bent knee. Hold for 30 seconds, then switch sides."
                  }
                ],
                exercises: [
                  {
                    name: "Pelvic Tilt",
                    description: "Lie on your back with your knees bent and feet flat on the floor. Tighten your abdominal muscles and push your lower back into the floor. Hold for 5 seconds."
                  },
                  {
                    name: "Glute Bridges",
                    description: "Lie on your back with your knees bent and feet flat on the floor. Lift your hips to form a straight line from your knees to shoulders. Hold for a few seconds, then lower."
                  },
                  {
                    name: "Hamstring Stretch",
                    description: "Sit on the ground with one leg extended. Lean forward gently, reaching towards your toes. Hold for 30 seconds, then switch legs."
                  }
                ]
              },
              {
                title: "Patellofemoral Pain Syndrome",
                symptoms: "Pain around the kneecap, especially when sitting with bent knees, squatting, jumping, or using stairs. May feel a clicking or grinding sensation in the knee.",
                stretches: [
                  {
                    name: "Quadriceps Stretch",
                    description: "Stand and hold your ankle, pulling your foot towards your buttocks. Keep your knees together and hold the stretch for 30 seconds. Repeat with the other leg."
                  },
                  {
                    name: "Hamstring Stretch",
                    description: "Stand and place one foot in front of you. Bend your back slightly and lean forward from your hips. Keep your back straight and hold the stretch for 30 seconds. Switch legs."
                  },
                  {
                    name: "Calf Stretch",
                    description: "Stand facing a wall with one foot behind you, heel down. Lean forward, keeping your back leg straight. Hold for 30 seconds, then switch legs."
                  }
                ],
                exercises: [
                  {
                    name: "Straight Leg Raises",
                    description: "Lie on your back with one leg straight and the other bent. Raise the straight leg up slowly. Repeat 10-15 times, then switch legs."
                  },
                  {
                    name: "Step-Ups",
                    description: "Stand in front of a step. Step up with one foot, then the other, and step down in the same order. Do 10-15 repetitions per leg."
                  },
                  {
                    name: "Mini Squats",
                    description: "Stand with feet hip-width apart. Perform a mini squat without going too deep. Keep your knees aligned with your feet. Do 10-15 repetitions."
                  }
                ]
              },
              {
                title: "Mild Elbow Strain",
                symptoms: "Pain in the elbow, especially when moving the arm, gripping objects, or lifting. The elbow may also feel stiff.",
                stretches: [
                  {
                    name: "Wrist Flexor Stretch",
                    description: "Extend your arm with your palm down. Gently pull your fingers back towards your body with the other hand. Hold for 30 seconds, then switch arms."
                  },
                  {
                    name: "Wrist Extensor Stretch",
                    description: "Extend your arm with your palm facing up. Gently press down on your fingers with the other hand. Hold for 30 seconds, then switch arms."
                  },
                  {
                    name: "Elbow Extension Stretch",
                    description: "Raise your arm overhead and use your other hand to gently press the elbow back. Hold for 30 seconds, then switch arms."
                  }
                ],
                exercises: [
                  {
                    name: "Elbow Flexion and Extension",
                    description: "Sit with your arm supported and elbow bent. Slowly straighten your arm and then bend the elbow to return to the starting position. Do 10-15 repetitions."
                  },
                  {
                    name: "Wrist Curls",
                    description: "Sit with your forearm resting on your thigh, palm up. Hold a light weight and curl your wrist upwards, then lower it. Do 10-15 repetitions with each hand."
                  },
                  {
                    name: "Reverse Wrist Curls",
                    description: "Sit with your forearm resting on your thigh, palm down. Hold a light weight and lift your hand upwards, then lower it. Do 10-15 repetitions with each hand."
                  }
                ]
              },
              {
                title: "Costochondritis (Chest Pain)",
                symptoms: "Sharp pain in the chest, especially where the ribs meet the breastbone. The pain may worsen with deep breathing or physical activity.",
                stretches: [
                  {
                    name: "Chest Stretch",
                    description: "Stand in a doorway with your arms on the door frame, elbows at a 90-degree angle. Lean forward to stretch the chest muscles. Hold for 15-30 seconds."
                  },
                  {
                    name: "Arm Across Chest Stretch",
                    description: "Bring one arm across your chest, and use the other hand to apply gentle pressure to the upper arm, enhancing the stretch. Hold for 15-30 seconds, then switch arms."
                  },
                  {
                    name: "Upper Back Stretch",
                    description: "Clasp your hands together in front of you and round your shoulders, pushing your hands forward. Feel the stretch in your upper back. Hold for 15-30 seconds."
                  }
                ],
                exercises: [
                  {
                    name: "Deep Breathing",
                    description: "Practice deep breathing exercises to gently expand the chest and maintain mobility in the rib cage."
                  },
                  {
                    name: "Shoulder Blade Squeeze",
                    description: "Sit or stand with your arms at your sides. Squeeze your shoulder blades together and hold for a few seconds. Repeat 10-15 times."
                  },
                  {
                    name: "Gentle Upper Body Movement",
                    description: "Engage in gentle upper body movements, like arm circles or shoulder shrugs, to maintain mobility without straining the chest area."
                  }
                ]
              },
              {
                title: "Muscle Cramps",
                symptoms: "Sudden, involuntary contractions that occur in various muscles. These often painful cramps can cause muscle soreness.",
                stretches: [
                  {
                    name: "Calf Stretch",
                    description: "Stand facing a wall with one foot behind you, heel down. Lean forward, feeling a stretch in your calf. Hold for 30 seconds, then switch legs."
                  },
                  {
                    name: "Hamstring Stretch",
                    description: "Sit on the ground with one leg extended. Lean forward gently, reaching towards your toes. Hold for 30 seconds, then switch legs."
                  },
                  {
                    name: "Quadriceps Stretch",
                    description: "Stand and hold your ankle, pulling your foot towards your buttocks. Keep your knees together and hold the stretch for 30 seconds. Repeat with the other leg."
                  }
                ],
                exercises: [
                  {
                    name: "Toe Raises",
                    description: "Stand with your feet hip-width apart. Raise up onto your toes, then slowly lower back down. Repeat 10-15 times."
                  },
                  {
                    name: "Leg Extensions",
                    description: "Sit on a chair with your feet flat on the ground. Extend one leg out in front of you, then lower it back down. Repeat 10-15 times, then switch legs."
                  },
                  {
                    name: "Light Walking",
                    description: "Engage in light walking to increase circulation and reduce the likelihood of cramps."
                  }
                ]
              },
              
              
              
              
              
          
          
      ];
      
      // Continue to add other injuries in the same format
      
      
      
  
      const filteredInjuries = injuries.filter(injury => 
        injury.title.toLowerCase().includes(searchTerm.toLowerCase()),
        
    );

   

    const pageUrl = encodeURIComponent(window.location.href);
    const shareMessage = encodeURIComponent("Check out this information on healing injuries!");
  
    return (
      <PageContainer>
        <SectionTitle>Below is a compilation of injuries, symptoms and general advice on how to heal them, however we strongly advise seeking medical advice for serious injuries</SectionTitle>
        
        <SearchBarContainer>
          <SearchInput 
            type="text" 
            placeholder="Search injuries..." 
            onChange={handleSearchChange} 
            value={searchTerm}
          />
        </SearchBarContainer>
        
        {filteredInjuries.map((injury, index) => (
          <InjuryContainer key={index}>
            <InjuryTitle>{injury.title}</InjuryTitle>
            <InjurySymptons>{injury.symptoms}</InjurySymptons>
            
            <SubTitle>Stretches:</SubTitle>
            <List>
              {injury.stretches.map((stretch, sIndex) => (
                <ListItem key={sIndex}>
                  <strong>{stretch.name}:</strong> {stretch.description}
                </ListItem>
              ))}
            </List>

            <SubTitle>Exercises:</SubTitle>
            <List>
              {injury.exercises.map((exercise, eIndex) => (
                <ListItem key={eIndex}>
                  <strong>{exercise.name}:</strong> {exercise.description}
                </ListItem>
              ))}
            </List>
          </InjuryContainer>
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
      </PageContainer>
    );
  }