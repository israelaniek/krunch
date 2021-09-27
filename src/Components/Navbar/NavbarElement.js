import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NavbarContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 30px 200px;
  justify-content: space-between;
  align-items: center;
  background: ${({ scrollNav }) =>
    scrollNav ? "rgba(34, 34, 34, 0.9)" : "transparent"};
  color: #fff;
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 9999;
  transform: translateX(0px) translateY(-100%) translateZ(0px);
  transform: ${({ scrollNav }) =>
    scrollNav ? "translateX(0px) translateY(-0%) translateZ(0px)" : "none"};
  transition: all 500ms ease 0s;
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
