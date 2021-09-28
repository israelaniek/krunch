import React from "react";
import {
  SidebarContainer,
  SidebarIcon,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarIcon>
        <FaTimes />
      </SidebarIcon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="portfolio"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-105}
            onClick={toggle}
          >
            Portfolio
          </SidebarLink>

          <SidebarLink
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-105}
            onClick={toggle}
          >
            Services
          </SidebarLink>
          <SidebarLink
            to="team"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-105}
            onClick={toggle}
          >
            Team
          </SidebarLink>
          <SidebarLink
            to="blog"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-105}
            onClick={toggle}
          >
            Blog
          </SidebarLink>
          <SidebarLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-105}
            onClick={toggle}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
