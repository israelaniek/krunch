import React from "react";
import { LineBorder } from "../LineBorder";
import {
  ImageWrapper,
  ImgDescription,
  PortfolioContainer,
  PortfolioHeading,
  PortfolioSubheading,
  PortfolioWrapper,
  Text,
} from "./PortfolioElement";
import { Button } from "../Button";

const PortfolioSection = () => {
  return (
    <PortfolioContainer id='portfolio'>
      <PortfolioHeading>Portfolio</PortfolioHeading>
      <PortfolioSubheading>
        An eye for detail makes our work beautiful
      </PortfolioSubheading>
      <LineBorder />
      <PortfolioWrapper>
        <ImageWrapper>
          <img
            src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c2fc413566a09e01f711c4_work-9-p-500x334.jpeg"
            alt="stair"
            width="100%"
          />
          <ImgDescription>Graphic design</ImgDescription>
        </ImageWrapper>
        <ImageWrapper>
          <img
            src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009bf69ff41454c6fe63_work-2-p-500x334.jpeg"
            alt="stair"
            width="100%"
          />
          <ImgDescription>Print Design</ImgDescription>
        </ImageWrapper>
        <ImageWrapper>
          <img
            src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009b617cac9b64365383_work-1-p-500x334.jpeg"
            alt="stair"
            width="100%"
          />
          <ImgDescription>Mobile Apps</ImgDescription>
        </ImageWrapper>
        <ImageWrapper>
          <img
            src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009b52f6a18001ef67c2_work-3-p-500x334.jpeg"
            alt="stair"
            width="100%"
          />
          <ImgDescription>3D Drawing</ImgDescription>
        </ImageWrapper>
        <ImageWrapper>
          <img
            src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009b52f6a18001ef67c3_work-5-p-500x334.jpeg"
            alt="stair"
            width="100%"
          />
          <ImgDescription>Interior Design</ImgDescription>
        </ImageWrapper>
        <ImageWrapper>
          <img
            src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009b617cac9b64365384_work-4-p-500x334.jpeg"
            alt="stair"
            width="100%"
          />
          <ImgDescription>Web Design</ImgDescription>
        </ImageWrapper>
        <ImageWrapper>
          <img
            src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009c739f273554ad015b_work-7-p-500x334.jpeg"
            alt="stair"
            width="100%"
          />
          <ImgDescription>Graphic Design</ImgDescription>
        </ImageWrapper>
        <ImageWrapper>
          <img
            src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3009c617cac9b64365385_work-8-p-500x334.jpeg"
            alt="stair"
            width="100%"
          />
          <ImgDescription>Home Design</ImgDescription>
        </ImageWrapper>
      </PortfolioWrapper>
      <Text>Have a Project in Mind?</Text>
      <Button isTransparent={true} style={{color:'#000'}}>
        Contact Now 
      </Button>
    </PortfolioContainer>
  );
};

export default PortfolioSection;
