import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NavbarContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 30px 200px;
  justify-content: space-between;
  align-items: center;
  background: #373a40;
  color: #fff;
`;

export const NavbarLogo = styled.h1`
  font-size: 30px;
  font-family: "Satisfy", cursive;

  &:hover {
    cursor: pointer;
  }
`;
export const NavbarLinksWrapper = styled.div`
  width: 600px;
`;
export const NavbarLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavbarLink = styled(LinkS)`
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    color: #3654d2;
    transition: 0.2s ease-in-out;
  }

  &.active {
    color: #3654d2;
  }
`;
