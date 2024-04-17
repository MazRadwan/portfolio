import React from "react";
import styles from "./Footer.module.css"; // Make sure you have created this CSS module file

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerText}>
        <i className="far fa-copyright"></i> 2024 Maz Radwan. All Rights
        Reserved.
      </span>
    </footer>
  );
};

export default Footer;
