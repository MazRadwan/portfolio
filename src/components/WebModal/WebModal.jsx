import React, { useEffect, useRef } from "react";
import styles from "./WebModal.module.css";
import WebModalContent from "../WebModalContent/WebModalContent";

const WebModal = ({ close, isOpen }) => {
  const modalRef = useRef();

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

  if (!isOpen) return null;

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.active : ""}`}>
      <div className={styles.modalContent} ref={modalRef}>
        <WebModalContent close={close} />
      </div>
    </div>
  );
};

export default WebModal;
