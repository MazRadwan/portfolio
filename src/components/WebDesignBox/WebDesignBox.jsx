import React, { useState } from "react";
import styles from "./WebDesignBox.module.css";
import image from "../../assets/flaticon-web.png";
import WebModal from "../WebModal/WebModal";

const WebDesignBox = ({ onModalToggle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const backgroundStyle = {
    backgroundImage: `url(${image})`,
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      className={`${styles.webDesignBox} ${
        isModalOpen ? styles.disableHover : ""
      }`}
      style={backgroundStyle}
    >
      <div className={styles.overlay}>
        <h2>WEB DESIGN</h2>
        <button
          className={styles.button}
          onClick={() => {
            toggleModal();
            onModalToggle();
          }}
        >
          VIEW PROJECTS
        </button>
      </div>
      {isModalOpen && <WebModal close={toggleModal} isOpen={isModalOpen} />}
    </div>
  );
};

export default WebDesignBox;
