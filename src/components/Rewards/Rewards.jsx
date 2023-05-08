import styled from "styled-components";
import RewardsImg from "../../images/rewards.jpg";
import Btn from "../common/Btn";

const RewardsForm = styled.div`
  position: relative;
`;

const BgLeft = styled.div`
  width: 50%;
  height: 100%;
  background-color: #272727;
  position: absolute;
  top: 0;
  left: 0;
`;

const BgRight = styled.div`
  width: 50%;
  height: 100%;
  background-color: #d5c798;
  position: absolute;
  top: 0;
  right: 0;
`;

const Inner = styled.div`
  position: relative;
  width: 1100px;
  margin: 0 auto;
  height: 241px;
  background-image: url(${RewardsImg});
`;

const BtnGroup = styled.div`
  position: absolute;
  right: 0;
  bottom: 24px;
  width: 250px;
  display: flex;
  flex-wrap: wrap;
`;

const Rewards = () => {
  return (
    <RewardsForm>
      <BgLeft />
      <BgRight />
      <Inner>
        <BtnGroup>
          <Btn
            to='/'
            text={"회원가입"}
            color={"#fff"}
            hovercolor={"#333"}
            hoverbg={"transparent"}
            backgroundcolor={"#333"}
            style={{ marginRight: "10px" }}
          />
          <Btn
            to='/'
            text={"로그인"}
            hovercolor={"#fff"}
            hoverbg={"#333"}
            style={{ width: "110px" }}
          />
          <Btn
            to='/'
            text={"e-Gift 선물하기"}
            hovercolor={"#fff"}
            hoverbg={"#333"}
            style={{ marginTop: "10px", flex: 1 }}
          />
        </BtnGroup>
      </Inner>
    </RewardsForm>
  );
};

export default Rewards;
