import styled from "styled-components";

export const PortfolioContainer = styled.div`
  /* padding: 50px 150px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PortfolioHeading = styled.h2`
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 15px;
  margin-top: 100px;
`;
export const PortfolioSubheading = styled.p`
  font-style: italic;
  color: #5c5c76;
  font-size: 20px;
`;

export const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 1px;
  margin-top: 50px;
`;

export const ImageWrapper = styled.div`
  max-width: 100%;
  position: relative;

  &:hover {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

export const ImgDescription = styled.p`
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
