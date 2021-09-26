import { React, useState, useEffect } from "react";
import { LineBorder } from "../LineBorder";
import quotes from "./quotes";
import { TestimonialContainer, TestimonialHeader } from "./TestimonialElements";

const TestimonialSection = () => {
  const quotes = [
    {
      0: {
        client: "khe",
        quote: "awesome",
      },
      1: {
        client: "khe",
        quote: "awesome",
      },
      2: {
        client: "khe",
        quote: "awesome",
      },
    },
  ];

  const [quoteData, getQuoteData] = useState(quotes);
  const [current, setCurrent] = useState(0);
  const [quote, getQuote] = useState(quoteData[current]);

  useEffect(() => getQuote(quoteData[current]), [current, quote]);

  const nextQuote = () => {
    current === quoteData.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  const prevQuote = () => {
    current = 0 ? setCurrent(quoteData.length - 1) : setCurrent(current - 1);
  };
  console.log(current)

  const dotPicksQuote = (e) => setCurrent(Number(e.target.id))

  return (
    <TestimonialContainer>
      <TestimonialHeader>Testimonials</TestimonialHeader>
      <LineBorder isWhite={true} />
      
    </TestimonialContainer>
  );
};

export default TestimonialSection;
