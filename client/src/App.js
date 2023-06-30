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
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/SignUp.js';
import Blogs from './pages/Blogs';
import Blog1 from './pages/Blog1';
import Shop from './pages/Shop';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import './App.css';
import backgroundImage from './assets/blueprint.png'; 

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
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
    backgroundImage: `url(${backgroundImage})`,
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
