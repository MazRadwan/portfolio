import React, { useState } from "react";
import styles from "./ProjectsContainer.module.css";
import WebDesignBox from "../WebDesignBox/WebDesignBox";
import UIUXBox from "../UIUXBox/UIUXBox";
import WebModal from "../WebModal/WebModal";
import UIUXModal from "../UIUXModal/UIUXModal";

const ProjectsContainer = () => {
  const [isWebModalOpen, setIsWebModalOpen] = useState(false);
  const [isUIUXModalOpen, setIsUIUXModalOpen] = useState(false);

  const toggleWebModal = () => {
    setIsWebModalOpen(!isWebModalOpen);
  };

  const toggleUIUXModal = () => {
    setIsUIUXModalOpen(!isUIUXModalOpen);
  };

  return (
    <div
      className={`${styles.projectsContainer} ${
        isWebModalOpen || isUIUXModalOpen ? styles.disableHover : ""
      }`}
    >
      <WebDesignBox onModalToggle={toggleWebModal} />
      <UIUXBox onModalToggle={toggleUIUXModal} />
      {isWebModalOpen && (
        <WebModal isOpen={isWebModalOpen} close={toggleWebModal} />
      )}
      {isUIUXModalOpen && (
        <UIUXModal isOpen={isUIUXModalOpen} close={toggleUIUXModal} />
      )}
    </div>
  );
};

export default ProjectsContainer;
