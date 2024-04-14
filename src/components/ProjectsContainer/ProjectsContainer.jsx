import React from "react";
import styles from "./ProjectsContainer.module.css";
import WebDesignBox from "../WebDesignBox/WebDesignBox";
import UIUXBox from "../UIUXBox/UIUXBox";

const ProjectsContainer = () => {
  return (
    <div className={styles.projectsContainer}>
      <WebDesignBox />
      <UIUXBox />
    </div>
  );
};

export default ProjectsContainer;
