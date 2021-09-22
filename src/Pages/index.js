import React from "react";
import AboutUs from "../Components/AboutUsSection";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import PortfolioSection from "../Components/PortfolioSectoin";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <PortfolioSection/>
    </>
  );
};

export default HomePage;
