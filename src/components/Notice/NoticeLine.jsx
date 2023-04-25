import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { swiperItem } from "../../containers/Notice";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay]);

export const NoticeLineForm = styled.div`
  position: relative;
`;

export const BgLeft = styled.div`
  width: 50%;
  height: 100%;
  background-color: #333;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BgRight = styled.div`
  width: 50%;
  height: 100%;
  background-color: #f6f5ef;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Inner = styled.div`
  width: 1100px;
  height: 62px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
`;

export const InnerLeft = styled.div`
  width: 60%;
  height: 100%;
  background-color: #333;
  display: flex;
  align-items: center;
`;

export const H2 = styled.h2`
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  margin-right: 20px;
`;

export const NoticeLineMore = styled(Link)`
  width: 62px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  .material-icons {
    color: #fff;
    font-size: 30px;
  }
`;

export const InnerRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  h2 {
    font-size: 17px;
    font-weight: 700;
  }
`;

export const TogglePromotion = styled.div`
  width: 62px;
  height: 62px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  .material-icons {
    font-size: 30px;
  }
`;

const NoticeLine = () => {
  return (
    <NoticeLineForm>
      <BgLeft></BgLeft>
      <BgRight></BgRight>
      <Inner>
        <InnerLeft>
          <H2>공지사항</H2>
          <Swiper
            direction='vertical'
            autoplay={true}
            loop={true}
            style={{ height: "62px", flexGrow: "1" }}
          >
            {swiperItem.map((item, index) => (
              <SwiperSlide
                key={index}
                style={{
                  height: "62px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link to='/' style={{ color: "#fff" }}>
                  {item.text}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <NoticeLineMore to='/'>
            <span className='material-icons'>add_circle</span>
          </NoticeLineMore>
        </InnerLeft>
        <InnerRight>
          <h2>스타벅스 프로모션</h2>
          <TogglePromotion>
            <div className='material-icons'>upload</div>
          </TogglePromotion>
        </InnerRight>
      </Inner>
    </NoticeLineForm>
  );
};

export default NoticeLine;
