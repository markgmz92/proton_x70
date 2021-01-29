import React from "react";
import { Link } from "react-router-dom";

import logo from "../../Assets/img/logo.png";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="Proton Logo" />
      </div>
      <div className={styles.navLinks}>
        <Link to="#">
          <h2>Features</h2>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="#">
          <h2>Variant Comparison</h2>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="#">
          <h2>Price & Specification</h2>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
