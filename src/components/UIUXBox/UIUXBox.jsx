import React, { forwardRef } from "react";
import styles from "./UIUXBox.module.css";
import uiuxImage from "../../assets/flaticon-uiux.png";
import { slideInFromRightVariants } from "../../utils/animationvariants";
import { motion } from "framer-motion";

const UIUXBox = forwardRef(({ onModalToggle, isVisible }, ref) => {
  return (
    <motion.div
      ref={ref} // Assign ref here
      className={styles.uiuxBox}
      style={{ backgroundImage: `url(${uiuxImage})` }}
      initial="offscreen"
      animate={isVisible ? "onscreen" : "offscreen"}
      variants={slideInFromRightVariants}
    >
      <div className={styles.overlay}>
        <h2>UI/UX DESIGN</h2>
        <button className={styles.button} onClick={onModalToggle}>
          VIEW PROJECTS
        </button>
      </div>
    </motion.div>
  );
});

export default UIUXBox;
