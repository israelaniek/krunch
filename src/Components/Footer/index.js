import React from "react";
import {
    AuthorSpan,
  FooterContainer,
  FooterCopyright,
  FooterLink,
  FooterLinksWrapper,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterLink>Facebook</FooterLink>
        <FooterLink>Twitter</FooterLink>
        <FooterLink>Instagram</FooterLink>
        <FooterLink>Google+</FooterLink>
      </FooterLinksWrapper>
      <FooterCopyright>
        © 2016 KRUNCH LANDING PAGE, CODED BY <AuthorSpan>ANIEK</AuthorSpan>
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
