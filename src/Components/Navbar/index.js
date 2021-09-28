import React, { useState, useEffect } from "react";
import {
  MobileIcon,
  NavbarContainer,
  NavbarLink,
  NavbarLinks,
  NavbarLinksWrapper,
  NavbarLogo,
} from "./NavbarElement";
import { FaBars } from "react-icons/fa";
import { animateTopScroll as Scroll } from "react-scroll/modules/mixins/animate-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 70) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  // const toggleHome = () => {
  //   Scroll.scrollToTop();
  // };

  return (
    <NavbarContainer scrollNav={scrollNav}>
      <NavbarLogo to="/">Krunch</NavbarLogo>
      <MobileIcon onClick={toggle} isOpen={toggle}>
        <FaBars />
      </MobileIcon>
      <NavbarLinksWrapper>
        <NavbarLinks>
          <NavbarLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-90}
          >
            Home
          </NavbarLink>
          <NavbarLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About
          </NavbarLink>
          <NavbarLink
            to="portfolio"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-105}
          >
            Portfolio
          </NavbarLink>
          <NavbarLink
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Services
          </NavbarLink>
          <NavbarLink
            to="team"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Team
          </NavbarLink>
          <NavbarLink
            to="blog"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Blog
          </NavbarLink>
          <NavbarLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Contact
          </NavbarLink>
        </NavbarLinks>
      </NavbarLinksWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
