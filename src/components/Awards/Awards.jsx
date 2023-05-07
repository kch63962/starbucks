import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

const AwardsForm = styled.div`
  background-color: #272727;
`;

const Inner = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  padding: 40px 0;
  .swiper-prev,
  .swiper-next {
    width: 42px;
    height: 42px;
    outline: none;
    border: 2px solid #fff;
    border-radius: 50%;
    color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    opacity: 0.3;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
  }
  .swiper-prev {
    left: -100px;
  }
  .swiper-next {
    right: -100px;
  }
  .swiper-prev:hover,
  .swiper-next:hover {
    background-color: #fff;
    color: #333;
  }
`;

const Awards = ({ AwardsImg }) => {
  return (
    <AwardsForm>
      <Inner>
        <Swiper
          style={{ width: "100%", height: "40px" }}
          autoplay={true}
          loop={true}
          spaceBetween={30}
          slidesPerView={5}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
        >
          {AwardsImg.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img.src} alt={img.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-prev">
          <span className="material-icons">arrow_back</span>
        </div>
        <div className="swiper-next">
          <span className="material-icons">arrow_forward</span>
        </div>
      </Inner>
    </AwardsForm>
  );
};

export default Awards;
