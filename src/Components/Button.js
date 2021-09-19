import styled from "styled-components";

export const Button = styled.div`
  width: 220px;
  height: 50px;
  padding: 15px 20px;
  border: ${({ isTransparent }) =>
    isTransparent ? "1px #4D8CF5 solid" : "none"};
  border-radius: 10px;
  background: ${({ isTransparent }) =>
    isTransparent ? "transparent" : "#4D8CF5"};
  font-size: 18px;
  text-transform: uppercase;
  margin-right: 20px;
  text-align: center;

  &:hover {
    background: ${({ isTransparent }) =>
      isTransparent ? "#4D8CF5" : "#352317"};
    transition: all .5s ease-in-out;
    cursor: pointer;
  }
`;
