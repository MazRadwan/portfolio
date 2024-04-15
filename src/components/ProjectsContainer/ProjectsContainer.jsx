import React, { useState } from "react";
import styles from "./ProjectsContainer.module.css";
import WebDesignBox from "../WebDesignBox/WebDesignBox";
import UIUXBox from "../UIUXBox/UIUXBox";

const ProjectsContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      className={`${styles.projectsContainer} ${
        isModalOpen ? styles.disableHover : ""
      }`}
    >
      <WebDesignBox onModalToggle={handleModalToggle} />
      <UIUXBox />
      {/* ... any other boxes or content ... */}
    </div>
  );
};

export default ProjectsContainer;
