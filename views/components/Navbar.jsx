import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Clothing Store</h1>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>Home</li>
        <li style={styles.navItem}>Men</li>
        <li style={styles.navItem}>Women</li>
        <li style={styles.navItem}>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#333",
    color: "white",
  },
  logo: {
    fontSize: "1.8rem",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Navbar;
