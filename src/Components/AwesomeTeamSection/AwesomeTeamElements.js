import styled from "styled-components";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";

export const AwesomeTeamContainer = styled.div`
  /* padding: 50px 150px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AwesomeTeamHeading = styled.h2`
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 15px;
  margin-top: 100px;
`;
export const AwesomeTeamSubHeading = styled.p`
  font-style: italic;
  color: #5c5c76;
  font-size: 20px;
`;
export const AwesomeTeamWrapper = styled.div`
  margin-top: 50px;
`;
export const AwesomeTeamRow = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  grid-column-gap: 30px;

  @media screen and (max-width: 1405px) {
    grid-template-columns: 250px 250px 250px;
  }
  @media screen and (max-width: 1045px) {
    grid-template-columns: 250px 250px;
  }
  @media screen and (max-width: 673px) {
    grid-template-columns: 250px;
  }
`;
export const AwesomeTeamCol1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AwesomeTeamCol2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AwesomeTeamCol3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AwesomeTeamCol4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AwesomeTeamImgWrapper = styled.div`
  max-width: 100%;
  position: relative;

  &:hover {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

export const IconsWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  left: 0;
  right: 0;
  background: rgba(101, 154, 241, 0.72);
  opacity: 0;
  transition: opacity 0.2s;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
  }
`;

export const MemberName = styled.h4`
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #333;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
`;
export const MemberPosition = styled.p`
  color: #5c5c5c;
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
`;

export const Facebook = styled(RiFacebookFill)`
  background: #222;
  margin-right: 10px;
  padding: 2px;
  color: #fff;

  &:hover {
    background: #fff;
    color: #508ef5;
    transition: all 0.5s;
  }
`;
export const Twitter = styled(AiOutlineTwitter)`
  background: #222;
  margin-right: 10px;
  padding: 2px;
  color: #fff;
  transition: all 0.5s;

  &:hover {
    background: #fff;
    color: #508ef5;
  }
`;
export const LinkedIn = styled(TiSocialLinkedin)`
  background: #222;
  margin-right: 10px;
  padding: 2px;
  color: #fff;
  transition: all 0.5s;

  &:hover {
    background: #fff;
    color: #508ef5;
  }
`;
