import { React, useState, useEffect } from "react";
import { LineBorder } from "../LineBorder";
import quotes from "./quotes";
import {
  Carousel,
  CarouselItem,
  Inner,
  TestimonialContainer,
  TestimonialHeader,
} from "./TestimonialElements";

export const TestimonialItem = ({ children, width }) => {
  return <CarouselItem style={{ width: width }}>{children}</CarouselItem>;
};

const TestimonialSection = ({ children }) => {
  return (
    <Carousel>
      <Inner>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </Inner>
    </Carousel>
  );
};

export default TestimonialSection;
