import React, { useState, forwardRef } from "react";
import styles from "./WebDesignBox.module.css";
import image from "../../assets/flaticon-web.png";
import WebModal from "../WebModal/WebModal";
import { motion } from "framer-motion";
import { slideInFromLeftVariants } from "../../utils/animationvariants";

const WebDesignBox = forwardRef(({ onModalToggle, isVisible }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const backgroundStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <motion.div
      ref={ref} // Assign ref here
      className={`${styles.webDesignBox} ${
        isModalOpen ? styles.disableHover : ""
      }`}
      style={backgroundStyle}
      initial="offscreen"
      animate={isVisible ? "onscreen" : "offscreen"}
      variants={slideInFromLeftVariants}
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
    </motion.div>
  );
});

export default WebDesignBox;
