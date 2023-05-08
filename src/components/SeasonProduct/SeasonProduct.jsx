import styled from "styled-components";
import SeasonProductBg from "../../images/season_product_bg.jpg";
import Floating3 from "../../images/floating3.png";
import SeasonProductImage from "../../images/season_product_image.png";
import SeasonProductText1 from "../../images/season_product_text1.png";
import SeasonProductText2 from "../../images/season_product_text2.png";
import Btn from "../common/Btn";

const SeasonProductForm = styled.div`
  background-image: url(${SeasonProductBg});
`;

const Inner = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  height: 400px;
  .floating3 {
    position: absolute;
    top: -200px;
    right: 0;
  }
`;

const TextGroup = styled.div`
  position: absolute;
  top: 110px;
  right: 100px;
  .title {
    margin-bottom: 10px;
  }
  .description {
    margin-bottom: 15px;
  }
`;

const SeasonProduct = () => {
  return (
    <SeasonProductForm>
      <Inner>
        <img src={Floating3} alt='ICON' className='floating3' />
        <img src={SeasonProductImage} alt='아이스 커피 블렌드' />
        <TextGroup>
          <img src={SeasonProductText1} alt='TEXT1' className='title' />
          <img src={SeasonProductText2} alt='TEXT2' className='description' />
          <Btn
            to='/'
            text={"자세히 보기"}
            hovercolor={"#fff"}
            hoverbg={"#333"}
          />
        </TextGroup>
      </Inner>
    </SeasonProductForm>
  );
};

export default SeasonProduct;
