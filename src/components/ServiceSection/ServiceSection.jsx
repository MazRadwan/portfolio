import React from "react";
import styles from "./ServiceSection.module.css"; // The name of your CSS module file

const ServiceSection = () => {
  return (
    <div className={styles.serviceSection}>
      <h2 className={`${styles.serviceItem} ${styles.slideInFromLeft}`}>
        Web Design
      </h2>
      <h2 className={`${styles.serviceItem} ${styles.slideInFromRight}`}>
        Software Development
      </h2>
      <h2 className={`${styles.serviceItem} ${styles.slideInFromLeft}`}>
        UI/UX
      </h2>
    </div>
  );
};

export default ServiceSection;
