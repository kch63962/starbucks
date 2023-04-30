import styled from "styled-components";
import FavoriteBg from "../../images/favorite_bg.jpg";
import FavoriteText1 from "../../images/favorite_text1.png";
import FavoriteText2 from "../../images/favorite_text2.png";
import Btn from "../common/Btn";

const PickYourFavoriteForm = styled.div`
  background-image: url(${FavoriteBg});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`;

const Inner = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
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
          <img src={FavoriteText1} alt="PICK YOUR FAVORITE" className="title" />
          <img
            src={FavoriteText2}
            alt="다양한 메뉴를 스타벅스에서 즐겨보세요"
            className="description"
          />
          <Btn
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
