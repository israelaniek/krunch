import styled from "styled-components";
import { AiOutlinePlayCircle } from "react-icons/ai";

export const DownloadNowContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://daks2k3a4ib2z.cloudfront.net/57c2c646739f273554acc4af/57c31c59f69ff41454c71140_video.jpg");
`;
export const VideoIcon = styled(AiOutlinePlayCircle)`
  font-size: 100px;
  font-weight: 100;
  color: #fff;
  margin-bottom: 10px;
`;
export const VideoText = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: 34px;
  font-style: italic;
  margin-bottom: 50px;
`;
