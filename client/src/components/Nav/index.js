import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "../AuthForm";
import Auth from "../../utils/auth";
import logo from "../../assets/logo.avif";
import "./style.css";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#193875", 
  },
  navContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#193875", 
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#193875", 
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#193875", 
  },
  logo: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    animation: "rotation 60s infinite linear",
    marginRight: "20px", 
  },
  title: {
    fontSize: "2.5em",
    textAlign: "center",
    margin: 0, 
    backgroundColor: "#193875", 
    
  },
  navBar: {
    borderTop: "1px solid #ddd", 
    paddingTop: "10px",
    width: "100%",
    backgroundColor: "#193875", 
  },
  ul: {
    display: "flex",
    justifyContent: "center",
    padding: 0,
    fontSize: "1.3em",
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  linkHover: {
    color: '#dd44f1',
    textDecoration: 'none',
  },
  menuItem: {
    marginRight: '5px',
    marginLeft: '5px',
  },
};
function DropdownMenu({hoverIndex, setHoverIndex}) {
  return (
    <div 
      className="dropdown-menu" 
      onMouseEnter={() => setHoverIndex(8)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      <Link to="/exercises" className="dropdown-item">
        Exercises
      </Link>
      <Link to="/nutrition" className="dropdown-item">
        Nutrition
      </Link>
      <Link to="/stretching" className="dropdown-item">
        Stretching
      </Link>
      <Link to="/mentalHealth" className="dropdown-item">
        Mental Health
      </Link>
      <Link to="/healing" className="dropdown-item">
        Healing
      </Link>
    </div>
  );
}


function Nav() {
  const [hoverIndex, setHoverIndex] = useState(null);
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
        <li className="dropdown mx-1" 
    onMouseEnter={() => setHoverIndex(8)}
    onMouseLeave={() => setHoverIndex(null)}
>
  <div style={{...styles.menuItem, ...(hoverIndex === 8 ? styles.linkHover : styles.link)}}>
    Health Directory
  </div>
  {hoverIndex === 8 && <DropdownMenu hoverIndex={hoverIndex} setHoverIndex={setHoverIndex}/>}
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
        <li className="dropdown mx-1" 
    onMouseEnter={() => setHoverIndex(8)}
    onMouseLeave={() => setHoverIndex(null)}
>
  <div style={{...styles.menuItem, ...(hoverIndex === 8 ? styles.linkHover : styles.link)}}>
    Health Directory
  </div>
  {hoverIndex === 8 && <DropdownMenu hoverIndex={hoverIndex} setHoverIndex={setHoverIndex}/>}
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
    <div style={styles.container}>
      <nav style={styles.navBar}>
        <div style={styles.navContainer}>
          <div style={styles.logoContainer}>
            <img src={logo} alt="My logo" style={styles.logo}></img>
          </div>
          <div style={styles.titleContainer}>
            <header>
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
            </header>
          </div>
        </div>
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
    </div>
  );
}

export default Nav;