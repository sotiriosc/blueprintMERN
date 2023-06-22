import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Auth from '../../utils/auth';
import LoginSignup from '../LogInSignUp/';

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav>
      <div className="nav-item">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-item">
        <Link to="/products">Products</Link>
      </div>
      <div className="nav-item">
        <Link to="/blogs">Blogs</Link>
      </div>
      {Auth.loggedIn() ? (
  <div className="nav-item">
    <a href="/" onClick={logout}>
      Logout
    </a>
  </div>
) : (
  <>
    <div className="nav-item" onClick={() => setShowModal(true)}>
      Login/Signup
    </div>
    {/* <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} aria-labelledby='signup-modal'>
      <Modal.Header closeButton>
        <Modal.Title id='signup-modal'>Login/Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginSignup />
      </Modal.Body>
    </Modal> */}
  </>
)}
    </nav>
    
  );
};

export default Nav;
