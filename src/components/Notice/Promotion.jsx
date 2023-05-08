import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { promotionItem } from "../../containers/Notice";
import Btn from "../common/Btn";
import styled from "styled-components";
import { useState } from "react";
import slideOff from "../../images/promotion_slide_pager.png";
import slideOn from "../../images/promotion_slide_pager_on.png";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export const PromotionForm = styled.div`
  height: ${(props) => (props.toggle ? "693px" : "0px")};
  transition: height 0.4s;
  background-color: #f6f5ef;
  position: relative;
  overflow: hidden;

  .swiper-pagination {
    bottom: 40px;
    left: 0;
    right: 0;
    z-index: 0;
  }
  .swiper-pagination .swiper-pagination-bullet {
    background-color: transparent;
    background-image: url(${slideOff});
    width: 13px;
    height: 12px;
    margin-right: 6px;
    outline: none;
  }
  .swiper-pagination .swiper-pagination-bullet-active {
    background-image: url(${slideOn});
  }

  .swiper-prev,
  .swiper-next {
    width: 42px;
    height: 42px;
    outline: none;
    border: 2px solid #333;
    border-radius: 50%;
    position: absolute;
    top: 300px;
    z-index: 1;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
  }
  .swiper-prev {
    left: 50%;
    margin-left: -480px;
  }
  .swiper-next {
    right: 50%;
    margin-right: -480px;
  }
  .swiper-prev:hover,
  .swiper-next:hover {
    color: #fff;
    background-color: #333;
  }
`;

const Promotion = ({ toggle }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTranstionEnd = (swiper) => {
    const newIndex = swiper.realIndex % promotionItem.length;
    setActiveIndex(newIndex);
  };

  return (
    <PromotionForm toggle={toggle}>
      <Swiper
        style={{
          width: "calc(819px * 3 + 20px)",
          height: "553px",
          position: "absolute",
          top: "40px",
          left: "50%",
          marginLeft: "calc((819px * 3 + 20px) / -2)",
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        onTransitionEnd={handleTranstionEnd}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
      >
        {promotionItem.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              position: "relative",
              transition: "opacity 1s",
              opacity: activeIndex === index ? 1 : 0.5,
            }}
          >
            <img src={item.src} alt={item.alt} />
            <Btn
              to='/'
              text={item.text}
              hovercolor={"#fff"}
              hoverbg={"#333"}
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                margin: "auto",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='swiper-pagination'></div>

      <div className='swiper-prev'>
        <span className='material-icons'>arrow_back</span>
      </div>
      <div className='swiper-next'>
        <span className='material-icons'>arrow_forward</span>
      </div>
    </PromotionForm>
  );
};

export default Promotion;
