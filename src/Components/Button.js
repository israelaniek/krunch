import styled from "styled-components";

export const Button = styled.div`
  width: auto;
  height: auto;
  padding: 12px 25px;
  border: ${({ isTransparent }) =>
    isTransparent ? "1px #4D8CF5 solid" : "none"};
  border-radius: 5px;
  background: ${({ isTransparent }) =>
    isTransparent ? "transparent" : "#4D8CF5"};
  font-size: 15px;
  text-transform: uppercase;
  margin-right: 20px;
  text-align: center;
  color: #fff;

  &:hover {
    background: ${({ isTransparent }) =>
      isTransparent ? "#4D8CF5" : "#352317"};
    color: #fff;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 642px) {
    margin-bottom: ${({ marginBottom }) => (marginBottom ? "10px" : "0")};
  }
`;
