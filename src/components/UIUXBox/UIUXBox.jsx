import React from "react";
import styles from "./UIUXBox.module.css";
import uiuxImage from "../../assets/flaticon-uiux.png";

const UIUXBox = ({ onModalToggle }) => {
  return (
    <div
      className={styles.uiuxBox}
      style={{ backgroundImage: `url(${uiuxImage})` }}
    >
      <div className={styles.overlay}>
        <h2>UI/UX DESIGN</h2>
        <button className={styles.button} onClick={onModalToggle}>
          VIEW PROJECTS
        </button>
      </div>
    </div>
  );
};

export default UIUXBox;
