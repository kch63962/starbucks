import NoticeLine from "../components/Notice/NoticeLine";
import Promotion from "../components/Notice/Promotion";
import PromotionSlide1 from "../images/promotion_slide1.jpg";
import PromotionSlide2 from "../images/promotion_slide2.jpg";
import PromotionSlide3 from "../images/promotion_slide3.jpg";
import PromotionSlide4 from "../images/promotion_slide4.jpg";
import PromotionSlide5 from "../images/promotion_slide5.jpg";

export const swiperItem = [
  {
    text: "크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내",
  },
  {
    text: "[당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트",
  },
  {
    text: "스타벅스커피 코리아 애플리케이션 버전 업데이트 안내",
  },
  {
    text: "[담청자 발표] 뉴이어 전자영수증 이벤트",
  },
];

export const promotionItem = [
  {
    src: PromotionSlide1,
    alt: "2021 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!",
    text: "자세히 보기",
  },
  {
    src: PromotionSlide2,
    alt: "기간 내 스타벅스 카드 e-Gift를 3만원 이상 선물 시, 아메리카노 e-쿠폰을 드립니다.",
    text: "자세히 보기",
  },
  {
    src: PromotionSlide3,
    alt: "뉴이어 푸드와 제조 음료를 세트로 구매 시, 뉴이어 음료 BOGO(1+1) 쿠폰을 드립니다.",
    text: "자세히 보기",
  },
  {
    src: PromotionSlide4,
    alt: "신년 MD 상품 포한 3만원 이상 구매 고객께 아메리카노(톨사이즈) 쿠폰을 드립니다.",
    text: "자세히 보기",
  },
  {
    src: PromotionSlide5,
    alt: "2017 DIGITAL LUCKY DRAW 100% 당첨의 행운을 드립니다!",
    text: "자세히 보기",
  },
];

const Notice = () => {
  return (
    <div>
      <NoticeLine />
      <Promotion />
    </div>
  );
};

export default Notice;
