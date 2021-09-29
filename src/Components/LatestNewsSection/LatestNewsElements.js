import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";

export const LatestNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LatestNewsHeading = styled.h2`
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 15px;
  margin-top: 100px;
`;
export const LatestNewsSubHeading = styled.p`
  font-style: italic;
  color: #5c5c76;
  font-size: 20px;
`;
export const LatestNewsWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 350px 350px 350px;
  grid-column-gap: 20px;

  @media screen and (max-width: 1420px) {
    grid-template-columns: 350px 350px;
  }
  @media screen and (max-width: 920px) {
    grid-template-columns: auto;
  }
`;
export const LatestNewsCol1 = styled.div`
  @media screen and (max-width: 920px) {
    margin-bottom: 20px;
  }
`;
export const LatestNewsCol2 = styled.div`
  @media screen and (max-width: 920px) {
    margin-bottom: 20px;
  }
`;
export const LatestNewsCol3 = styled.div`
  @media screen and (max-width: 920px) {
    margin-bottom: 20px;
  }
`;
export const NewsHeading = styled.h4`
  color: #333;
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const NewsDate = styled.p`
  color: #999;
  font-size: 14px;
  line-height: 1;
  font-style: italic;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const NewsDesc = styled.p`
  color: #5c5c5c;
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
  margin-bottom: 20px;
`;
export const ReadMoreContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ReadMoreLink = styled.a`
  margin-right: 2px;
  font-size: 13px;
  line-height: 1;
  font-weight: 600;
  text-transform: uppercase;
  color: #4d8cf5;
  &:hover {
    cursor: pointer;
  }
`;
export const RightArrow = styled(HiArrowNarrowRight)`
  font-size: 20px;
  color: #4d8cf5;
  &:hover {
    cursor: pointer;
    transform: scaleX(1.2);
    transition: transform 0.2s;
  }
`;
