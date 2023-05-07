import styled from "styled-components";
import ReserveStoreBg from "../../images/reserve_store_bg.jpg";
import ReserveStoreMedalFront from "../../images/reserve_store_medal_front.png";
import ReserveStoreMedalBack from "../../images/reserve_store_medal_back.png";
import { Link } from "react-router-dom";
import Btn from "../common/Btn";

const ReserveStoreForm = styled.div`
  background-image: url(${ReserveStoreBg});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`;

const Inner = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Medal = styled.div`
  width: 334px;
  height: 334px;
  perspective: 600px;
  &:hover .front {
    transform: rotateY(180deg);
  }
  &:hover .back {
    transform: rotateY(0deg);
  }
`;

const Front = styled.div`
  width: inherit;
  height: inherit;
  position: absolute;
  transition: 1s;
  backface-visibility: hidden;
  transform: rotateY(0deg);
`;

const Back = styled.div`
  width: inherit;
  height: inherit;
  position: absolute;
  transition: 1s;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
`;

const ReserveStore = () => {
  return (
    <ReserveStoreForm>
      <Inner>
        <Medal>
          <Front className="front">
            <img src={ReserveStoreMedalFront} alt="R" />
          </Front>
          <Back className="back">
            <img src={ReserveStoreMedalBack} alt="스타벅스 리저브 매장" />
            <Btn
              to="/"
              text={"매장안내"}
              style={{
                position: "absolute",
                top: "240px",
                left: "0",
                right: "0",
                margin: "auto",
              }}
              hoverbg={"#333"}
              hovercolor={"#fff"}
            />
          </Back>
        </Medal>
      </Inner>
    </ReserveStoreForm>
  );
};

export default ReserveStore;
