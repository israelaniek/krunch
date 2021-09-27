import React from "react";
import AboutUs from "../Components/AboutUsSection";
import AwesomeTeamSection from "../Components/AwesomeTeamSection";
import ContactUsSection from "../Components/ContactUsSection";
import DownloadNowSection from "../Components/DownloadNowSection";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import LatestNewsSection from "../Components/LatestNewsSection";
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
      <LatestNewsSection />
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default HomePage;
