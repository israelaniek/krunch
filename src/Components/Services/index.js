import React from "react";
import { GrAssistListening } from "react-icons/gr/index.esm";
import { LineBorder } from "../LineBorder";
import {
  AndroidIcon,
  Camera,
  CodeIcon,
  Col1,
  Col2,
  Col3,
  ColHeading,
  ColParagraph,
  DesktopComputer,
  Magic,
  Row1,
  Row2,
  ServicesContainer,
  ServicesHeader,
  ServicesSubHeading,
  ServicesWrapper,
  World,
} from "./ServicesComponents";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesHeader>Services</ServicesHeader>
      <ServicesSubHeading>
        Scope of our featured premium services
      </ServicesSubHeading>
      <LineBorder />
      <ServicesWrapper>
        <Row1>
          <Col1>
            <DesktopComputer />
            <ColHeading>Web Design</ColHeading>
            <ColParagraph>
              The pain itself is love, the main customer The pain <br /> of the
              various eros is the sad element. The normal <br /> course, the
              cartoon, the embellishment, the pain of <br /> the eros sometimes
              no, the advantage of the free <br /> life.
            </ColParagraph>
          </Col1>
          <Col2>
            <CodeIcon />
            <ColHeading>Web Design</ColHeading>
            <ColParagraph>
              The pain itself is love, the main customer The pain <br /> of the
              various eros is the sad element. The normal <br /> course, the
              cartoon, the embellishment, the pain of <br /> the eros sometimes
              no, the advantage of the free <br /> life.
            </ColParagraph>
          </Col2>
          <Col3>
            <AndroidIcon />
            <ColHeading>Apps Design</ColHeading>
            <ColParagraph>
              The pain itself is love, the main customer The pain <br /> of the
              various eros is the sad element. The normal <br /> course, the
              cartoon, the embellishment, the pain of <br /> the eros sometimes
              no, the advantage of the free <br /> life.
            </ColParagraph>
          </Col3>
        </Row1>
        <Row2>
          <Col1>
            <Camera />
            <ColHeading>Photography</ColHeading>
            <ColParagraph>
              The pain itself is love, the main customer The pain <br /> of the
              various eros is the sad element. The normal <br /> course, the
              cartoon, the embellishment, the pain of <br /> the eros sometimes
              no, the advantage of the free <br /> life.
            </ColParagraph>
          </Col1>
          <Col2>
            <Magic />
            <ColHeading>Branding</ColHeading>
            <ColParagraph>
              The pain itself is love, the main customer The pain <br /> of the
              various eros is the sad element. The normal <br /> course, the
              cartoon, the embellishment, the pain of <br /> the eros sometimes
              no, the advantage of the free <br /> life.
            </ColParagraph>
          </Col2>
          <Col3>
            <World />
            <ColHeading>Hosting</ColHeading>
            <ColParagraph>
              The pain itself is love, the main customer The pain <br /> of the
              various eros is the sad element. The normal <br /> course, the
              cartoon, the embellishment, the pain of <br /> the eros sometimes
              no, the advantage of the free <br /> life.
            </ColParagraph>
          </Col3>
        </Row2>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
