// animationVariants.js
// animationVariants.js in src/utils/

export const slideInFromLeftVariants = {
  offscreen: {
    x: -150, // Start from further left
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

export const slideInFromRightVariants = {
  offscreen: {
    x: 150, // Start from further right
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};
