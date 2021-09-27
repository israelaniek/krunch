import React from "react";
import { LineBorder } from "../LineBorder";
import {
  ContactUsContainer,
  ContactUsHeading,
  ContactUsSubheading,
  FormButton,
  FormContainer,
  FormInput,
  FormInputEmail,
  FormTextArea,
  NameInputWrapper,
} from "./ContactUsElements";

const ContactUsSection = () => {
  return (
    <ContactUsContainer id='contact'>
      <ContactUsHeading>Keep In Touch</ContactUsHeading>
      <ContactUsSubheading>
        Setibulum rutrum quam vitae fringilla tincidunt
      </ContactUsSubheading>
      <LineBorder />
      <FormContainer>
        <FormInput type="text" name="fname" placeholder="First Name" required />
        <FormInput type="text" name="lname" placeholder="Last Name" required />

        <FormInputEmail
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
        />
        <FormTextArea placeholder="Your Message" rows="5" cols="50" />
        <FormButton type="submit" value="Send Message" />
      </FormContainer>
    </ContactUsContainer>
  );
};

export default ContactUsSection;
