// TechScroll.jsx
import React from "react";
import styles from "./TechScroll.module.css";
import icon1 from "../../assets/logo-javascript.png";
import icon2 from "../../assets/logo-html5.png";
import icon3 from "../../assets/logo-css.png";
import icon4 from "../../assets/logo-react.png";
import icon5 from "../../assets/logo-python.png";
import icon6 from "../../assets/logo-figma.png";
import icon7 from "../../assets/logo-node.png";

const icons = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
];

const TechScroll = () => {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollContent}>
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Icon ${index + 1}`}
            className={styles.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default TechScroll;
