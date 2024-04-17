import React from "react";
import Header from "./components/Header/Header";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import TechScroll from "./components/TechScroll/TechScroll";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ProjectsContainer from "./components/ProjectsContainer/ProjectsContainer";
import ReactCommonParent from "./components/ReactCommonParent/ReactCommonParent";
import ContactMe from "./components/ContactMe/ContactMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <ServiceSection />
      <TechScroll />
      <ProjectsSection />
      <ProjectsContainer />
      <ReactCommonParent />
      <ContactMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
