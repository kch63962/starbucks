import styled from "styled-components";
import visualBg from "../images/visual_bg.jpg";
import VisualImg from "../components/Visual/VisaulImg";
import VisualTitle from "../images/visual_title.png";
import Cup1 from "../images/visual_cup1.png";
import Cup1Text from "../images/visual_cup1_text.png";
import Cup2 from "../images/visual_cup2.png";
import Cup2Text from "../images/visual_cup2_text.png";
import Spoon from "../images/visual_spoon.png";
import Btn from "../components/common/Btn";

export const VisualForm = styled.div`
  background-image: url(${visualBg});
  margin-top: 120px;
  background-position: center;
`;

export const Inner = styled.div`
  height: 646px;
  width: 1100px;
  margin: 0 auto;
  position: relative;
`;

export const Title = styled.div`
  position: absolute;
  top: 88px;
  left: -10px;
`;

const Visual = () => {
  return (
    <VisualForm>
      <Inner>
        <Title>
          <VisualImg
            src={VisualTitle}
            alt={"STARBUCKS DELIGHFUL START TO THE YEARS"}
            style={{ animationDelay: "0.7s" }}
          />
          <Btn
            style={{
              position: "absolute",
              top: "259px",
              left: "173px",
              animationDelay: "0.7s",
              opacity: "0",
            }}
            color={"#592b18"}
            bordercolor={"#592b18"}
            text={"자세히 보기"}
            hovercolor={"#fff"}
            hoverbg={"#592b18"}
          />
        </Title>
        <div>
          <VisualImg
            src={Cup1}
            alt={"new OATMEAL LATTE"}
            style={{
              position: "absolute",
              bottom: "0",
              right: "-47px",
              animationDelay: "1.4s",
            }}
          />
          <VisualImg
            src={Cup1Text}
            alt={"오트밀 라떼"}
            style={{
              position: "absolute",
              top: "38px",
              right: "171px",
              animationDelay: "1.4s",
            }}
          />
        </div>

        <div>
          <VisualImg
            src={Cup2}
            alt={"new STARBUCKS CARAMEL CRUMBLE MOCHA"}
            style={{
              position: "absolute",
              bottom: "0",
              right: "162px",
              animationDelay: "2.1s",
            }}
          />
          <VisualImg
            src={Cup2Text}
            alt={"스타벅스 카라멜 크럼블 모카"}
            style={{
              position: "absolute",
              top: "321px",
              right: "416px",
              animationDelay: "2.1s",
            }}
          />
        </div>
        <div>
          <VisualImg
            src={Spoon}
            alt={"Spoon"}
            style={{
              position: "absolute",
              bottom: "0",
              left: "275px",
              animationDelay: "2.8s",
            }}
          />
        </div>
      </Inner>
    </VisualForm>
  );
};

export default Visual;
