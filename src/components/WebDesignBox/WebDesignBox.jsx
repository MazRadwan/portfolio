import React from "react";
import styles from "./WebDesignBox.module.css";
import image from "../../assets/flaticon-web.png"; // Adjust the path as necessary

const WebDesignBox = () => {
  // Inline style for background image
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={styles.webDesignBox} style={backgroundStyle}>
      <div className={styles.overlay}>
        <h2>WEB DESIGN</h2>
        <button className={styles.button}>VIEW PROJECTS</button>
      </div>
    </div>
  );
};

export default WebDesignBox;
