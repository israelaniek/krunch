import React from "react";
import { LineBorder } from "../LineBorder";
import {
  AwesomeTeamCol1,
  AwesomeTeamCol2,
  AwesomeTeamCol3,
  AwesomeTeamCol4,
  AwesomeTeamContainer,
  AwesomeTeamHeading,
  AwesomeTeamImgWrapper,
  AwesomeTeamRow,
  AwesomeTeamSubHeading,
  AwesomeTeamWrapper,
  Facebook,
  FacebookLink,
  IconsWrapper,
  LinkedIn,
  MemberName,
  MemberPosition,
  Twitter,
} from "./AwesomeTeamElements";

const AwesomeTeamSection = () => {
  return (
    <AwesomeTeamContainer>
      <AwesomeTeamHeading>Awesome Team</AwesomeTeamHeading>
      <AwesomeTeamSubHeading>
        Setibulum rutrum quam vitae fringilla tincidunt
      </AwesomeTeamSubHeading>
      <LineBorder />
      <AwesomeTeamWrapper>
        <AwesomeTeamRow>
          <AwesomeTeamCol1>
            <AwesomeTeamImgWrapper>
              <img
                src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3174a617cac9b643685b5_team-1.jpg"
                alt="pic"
                width="100%"
              />
              <IconsWrapper>
                <a href="https://www.facebook.com" target="_blank">
                  <Facebook />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.linkedin.com" target="_blank" style={{
                    
                }}>
                  <LinkedIn />
                </a>
              </IconsWrapper>
            </AwesomeTeamImgWrapper>
            <MemberName>Michael Thomas</MemberName>
            <MemberPosition>Creative Director</MemberPosition>
          </AwesomeTeamCol1>
          <AwesomeTeamCol2>
            <AwesomeTeamImgWrapper>
              <img
                src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3174a739f273554ad25b4_team-2.jpg"
                alt="pic"
                width="100%"
              />
              <IconsWrapper>
                <a href="https://www.facebook.com" target="_blank" >
                  <Facebook />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <LinkedIn />
                </a>
              </IconsWrapper>
            </AwesomeTeamImgWrapper>
            <MemberName>Alexa Meyer</MemberName>
            <MemberPosition>Graphic Designer</MemberPosition>
          </AwesomeTeamCol2>
          <AwesomeTeamCol3>
            <AwesomeTeamImgWrapper>
              <img
                src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3174b739f273554ad25b5_team-3.jpg"
                alt="pic"
                width="100%"
              />
              <IconsWrapper>
                <a href="https://www.facebook.com" target="_blank">
                  <Facebook />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <LinkedIn />
                </a>
              </IconsWrapper>
            </AwesomeTeamImgWrapper>
            <MemberName>Jeffery Stward</MemberName>
            <MemberPosition>web Developer</MemberPosition>
          </AwesomeTeamCol3>
          <AwesomeTeamCol4>
            <AwesomeTeamImgWrapper>
              <img
                src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c3174b52f6a18001ef8d42_team-4.jpg"
                alt="pic"
                width="100%"
              />
              <IconsWrapper>
                <a href="https://www.facebook.com" target="_blank">
                  <Facebook />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <LinkedIn />
                </a>
              </IconsWrapper>
            </AwesomeTeamImgWrapper>
            <MemberName>Bruce Moore</MemberName>
            <MemberPosition>Web Designer</MemberPosition>
          </AwesomeTeamCol4>
        </AwesomeTeamRow>
      </AwesomeTeamWrapper>
    </AwesomeTeamContainer>
  );
};

export default AwesomeTeamSection;
