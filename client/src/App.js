import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Nav';
import HomePage from './pages/Home';
import BlogPage from './pages/Blog';
import BlogList from './pages/BlogList'; 
import ProductPage from './pages/ProductsPage';
import Product from './pages/Product'
// import AdminPage from './pages/AdminPage';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogList />} />  
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<Product />} />
        {/* <Route path="/admin" element={<AdminPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
