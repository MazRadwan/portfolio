import React, { useState, useEffect, useRef } from "react";
import styles from "./ProjectsContainer.module.css";
import WebDesignBox from "../WebDesignBox/WebDesignBox";
import UIUXBox from "../UIUXBox/UIUXBox";
import WebModal from "../WebModal/WebModal";
import UIUXModal from "../UIUXModal/UIUXModal";

const ProjectsContainer = () => {
  const [isWebModalOpen, setIsWebModalOpen] = useState(false);
  const [isUIUXModalOpen, setIsUIUXModalOpen] = useState(false);
  const [isWebVisible, setWebVisible] = useState(false);
  const [isUIUXVisible, setUIUXVisible] = useState(false);

  const webDesignRef = useRef(null);
  const uiuxRef = useRef(null);

  const toggleWebModal = () => {
    setIsWebModalOpen(!isWebModalOpen);
  };

  const toggleUIUXModal = () => {
    setIsUIUXModalOpen(!isUIUXModalOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target, entry.isIntersecting);
          if (entry.target === webDesignRef.current) {
            setWebVisible(entry.isIntersecting);
          } else if (entry.target === uiuxRef.current) {
            setUIUXVisible(entry.isIntersecting);
          }
        });
      },
      {
        root: null, // viewport
        threshold: 0.5, // Adjust threshold based on when you want it to trigger
      }
    );

    if (webDesignRef.current) {
      observer.observe(webDesignRef.current);
    }
    if (uiuxRef.current) {
      observer.observe(uiuxRef.current);
    }

    return () => {
      // Cleanup the observer on component unmount
      if (webDesignRef.current) {
        observer.unobserve(webDesignRef.current);
      }
      if (uiuxRef.current) {
        observer.unobserve(uiuxRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${styles.projectsContainer} ${
        isWebModalOpen || isUIUXModalOpen ? styles.disableHover : ""
      }`}
    >
      <WebDesignBox
        onModalToggle={toggleWebModal}
        isVisible={isWebVisible}
        ref={webDesignRef}
      />
      <UIUXBox
        onModalToggle={toggleUIUXModal}
        isVisible={isUIUXVisible}
        ref={uiuxRef}
      />
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
