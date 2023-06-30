import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const styles = {
  navContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "200px",
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
  },
  logo: {
    position: "absolute",
    left: "10px",
    height: "150px",
    borderRadius: "50%",
    animation: "rotation 60s infinite linear"
  }
};

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul style={styles.ul}>
          <li className="mx-1">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="mx-1">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>Logout</a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul style={styles.ul}>
          <li className="mx-1">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="mx-1">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header style={styles.navContainer}>
      <img src={logo} alt="My logo" style={styles.logo}></img>
      <div style={styles.titleContainer}>
        <h1>
          <Link to="/">
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
