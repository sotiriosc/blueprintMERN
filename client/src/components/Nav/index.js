import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "../AuthForm";
import Auth from "../../utils/auth";
import logo from "../../assets/logo.avif";
import "./style.css";

const styles = {
   navContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "200px",
    padding: "10px",
  },
  logoAndTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
 
  logo: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    animation: "rotation 60s infinite linear",
    marginTop: "15px",
    marginRight: "15px",
    justifyContent: "flex-start",
   
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ul: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-around",
    padding: 0,
    fontSize: "1.3em",
    position: "relative",
 
  },
  title: {
    fontSize: "2.5em",
   
  },
  link: {
    color: 'white', // Initial color of the link, change as needed
    textDecoration: 'none',
  },
  linkHover: {
    color: '#dd44f1', // Color of the link when hovered
    textDecoration: 'none',
  },
  menuItem: {
    
    marginRight: '5px', // adjust as needed
    marginLeft: '5px',  // adjust as needed
  },

};


function Nav() {
  const [hoverIndex, setHoverIndex] = React.useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
      <ul className="ul">
        <li className="mx-1">
          <Link
            to="/blogs"
            style={{...styles.menuItem, ...(hoverIndex === 1 ? styles.linkHover : styles.link)}}
            onMouseEnter={() => setHoverIndex(1)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Blogs
          </Link>
        </li>
        <li className="mx-1">
          <Link
            to="/shop"
            style={{...styles.menuItem, ...(hoverIndex === 2 ? styles.linkHover : styles.link)}}
            onMouseEnter={() => setHoverIndex(2)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Shop
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/orderHistory"
            style={{...styles.menuItem, ...(hoverIndex === 3 ? styles.linkHover : styles.link)}}
            onMouseEnter={() => setHoverIndex(3)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Order History
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/faq"
            style={{...styles.menuItem, ...(hoverIndex === 4 ? styles.linkHover : styles.link)}}
            onMouseEnter={() => setHoverIndex(4)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            FAQ
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/"
            style={{...styles.menuItem, ...(hoverIndex === 5 ? styles.linkHover : styles.link)}}
            onMouseEnter={() => setHoverIndex(5)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            About
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/contact"
            style={{...styles.menuItem, ...(hoverIndex === 6 ? styles.linkHover : styles.link)}}
            onMouseEnter={() => setHoverIndex(6)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Contact
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/"
            style={{...styles.menuItem, ...(hoverIndex === 7 ? styles.linkHover : styles.link)}}
            onMouseEnter={() => setHoverIndex(7)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => Auth.logout()}
          >
            Logout
          </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="ul">
          <li className="mx-1">
          <Link
            to="/blogs"
            style={{...styles.menuItem, ...(hoverIndex === 1 ? styles.linkHover : styles.link)}}
            onMouseEnter={() => setHoverIndex(1)}
             onMouseLeave={() => setHoverIndex(null)}
          >
            Blogs
          </Link>
        </li>
        <li className="mx-1">
          <Link
            to="/shop"
            style={{...styles.menuItem, ...(hoverIndex === 2 ? styles.linkHover : styles.link)}}
           onMouseEnter={() => setHoverIndex(2)}
           onMouseLeave={() => setHoverIndex(null)}
          >
            Shop
          </Link>
          </li>
          <button
          className="mx-1"
           style={{
          ...hoverIndex === 3 ? styles.linkHover : styles.link,
          background: 'none',
          margin: 'none',
          padding: 'none',
          fontWeight: 'bolder',}}
          onMouseEnter={() => setHoverIndex(3)}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={() => setShowLoginForm(!showLoginForm)}
          >
           Login
          </button>
          {/* <li className="mx-1">
          <Link
            to="/signup"
            style={hoverIndex === 3 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(3)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Signup
          </Link>
          </li> */}
          {/* <li className="mx-1">
          <Link
            to="/login"
            style={hoverIndex === 4 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(4)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Login
          </Link>
          </li> */}
          <li className="mx-1">
          <Link
            to="/faq"
            style={{...styles.menuItem, ...(hoverIndex === 4 ? styles.linkHover : styles.link)}}
           onMouseEnter={() => setHoverIndex(4)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            FAQ
          </Link>
          </li>
          
          <li className="mx-1">
          <Link
            to="/"
            style={{...styles.menuItem, ...(hoverIndex === 5 ? styles.linkHover : styles.link)}}
           onMouseEnter={() => setHoverIndex(5)}
           onMouseLeave={() => setHoverIndex(null)}
          >
            About
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/contact"
            style={{...styles.menuItem, ...(hoverIndex === 6 ? styles.linkHover : styles.link)}}
            onMouseEnter={() => setHoverIndex(6)}
           onMouseLeave={() => setHoverIndex(null)}
          >
            Contact
          </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header style={styles.navContainer}>
      <div style={styles.logoAndTitle}>
        <img src={logo} alt="My logo" style={styles.logo}></img>
        <h1 style={styles.title}>
          <Link 
            to="/"
            style={hoverIndex === 0 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(0)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Balanced Blueprint Blog
          </Link>
        </h1>
      </div>
      <nav>
        {showNavigation()}
      </nav>

      {/* Conditionally render the LoginForm modal if showLoginForm state is true */}
      {showLoginForm && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Login</p>
              <button
                className="delete"
                aria-label="close"
                onClick={() => setShowLoginForm(false)}
              ></button>
            </header>
            <section className="modal-card-body">
            <AuthForm handleClose={() => setShowLoginForm(false)} />
            </section>
            <footer className="modal-card-foot">
              <button className="button" onClick={() => setShowLoginForm(false)}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
