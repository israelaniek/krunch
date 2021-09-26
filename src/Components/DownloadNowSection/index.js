import React from "react";
import { Button } from "../Button";
import {
  DownloadNowContainer,
  VideoIcon,
  VideoText,
} from "./DownloadNowElements";

const DownloadNowSection = () => {
  return (
    <DownloadNowContainer>
      <VideoIcon />
      <VideoText>
        Aenean commodo ligula eget dolor natoque penatibus et magnis <br /> dis
        parturient montes, nascetur ridiculus consectetur muse.
      </VideoText>
      <Button>Download Now</Button>
    </DownloadNowContainer>
  );
};

export default DownloadNowSection;
