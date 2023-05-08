import styled from "styled-components";
import ReserveBg from "../../images/reserve_bg.jpg";
import ReserveLogo from "../../images/reserve_logo.png";
import ReserveText from "../../images/reserve_text.png";
import ReserveImage from "../../images/reserve_image.png";
import Btn from "../common/Btn";

const ReserveCoffeeForm = styled.div`
  background-image: url(${ReserveBg});
`;

const Inner = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  height: 400px;
  .reserveLogo {
    position: absolute;
    top: 110px;
    left: 0;
  }
  .product {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const TextGroup = styled.div`
  position: absolute;
  top: 124px;
  left: 208px;
`;

const ReserveCoffee = () => {
  return (
    <ReserveCoffeeForm>
      <Inner>
        <img src={ReserveLogo} alt='reserveLogo' className='reserveLogo' />
        <TextGroup>
          <img src={ReserveText} alt='reserveText' />
          <Btn
            to='/'
            text={"자세히 보기"}
            color={"#d9aa8a"}
            bordercolor={"#d9aa8a"}
            hovercolor={"#fff"}
            hoverbg={"#d9aa8a"}
          />
        </TextGroup>
        <img src={ReserveImage} alt='reserveImage' className='product' />
      </Inner>
    </ReserveCoffeeForm>
  );
};

export default ReserveCoffee;
