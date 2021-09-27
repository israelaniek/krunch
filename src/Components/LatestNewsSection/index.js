import React from "react";
import { Button } from "../Button";
import { LineBorder } from "../LineBorder";
import {
  ButtonContainer,
  LatestNewsCol1,
  LatestNewsCol2,
  LatestNewsCol3,
  LatestNewsContainer,
  LatestNewsHeading,
  LatestNewsSubHeading,
  LatestNewsWrapper,
  NewsDate,
  NewsDesc,
  NewsHeading,
  ReadMoreContainer,
  ReadMoreLink,
  RightArrow,
} from "./LatestNewsElements";

const LatestNewsSection = () => {
  return (
    <LatestNewsContainer>
      <LatestNewsHeading>Latest News</LatestNewsHeading>
      <LatestNewsSubHeading>
        Check out our latest news and activities
      </LatestNewsSubHeading>
      <LineBorder />
      <LatestNewsWrapper>
        <LatestNewsCol1>
          <img
            src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c32085b166809064187a9c_news-thumb-3-p-500x300.jpeg"
            alt="cam"
            width="100%"
          />
          <NewsHeading>Over time they fall into fatigue and pain</NewsHeading>
          <NewsDate>August 24, 2016</NewsDate>
          <NewsDesc>
            They are the exceptions the blinds yearn for, they don't see, they
            are the ones who abandon their responsibilities to the fault that is
            soothing the soul's hardships.
          </NewsDesc>
          <ReadMoreContainer>
            <ReadMoreLink>Read More</ReadMoreLink>
            <RightArrow />
          </ReadMoreContainer>
        </LatestNewsCol1>
        <LatestNewsCol2>
          <img
            src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3296d60b164041bc35522_news-thumb-2-p-500x300.jpeg"
            alt="fruit"
            width="100%"
          />
          <NewsHeading>This kind of time is hard work</NewsHeading>
          <NewsDate>August 20, 2016</NewsDate>
          <NewsDesc>
            The pain itself is important, but I give it to the pain of some
            great pain.
          </NewsDesc>
          <ReadMoreContainer>
            <ReadMoreLink>Read More</ReadMoreLink>
            <RightArrow />
          </ReadMoreContainer>
        </LatestNewsCol2>
        <LatestNewsCol3>
          <img
            src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c329d28f74bc0349ef7f33_news-thumb-1-p-500x300.jpeg"
            alt="hotel"
            width="100%"
          />
          <NewsHeading>Result from the distinction itself</NewsHeading>
          <NewsDate>August 18, 2016</NewsDate>
          <NewsDesc>
            Aenean commodo ligula eget dolor sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus.
          </NewsDesc>
          <ReadMoreContainer>
            <ReadMoreLink>Read More</ReadMoreLink>
            <RightArrow />
          </ReadMoreContainer>
        </LatestNewsCol3>
      </LatestNewsWrapper>
      <Button isTransparent={true} style={{ color: "#000", marginTop: "50px" }}>
        Read our Blog
      </Button>
    </LatestNewsContainer>
  );
};

export default LatestNewsSection;
