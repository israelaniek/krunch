import React from "react";
import AboutUs from "../Components/AboutUsSection";
import AwesomeTeamSection from "../Components/AwesomeTeamSection";
import DownloadNowSection from "../Components/DownloadNowSection";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import PortfolioSection from "../Components/PortfolioSection";
import Services from "../Components/Services";
// import TestimonialSection from "../Components/TestimonialSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <PortfolioSection />
      {/* <TestimonialSection /> */}
      <Services />
      <AwesomeTeamSection />
      <DownloadNowSection />
    </>
  );
};

export default HomePage;
