// src/components/HeroSlider/HeroSlider.jsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./HeroSlider.module.css";
import firstImage from "../../assets/slider-art.png";
import secondImage from "../../assets/slider-food.png";
import thirdImage from "../../assets/slider-lion.png";
import fourthImage from "../../assets/slider-ss.png";

const imageUrls = [firstImage, secondImage, thirdImage, fourthImage];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  // Preload images
  useEffect(() => {
    imageUrls.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  // Slide transition effect
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % imageUrls.length);
    }, 2000);

    // Cleanup on component unmount
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{
              backgroundImage: `url(${imageUrl})`,
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
