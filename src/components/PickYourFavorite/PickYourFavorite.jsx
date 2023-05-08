import styled from "styled-components";
import FavoriteBG from "../../images/favorite_bg.jpg";
import FavoriteText1 from "../../images/favorite_text1.png";
import FavoriteText2 from "../../images/favorite_text2.png";
import Btn from "../common/Btn";

const PickYourFavoriteForm = styled.div`
  background-image: url(${FavoriteBG});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`;

const Inner = styled.div`
  position: relative;
  width: 1100px;
  margin: 0 auto;
  padding: 110px 0;
`;

const TextGroup = styled.div`
  width: 362px;
  margin-left: 100px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  .title {
    margin-bottom: 40px;
  }
  .description {
    margin-bottom: 40px;
  }
`;

const PickYourFavorite = () => {
  return (
    <PickYourFavoriteForm>
      <Inner>
        <TextGroup>
          <img src={FavoriteText1} alt='Text1' className='title' />
          <img src={FavoriteText2} alt='Text2' className='description' />
          <Btn
            to='/'
            text={"자세히 보기"}
            bordercolor={"#fff"}
            color={"#fff"}
            hoverbg={"#fff"}
            hovercolor={"#333"}
          />
        </TextGroup>
      </Inner>
    </PickYourFavoriteForm>
  );
};

export default PickYourFavorite;
