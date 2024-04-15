import React, { useEffect, useRef } from "react";
import styles from "./WebModal.module.css";
import WebModalContent from "../WebModalContent/WebModalContent"; // Make sure the path is correct

const WebModal = ({ close, isOpen }) => {
  const modalRef = useRef();

  // Close on click outside of modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [close]);

  if (!isOpen) return null; // Only render if isOpen is true

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.active : ""}`}>
      <div className={styles.modalContent} ref={modalRef}>
        <WebModalContent close={close} />
      </div>
    </div>
  );
};

export default WebModal;
