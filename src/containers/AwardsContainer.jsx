import Awards from "../components/Awards/Awards";
import Slide1 from "../images/awards_slide1.jpg";
import Slide2 from "../images/awards_slide2.jpg";
import Slide3 from "../images/awards_slide3.jpg";
import Slide4 from "../images/awards_slide4.jpg";
import Slide5 from "../images/awards_slide5.jpg";
import Slide6 from "../images/awards_slide6.jpg";
import Slide7 from "../images/awards_slide7.jpg";
import Slide8 from "../images/awards_slide8.jpg";
import Slide9 from "../images/awards_slide9.jpg";
import Slide10 from "../images/awards_slide10.jpg";

const AwardsContainer = () => {
  const AwardsImg = [
    {
      src: Slide1,
      alt: "대통령 표창",
    },
    {
      src: Slide2,
      alt: "대통령 표창 (3년 연속)",
    },
    {
      src: Slide3,
      alt: "우수사업주 인증",
    },
    {
      src: Slide4,
      alt: "경연대회 대상",
    },
    {
      src: Slide5,
      alt: "대한상의회장상",
    },
    {
      src: Slide6,
      alt: "기업사회공헌 활동 부문",
    },
    {
      src: Slide7,
      alt: "KSI 1위 (5년 연속)",
    },
    {
      src: Slide8,
      alt: "KS-SQI 1위 (5년 연속)",
    },
    {
      src: Slide9,
      alt: "커피전문점 부문 (4년 연속)",
    },
    {
      src: Slide10,
      alt: "동반성장 부문 (4년 연속)",
    },
  ];
  return <Awards AwardsImg={AwardsImg} />;
};

export default AwardsContainer;
