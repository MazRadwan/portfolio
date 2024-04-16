import React from "react";
import styles from "./ReactModal.module.css"; // Ensure the CSS module file path is correct
import videoSource from "../../assets/react-demo.mp4"; // Update the path to your video file

// Assume the onClose prop is a function passed down from the parent component
const ReactModal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>REACT</h2>
          <i
            className={`${styles.closeIcon} fas fa-times`}
            onClick={onClose}
          ></i>
        </div>
        <div className={styles.videoContainer}>
          <video className={styles.videoPlayer} controls>
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
        <div className={styles.footer}>
          <p className={styles.footerText}>E-COMMERCE SITE</p>
        </div>
      </div>
    </div>
  );
};

export default ReactModal;
