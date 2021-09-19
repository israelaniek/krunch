import styled from "styled-components";

export const LineBorder = styled.div`
  display: block;
  width: 70px;
  height: 2px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${({ isWhite }) => (isWhite ? "#fff" : "#4d8cf5")};
`;
