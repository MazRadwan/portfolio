import React from "react";
import Header from "./components/Header/Header"; // Adjust the path as per your folder structure
import HeroSlider from "./components/HeroSlider/HeroSlider";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import TechScroll from "./components/TechScroll/TechScroll";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ProjectsContainer from "./components/ProjectsContainer/ProjectsContainer";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <ServiceSection />
      <TechScroll />
      <ProjectsSection />
      <ProjectsContainer />
    </div>
  );
};

export default App;
