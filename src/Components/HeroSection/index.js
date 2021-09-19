import React from "react";
import { Button } from "../Button";
import { AngleDown, HeroBtnWrapper, HeroContainer, HeroHeading, HeroParagraph } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroHeading>Clean and Graphical Template</HeroHeading>
      <HeroParagraph>
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Now that
        a lot of laughter lay in sad life <br /> The course of the film, my man who
        cartoon adorns, sometimes no pain eros, so that he was comfortable with
        the free life.{" "}
      </HeroParagraph>
      <HeroBtnWrapper>
        <Button isTransparent={false}>Download now</Button>
        <Button isTransparent={true}>View Features</Button>
      </HeroBtnWrapper>
      <AngleDown />
    </HeroContainer>
  );
};

export default HeroSection;
