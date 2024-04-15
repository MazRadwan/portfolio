import React from "react";
import styles from "./UIUXModalContent.module.css";
import googleNestImg from "../../assets/uiux-modal-nest.png";
import eCommerceImg from "../../assets/uiux-modal-SS.png";

const UIUXModalContent = ({ close }) => {
  const projects = [
    {
      name: "Google Nest UI",
      img: googleNestImg,
      link: "https://www.figma.com/proto/xosd00t21IGoxPhEkRhMFE/Nest-2024?page-id=0%3A1&type=design&node-id=1-2&viewport=454%2C141%2C0.45&t=fmWXfUsaAyJUjOgI-1&scaling=min-zoom&starting-point-node-id=1%3A2&mode=design", // Add your actual link here
    },
    {
      name: "E-Commerce UI",
      img: eCommerceImg,
      link: "https://www.figma.com/proto/xiZ8Zig40XblAKdCTw3xK9/SteelandStubbleSprint?page-id=0%3A1&type=design&node-id=1-2&viewport=2442%2C-2398%2C0.5&t=RyIOA3ItLfF1FvjK-1&scaling=min-zoom&starting-point-node-id=1%3A2&mode=design", // Add your actual link here
    },
  ];

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.headerRow}>
        <h2 className={styles.modalTitle}>UI/UX</h2>
        <button className={styles.closeButton} onClick={close}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className={styles.projectRow}>
        {projects.map((project, index) => (
          <div key={project.name} className={styles.projectBox}>
            <img
              src={project.img}
              alt={project.name}
              className={styles.projectImage}
            />
            <div className={styles.projectOverlay}>
              <h3 className={styles.projectTitle}>{project.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonRow}>
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            className={styles.previewButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
          </a>
        ))}
      </div>
    </div>
  );
};

export default UIUXModalContent;
