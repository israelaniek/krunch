import React from "react";
import AboutUs from "../Components/AboutUsSection";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
    </>
  );
};

export default HomePage;
