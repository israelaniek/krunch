import React from "react";
import { Button } from "../Button";
import {
  AngleDown,
  ArrowWrapper,
  ContentWrapper,
  HeroBtnWrapper,
  HeroContainer,
  HeroHeading,
  HeroParagraph,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <ContentWrapper>
        <HeroHeading>Clean and Graphical Template</HeroHeading>
        <HeroParagraph>
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Now
          that a lot of laughter lay in sad life <br /> The course of the film,
          my man who cartoon adorns, sometimes no pain eros, so that he was
          comfortable with the free life.{" "}
        </HeroParagraph>
        <HeroBtnWrapper>
          <Button isTransparent={false}>Download now</Button>
          <Button isTransparent={true}>View Features</Button>
        </HeroBtnWrapper>
      </ContentWrapper>
      <ArrowWrapper
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
      >
        <AngleDown />
      </ArrowWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
