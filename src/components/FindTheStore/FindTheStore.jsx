import styled from "styled-components";
import FindStoreBg from "../../images/find_store_bg.jpg";
import Texture1 from "../../images/find_store_texture1.png";
import Texture2 from "../../images/find_store_texture2.png";
import Picture1 from "../../images/find_store_picture1.jpg";
import Picture2 from "../../images/find_store_picture2.jpg";
import Text1 from "../../images/find_store_text1.png";
import Text2 from "../../images/find_store_text2.png";
import Btn from "../common/Btn";

const FindTheStoreForm = styled.div`
  background-image: url(${FindStoreBg});
`;

const Inner = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  height: 400px;
  .texture1 {
    position: absolute;
    top: 0;
    left: 400px;
  }
  .texture2 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .picture1 {
    border-radius: 50%;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.5);
    position: absolute;
    top: -60px;
    left: 0;
  }
  .picture2 {
    border-radius: 50%;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 150px;
    left: 250px;
  }
`;

const TextGroup = styled.div`
  position: absolute;
  top: 120px;
  left: 550px;
  .title {
    margin-bottom: 20px;
  }
  .description {
    margin-bottom: 20px;
  }
`;

const FindTheStore = () => {
  return (
    <FindTheStoreForm>
      <Inner>
        <img src={Texture1} alt="" className="texture1" />
        <img src={Texture2} alt="" className="texture2" />
        <img src={Picture1} alt="" className="picture1" />
        <img src={Picture2} alt="" className="picture2" />
        <TextGroup>
          <img
            src={Text1}
            alt="스타벅스 가까이에서 경험해보세요"
            className="title"
          />
          <img
            src={Text2}
            alt="고객님과 가장 가까이 있는 매장을 찾아보세요!"
            className="description"
          />
          <div>
            <Btn
              to="/"
              text={"매장찾기"}
              hoverbg={"#333"}
              hovercolor={"#fff"}
            />
          </div>
        </TextGroup>
      </Inner>
    </FindTheStoreForm>
  );
};

export default FindTheStore;
