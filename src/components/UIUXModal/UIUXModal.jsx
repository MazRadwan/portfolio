import React, { useEffect, useRef } from "react";
import styles from "./UIUXModal.module.css";
import UIUXModalContent from "../UIUXModalContent/UIUXModalContent"; // Ensure this is the correct path

const UIUXModal = ({ close, isOpen }) => {
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
      <div
        className={styles.modalContent}
        ref={modalRef}
        style={{ transform: "translateX(0)" }}
      >
        <UIUXModalContent close={close} />
      </div>
    </div>
  );
};

export default UIUXModal;
