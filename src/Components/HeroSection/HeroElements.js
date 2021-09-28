import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const HeroContainer = styled.div`
  width: 100%;
  height: 76vh;
  /* padding: 50px 200px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.75)
    ),
    url("https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c2d86bb166809064181470_hero-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;

  
`;
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
`;
export const HeroHeading = styled.h1`
  font-size: 58px;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 150px;
  margin-bottom: 50px;
  font-weight: 100;

  @media screen and (max-width: 996px) {
    font-size: 36px;
  }
`;
export const HeroParagraph = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 80px;
  letter-spacing: 1.2px;
  line-height: 28px;

  @media screen and (max-width: 996px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;
export const HeroBtnWrapper = styled.div`
  display: flex;
`;

export const ArrowWrapper = styled(LinkS)`
  margin-top: 60px;

  @media screen and (max-width: 996px) {
    margin-top: 20px;
  }
`;

export const AngleDown = styled(FaAngleDown)`
  font-size: 50px;

  &:hover {
    color: #4d8cf5;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  }
`;
