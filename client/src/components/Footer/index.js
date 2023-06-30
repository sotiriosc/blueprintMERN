import React from "react";

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px", // adjust this value as needed
    backgroundColor: "#333", // adjust this value as needed
    color: "#fff", // adjust this value as needed
  },
  paragraph: {
    margin: 0,
    padding: "10px",
  }
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.paragraph}>
        &copy; 2023 My Blog. All rights reserved. Created, written and produced by Sotirios Chortogiannos
      </p>
    </footer>
  );
};

export default Footer;
