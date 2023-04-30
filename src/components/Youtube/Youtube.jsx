import styled from "styled-components";
import VideoCover from "../../images/video_cover_pattern.png";
import Floating1 from "../../images/floating1.png";
import Floating2 from "../../images/floating2.png";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";

const YoutubeForm = styled.div`
  position: relative;
  height: 700px;
  background-color: #333;
  overflow: hidden;
`;

const YoutubeArea = styled.div`
  width: 1920px;
  position: absolute;
  /* 16비율 */
  left: 50%;
  margin-left: calc(1920px / -2);
  /* 9비율 */
  top: 50%;
  margin-top: calc(1920px * 9 / 16 / -2);
  &::before {
    content: "";
    display: block;
    /* 16.9 영상 비율로 요소 크기 만들기 */
    width: 100%;
    height: 0;
    padding-top: 56.25%;
  }
`;

const YoutubeCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  background-image: url(${VideoCover});
`;

const Inner = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  height: inherit;
  .floating1 {
    position: absolute;
    top: 50px;
    left: 0;
  }
  .floating2 {
    position: absolute;
    top: 350px;
    left: 150px;
  }
`;

const Youtube = () => {
  return (
    <YoutubeForm>
      <YoutubeArea>
        <YouTube
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1,
              loop: 1,
              mute: 1,
              playlist: "An6LvWQuj_8",
              modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
            },
          }}
          videoId="An6LvWQuj_8"
        />
      </YoutubeArea>
      <YoutubeCover />
      <Inner>
        <img src={Floating1} alt="Icon" className="floating1" />
        <img src={Floating2} alt="Icon" className="floating2" />
      </Inner>
    </YoutubeForm>
  );
};

export default Youtube;
