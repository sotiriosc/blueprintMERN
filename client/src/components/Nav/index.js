import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.avif";

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
};


function Nav() {
  const [hoverIndex, setHoverIndex] = React.useState(null);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
      <ul className="ul">
        <li className="mx-1">
          <Link
            to="/blogs"
            style={hoverIndex === 1 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(1)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Blogs
          </Link>
        </li>
        <li className="mx-1">
          <Link
            to="/shop"
            style={hoverIndex === 2 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(2)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Shop
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/orderHistory"
            style={hoverIndex === 3 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(3)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Order History
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/faq"
            style={hoverIndex === 4 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(4)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            FAQ
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/"
            style={hoverIndex === 5 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(5)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            About
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/contact"
            style={hoverIndex === 6 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(6)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Contact
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/"
            style={hoverIndex === 7 ? styles.linkHover : styles.link}
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
            style={hoverIndex === 1 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(1)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Blogs
          </Link>
        </li>
        <li className="mx-1">
          <Link
            to="/shop"
            style={hoverIndex === 2 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(2)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Shop
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/signup"
            style={hoverIndex === 3 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(3)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Signup
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/login"
            style={hoverIndex === 4 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(4)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Login
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/faq"
            style={hoverIndex === 5 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(5)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            FAQ
          </Link>
          </li>
          
          <li className="mx-1">
          <Link
            to="/"
            style={hoverIndex === 6 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(6)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            About
          </Link>
          </li>
          <li className="mx-1">
          <Link
            to="/contact"
            style={hoverIndex === 7 ? styles.linkHover : styles.link}
            onMouseEnter={() => setHoverIndex(7)}
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
  </header>
);
    
}

export default Nav;
