import { React, useState, useEffect } from "react";
import {
  NavbarContainer,
  NavbarLink,
  NavbarLinks,
  NavbarLinksWrapper,
  NavbarLogo,
} from "./NavbarElement";

const Navbar = () => {
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
  return (
    <NavbarContainer scrollNav={scrollNav}>
      <NavbarLogo>Krunch</NavbarLogo>
      <NavbarLinksWrapper>
        <NavbarLinks>
          <NavbarLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
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
            offset={-80}
          >
            Portfolio
          </NavbarLink>
          <NavbarLink
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Services
          </NavbarLink>
          <NavbarLink
            to="team"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Team
          </NavbarLink>
          <NavbarLink
            to="blog"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Blog
          </NavbarLink>
          <NavbarLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact
          </NavbarLink>
        </NavbarLinks>
      </NavbarLinksWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
