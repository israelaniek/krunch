import React from 'react'
import { NavbarContainer, NavbarLink, NavbarLinks, NavbarLinksWrapper, NavbarLogo } from './NavbarElement'

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarLogo>Krunch</NavbarLogo>
            <NavbarLinksWrapper>
                <NavbarLinks>
                    <NavbarLink to='home'>Home</NavbarLink>
                    <NavbarLink to='about'>About</NavbarLink>
                    <NavbarLink to='portfolio'>Portfolio</NavbarLink>
                    <NavbarLink to='services'>Services</NavbarLink>
                    <NavbarLink to='team'>Team</NavbarLink>
                    <NavbarLink to='blog'>Blog</NavbarLink>
                    <NavbarLink to='contact'>Contact</NavbarLink>
                </NavbarLinks>
            </NavbarLinksWrapper>
        </NavbarContainer>
    )
}

export default Navbar
