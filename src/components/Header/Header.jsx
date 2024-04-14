// Header.jsx
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MAZ RADWAN</div>
      <nav className={styles.navLinks}>
        {/* Placeholder anchor tags */}
        <a href="#projects" className={styles.navLink}>
          PROJECTS
        </a>
        <a href="#contact" className={styles.navLink}>
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default Header;
