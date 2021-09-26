import styled from "styled-components";
import { HiDesktopComputer } from "react-icons/hi";
import { HiCode } from "react-icons/hi";
import { DiAndroid } from "react-icons/di";
import { AiFillCamera } from "react-icons/ai";
import { GrMagic } from "react-icons/gr";
import { TiWorld } from "react-icons/ti";

export const ServicesContainer = styled.div`
  padding: 50px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ServicesHeader = styled.h2`
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 15px;
  margin-top: 100px;
`;
export const ServicesSubHeading = styled.p`
  font-style: italic;
  color: #5c5c76;
  font-size: 20px;
`;
export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
export const Row1 = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 30px;
  margin-bottom: 50px;
`;
export const Row2 = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 30px;
`;
export const Col1 = styled.div``;
export const Col2 = styled.div``;
export const Col3 = styled.div``;
export const ColHeading = styled.h2`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  text-transform: uppercase;
  color: #333;
`;
export const ColParagraph = styled.p`
  color: #5c5c5c;
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
`;
export const DesktopComputer = styled(HiDesktopComputer)`
  font-size: 48px;
  color: #4d8cf5;
`;

export const CodeIcon = styled(HiCode)`
  font-size: 48px;
  color: #4d8cf5;
`;
export const AndroidIcon = styled(DiAndroid)`
  font-size: 48px;
  color: #4d8cf5;
`;

export const Camera = styled(AiFillCamera)`
  font-size: 48px;
  color: #4d8cf5;
`;

export const Magic = styled(GrMagic)`
  font-size: 48px;
  color: #4d8cf5;
`;

export const World = styled(TiWorld)`
  font-size: 48px;
  color: #4d8cf5;
`;
