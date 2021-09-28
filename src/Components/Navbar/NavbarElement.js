import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 15px 100px;
  justify-content: space-between;
  align-items: center;
  background: ${({ scrollNav }) =>
    scrollNav ? "rgba(34, 34, 34, 0.9)" : "transparent"};
  color: #fff;
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 9;
  transform: translateX(0px) translateY(-100%) translateZ(0px);
  transform: ${({ scrollNav }) =>
    scrollNav ? "translateX(0px) translateY(-0%) translateZ(0px)" : "none"};
  transition: all 500ms ease 0s;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarLogo = styled(LinkR)`
  font-size: 30px;
  font-family: "Satisfy", cursive;
  color: #fff;
  text-decoration: none;
  margin-right: 100px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1050px) {
    transform: translate(-90%, 0%);
    transition: all 0.2s ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1050px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavbarLinksWrapper = styled.div`
  width: auto;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
export const NavbarLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavbarLink = styled(LinkS)`
  text-transform: uppercase;
  margin-right: 50px;
  cursor: pointer;

  &:hover {
    color: #3654d2;
    transition: 0.2s ease-in-out;
  }

  &.active {
    color: #3654d2;
  }
`;
