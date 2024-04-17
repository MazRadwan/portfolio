import React from "react";
import styles from "./Contact.module.css"; // Make sure to create this CSS module

const Contact = () => {
  return (
    <div id="contact">
      <div className={styles.contactContainer}>
        <div className={styles.contactBox}>
          <button
            onClick={() => (window.location = "mailto:maz.radwan@keyin.com")}
            className={styles.contactButton}
          >
            Email Maz
          </button>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinIcon}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className={styles.emptySpace}></div>
      </div>
    </div>
  );
};

export default Contact;
