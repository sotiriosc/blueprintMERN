import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/SignUp.js';
import ContactForm from './pages/ContactForm';
import Blogs from './pages/Blogs';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import Blog4 from './pages/Blog4';
import Blog5 from './pages/Blog5';
import Blog6 from './pages/Blog6';
import Blog7 from './pages/Blog7';
import Blog8 from './pages/Blog8';
import Blog9 from './pages/Blog9';
import Blog10 from './pages/Blog10';
import Blog11 from './pages/Blog11';
import Blog12 from './pages/Blog12';
import Blog13 from './pages/Blog13';
import Exercises from './pages/ExerciseLanding';
import SettingUpWorkout from './pages/SettingUpWorkoutRoutine';
import ArmExercise from './pages/exercises/ArmExercise'; 
import BackExercise from './pages/exercises/BackExercise';
import ChestExercise from './pages/exercises/ChestExercise';
import CoreExercise from './pages/exercises/CoreExercise';
import LegExercise from './pages/exercises/LegExercise';
import ShoulderExercise from './pages/exercises/ShoulderExercise';
import NutritionLandingPage from './pages/NutritionLanding';
import CreatingDietPlan from './pages/nutrition/CreatingDietPlan'
import StretchingLandingPage from './pages/StretchingLanding';
import MentalHealthLandingPage from './pages/MentalHealthLanding';
import HealingLandingPage from './pages/HealingLanding';
import Shop from './pages/Shop';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import './App.css';



const httpLink = createHttpLink({
  uri: process.env.NODE_ENV === 'production' 
    ? 'https://balancedblueprintblog-087c8e263340.herokuapp.com/graphql'
    : 'http://localhost:3001/graphql',
});



const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',  // Ensures the container takes up the full height
    backgroundImage: `url('https://imgur.com/RXBycQY.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    maxWidth: '100vw',
  };

  return (
    <div style={styles} className='backgroundImage'>
    <ApolloProvider client={client}>
      <Router>
      <div style={{ flex: 1 }}>
          <StoreProvider>
            <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
               <Route 
                path="/shop"
                element={<Shop />} 
              />
              <Route
                path="/exercises"
                element={<Exercises />} 
              />
              <Route
                path="/armExercise"
                element={<ArmExercise />}
              />
              <Route
                path="/settingUpWorkout"
                element={<SettingUpWorkout />}  
              />
              <Route
                path="/backExercise"
                element={<BackExercise />}
              />
              <Route
                path="/ChestExercise"
                element={<ChestExercise />}
              />
              <Route
                path="/CoreExercise"
                element={<CoreExercise />}
              />
              <Route
                path="/LegExercise"
                element={<LegExercise />}
              />
              <Route
                path="/ShoulderExercise"
                element={<ShoulderExercise />}
              />
              <Route
                path="/nutrition"
                element={<NutritionLandingPage />}
              />
              <Route
                path="/CreatingDietPlan"
                element={<CreatingDietPlan />}
              />
              <Route
                path="/stretching"
                element={<StretchingLandingPage />}
              />
              <Route
                path="/mentalhealth"
                element={<MentalHealthLandingPage />}
              />
              <Route
                path="/healing"
                element={<HealingLandingPage />}
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route
                path="/blogs"
                element={<Blogs />}
              />
              <Route
                path="/blog1"
                element={<Blog1 />}
              />
              <Route
                path="/blog2"
                element={<Blog2 />}
              />
              <Route
                path="/blog3"
                element={<Blog3 />} 
              />
              <Route
                path="/blog4"
                element={<Blog4 />}
              />
              <Route
                path="/blog5"
                element={<Blog5 />}
              />
              <Route
                path="/blog6"
                element={<Blog6 />}
              />
              <Route
                path="/blog7"
                element={<Blog7 />}
              />
              <Route
                path="/blog8"
                element={<Blog8 />}
              />
              <Route
                path="/blog9"
                element={<Blog9 />}
              />
              <Route
                path="/blog10"
                element={<Blog10 />}
              />
              <Route
                path="/blog11"
                element={<Blog11 />}
              />
              <Route
                path="/blog12"
                element={<Blog12 />}
              />
              <Route
                path="/blog13"
                element={<Blog13 />}
              />
              <Route 
                path="/success" 
                element={<Success />} 
              />
              <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              />
              <Route 
                path="/products/:id" 
                element={<Detail />} 
              />
              <Route
                path="*" 
                element={<NoMatch />} 
              />
              <Route
                path="/faq"
                element={<FAQ />}
              />
              <Route
                path="/contact"
                element={<ContactForm />}
              />
            </Routes>
            
            
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
    <Footer />
    </div>
    
  );
}

export default App;
