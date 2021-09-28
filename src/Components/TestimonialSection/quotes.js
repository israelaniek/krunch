import React from "react";
import Carousel, { TestimonialItem } from ".";
import { Quotes } from "./TestimonialElements";

const quotes = () => {
  return (
    <Quotes>
      <Carousel>
        <TestimonialItem>Item 1</TestimonialItem>
        <TestimonialItem>Item 2</TestimonialItem>
        <TestimonialItem>Item 3</TestimonialItem>
      </Carousel>
    </Quotes>
  );
};

export default quotes;
