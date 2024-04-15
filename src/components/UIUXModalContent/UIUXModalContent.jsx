import React from "react";
import styles from "./UIUXModalContent.module.css";
import googleNestImg from "../../assets/uiux-modal-nest.png"; // Replace with the actual path to your image
import eCommerceImg from "../../assets/uiux-modal-SS.png"; // Replace with the actual path to your image

const UIUXModalContent = () => {
  const projects = [
    {
      name: "Google Nest UI",
      img: googleNestImg,
    },
    {
      name: "E-Commerce UI",
      img: eCommerceImg,
    },
  ];

  return (
    <div className={styles.modalContent}>
      <div className={styles.headerRow}>
        <h2 className={styles.modalTitle}>UI/UX</h2>
        <button className={styles.closeButton}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className={styles.projectRow}>
        {projects.map((project) => (
          <div key={project.name} className={styles.projectBox}>
            <img src={project.img} alt={project.name} />
            <div className={styles.projectOverlay}>
              <h3 className={styles.projectTitle}>{project.name}</h3>
            </div>
            <button className={styles.previewButton}>Preview</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UIUXModalContent;
