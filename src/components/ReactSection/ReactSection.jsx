import React from "react";
import styles from "./ReactSection.module.css";
import logoImage from "../../assets/logo-react.png";

const ReactSection = ({ onOpenModal }) => {
  console.log("onOpenModal", onOpenModal);

  const handleClick = () => {
    console.log("Button clicked");
    if (typeof onOpenModal !== "function") {
      console.error("onOpenModal is not a function", onOpenModal);
    } else {
      onOpenModal();
    }
  };

  return (
    <div className={styles.reactSection}>
      <div className={styles.logoContainer}>
        <img src={logoImage} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.reactButton} onClick={handleClick}>
          View Project
        </button>
      </div>
    </div>
  );
};

export default ReactSection;
