import styled from "styled-components";

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AboutUsHeading = styled.h2`
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 15px;
  margin-top: 100px;
`;
export const AboutUsSubHeading = styled.p`
  font-style: italic;
  color: #5c5c76;
  font-size: 20px;
`;
export const AboutUsWrapper = styled.div`
  display: grid;
  grid-template-columns: 600px auto;
  column-gap: 10px;
  margin-top: 100px;
  /* padding-right: 15px;
  padding-left: 15px; */

  @media screen and (max-width: 1050px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* grid-template-columns: 400px; */
  }
`;
export const AboutUsDescription = styled.p`
  font-size: 16px;
  text-align: left;
  color: #5c5c5c;
`;
