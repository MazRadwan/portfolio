import React from "react";
import styles from "./WebModalContent.module.css";
import artPortfolioImg from "../../assets/web-modal-art.png";
import wildlifeImg from "../../assets/web-modal-lion.png";
import fastFoodImg from "../../assets/web-modal-food.png";

const WebModalContent = ({ close }) => {
  const projects = [
    {
      name: "Art Portfolio",
      img: artPortfolioImg,
      link: "https://mazradwan.github.io/art-porfolio/",
    },
    {
      name: "Wildlife Site",
      img: wildlifeImg,
      link: "https://mazradwan.github.io/LionEmpire/",
    },
    {
      name: "Fast Food Site",
      img: fastFoodImg,
      link: "https://mazradwan.github.io/GaryBlue/",
    },
  ];

  return (
    <div className={styles.modalContent}>
      <div className={styles.headerRow}>
        <h2 className={styles.modalTitle}>WEB DESIGN</h2>
        <button className={styles.closeButton} onClick={close}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className={styles.imageRow}>
        {projects.map((project) => (
          <div key={project.name} className={styles.imageBox}>
            <img src={project.img} alt={project.name} />
            <div className={styles.imageOverlay}>
              <h3 className={styles.imageTitle}>{project.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonRow}>
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            className={styles.websiteButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            VISIT WEBSITE
          </a>
        ))}
      </div>
    </div>
  );
};

export default WebModalContent;
