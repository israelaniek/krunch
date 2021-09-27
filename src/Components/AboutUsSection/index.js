import React from "react";
import { LineBorder } from "../LineBorder";
import {
  AboutUsContainer,
  AboutUsDescription,
  AboutUsHeading,
  AboutUsSubHeading,
  AboutUsWrapper,
} from "./AboutUsElements";

const AboutUs = () => {
  return (
    <AboutUsContainer id='about'>
      <AboutUsHeading>About Us</AboutUsHeading>
      <AboutUsSubHeading>
        Setibulum makeup for the life of our customers
      </AboutUsSubHeading>

      <LineBorder />

      <AboutUsWrapper>
        <AboutUsDescription>
          The pain lies in the pain itself, the main adipisicing elite, but so
          long as they fall into this kind of pain. Ut enim ad minimi pardon,
          quisus nostrad exercise nullamco labori nisi ut aliquip ex ea commodo
          consequat. But the pain in the film is irure to condemn, in pleasure
          it wants to escape from the pain of being cillus that no one pays for.
          They are the exceptions the blinds yearn for, they don't see, they are
          the ones who abandon their responsibilities to the fault that is
          soothing the soul's hardships. <br /> <br />
          <br /> Those who crave blacks are the exceptions to the point that
          none are aware, there are those who forsake the services of a fault
          that soothes the soul, that is, the pain of pleasure and hardship.
        </AboutUsDescription>
        <img src="https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c2f8bdb166809064184b60_home-about.jpg" />
      </AboutUsWrapper>
    </AboutUsContainer>
  );
};

export default AboutUs;
