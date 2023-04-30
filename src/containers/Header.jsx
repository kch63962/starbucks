import { Link } from "react-router-dom";
import MainMenu from "../components/header/MainMenu";
import SubMenu from "../components/header/SubMenu";
import Logo from "../images/starbucks_logo.png";
import styled from "styled-components";
import Badge from "../components/header/Badge";
import Badge1 from "../images/badge1.jpg";
import Badge2 from "../images/badge2.jpg";
import { useEffect, useState } from "react";

export const menuItems = [
  {
    text: "Sign In",
    to: "/",
  },
  {
    text: "My Starbucks",
    to: "/",
  },
  {
    text: "Customer Service & Ideas",
    to: "/",
  },
  {
    text: "Find a Store",
    to: "/",
  },
];

export const mainMenu = [
  {
    name: "COFFEE",
    contents: [
      {
        title: "커피",
        items: ["스타벅스 원두", "스타벅스 비아", "스타벅스 오리가미"],
      },
      {
        title: "에스프레소 음료",
        items: [
          "도피오",
          "에스프레소 마키아또",
          "아메리카노",
          "마키아또",
          "카푸치노",
          "라떼",
          "모카",
          "리스트레또 비안코",
        ],
      },
      {
        title: "커피 이야기",
        items: [
          "스타벅스 로스트 스팩트럼",
          "최상의 아라비카 원두",
          "한 잔의 커피가 완성되기까지",
          "클로버® 커피 추출 시스템",
        ],
      },
      {
        title: "최상의 커피를 즐기는 법",
        items: [
          "커피 프레스",
          "푸어 오버",
          "아이스 푸어 오버",
          "커피 메이커",
          "리저브를 매장에서 다양하게 즐기는 법",
        ],
      },
    ],
    des: [
      {
        maindes: "나와 어울리는 커피 찾기",
        subdes: "스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.",
      },
      {
        maindes: "최상의 커피를 즐기는 법",
        subdes: "여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.",
      },
    ],
  },
  {
    name: "MENU",
    contents: [
      {
        title: "음료",
        items: [
          "콜드 브루",
          "브루드 커피",
          "에스프레소",
          "프라푸치노",
          "블렌디드 음료",
          "스타벅스 피지오",
          "티(티바나)",
          "기타 제조 음료",
          "스타벅스 주스(병음료)",
        ],
      },
      {
        title: "푸드",
        items: [
          "베이커리",
          "케익",
          "샌드위치 & 샐러드",
          "따뜻한 푸드",
          "과일 & 요거트",
          "스낵 & 미니 디저트",
          "아이스크림",
        ],
      },
      {
        title: "상품",
        items: [
          "머그",
          "글라스",
          "플라스틱 텀블러",
          "스테인리스 텀블러",
          "보온병",
          "액세서리",
          "커피 용품",
          "패키지 티(티바나)",
        ],
      },
      {
        title: "카드",
        items: ["실물카드", "e-Gift 카드"],
      },
      {
        title: "메뉴 이야기",
        items: ["콜드 브루", "스타벅스 티바나"],
      },
    ],
    des: [
      {
        maindes: "스타벅스 티바나",
        subdes:
          "다양한 찻잎과 향신료 등 개성있는 재료로 새로운 맛과 향의 티를 선보입니다.",
      },
    ],
  },

  {
    name: "STORE",
    contents: [
      {
        title: "매장 찾기",
        items: ["퀵 검색", "지역 검색", "My 매장"],
      },
      {
        title: "매장 이야기",
        items: ["청담스타", "티바나 인스파이어드 매장", "파미에파크"],
      },
    ],
    des: [
      {
        maindes: "매장 찾기",
        subdes: "보다 빠르게 매장을 찾아보세요.",
      },
      {
        maindes: "청담스타",
        subdes: "스타벅스 1,000호점인 청담스타점을 만나보세요.",
      },
    ],
  },
  {
    name: "RESPONSIBILITY",
    contents: [
      {
        title: "지역 사회 참여 활동",
        items: [
          "회망배달 캠페인",
          "재능기부 카페 소식",
          "커뮤니티 스토어",
          "청년인재 양성",
          "우리 농산물 사랑 캠페인",
          "우리 문화 지키기",
        ],
      },
      {
        title: "환경보호 활동",
        items: [
          "환경 발자국 줄이기",
          "일회용 컵 없는 매장",
          "커피 원두 재활용",
        ],
      },
      {
        title: "윤리 구매",
        items: ["윤리적 원두 구매", "공정무역 인증", "커피 농가 지원 활동"],
      },
      {
        title: "글로벌 사회 공헌",
        items: ["윤리경영 보고서", "스타벅스 재단", "지구촌 봉사의 달"],
      },
    ],
    des: [
      {
        maindes: "커피원두 재활용",
        subdes: "스타벅스 커피 원두를 재활용 해보세요.",
      },
    ],
  },
  {
    name: "MY STARBUCKS REWARDS",
    contents: [
      {
        title: "마이 스타벅스 리워드",
        items: [
          "마이 스타벅스 리워드 소개",
          "등급 및 혜택",
          "스타벅스 별",
          "자주하는 질문",
        ],
      },
      {
        title: "스타벅스 카드",
        items: [
          "스타벅스 카드 소개",
          "스타벅스 카드 갤러리",
          "등록 및 조회",
          "충전 및 이용안내",
          "분실신고/환불신청",
          "자주하는 질문",
        ],
      },
      {
        title: "스타벅스 카드 e-Gift",
        items: [
          "스타벅스 카드 e-Gift 소개",
          "이용안내",
          "선물하기",
          "자주하는 질문",
        ],
      },
    ],
    des: [
      {
        maindes: "스타벅스 카드 등록하기",
        subdes: "카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.",
      },
    ],
  },
  {
    name: "WHAT'S NEW",
    contents: [
      {
        title: "프로모션 & 이벤트",
        items: [
          "전체",
          "스타벅스 카드",
          "마이 스타벅스 리워드",
          "온라인",
          "2017 스타벅스 플래너",
        ],
      },
      {
        title: "새소식",
        items: [
          "전체",
          "상품 출시",
          "스타벅스의 문화",
          "스타벅스 사회공헌",
          "스타벅스 카드출시",
        ],
      },
      {
        title: "매장별 이벤트",
        items: ["일반 매장", "신규 매장"],
      },
    ],
    des: [
      {
        maindes: "매장별 이벤트",
        subdes: "스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.",
      },
      {
        maindes: "소셜 스타벅스",
        subdes: "다양한 스타벅스 SNS 채널을 통해 스타벅스를 만나보세요!",
      },
    ],
  },
];

export const Inner = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  height: 120px;
`;

export const LogoLink = styled(Link)`
  height: 75px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: #f6f5f0;
  border-bottom: 1px solid #c8c8c8;
`;

export const Badges = styled.div`
  position: absolute;
  top: 132px;
  right: 12px;
  transition: opacity 0.6s;
  transition: display 0.6s;
  opacity: ${(props) => (props.scrollY > 500 ? "0" : "1")};
  display: ${(props) => (props.scrollY > 500 ? "none" : "block")};
`;

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setScrollY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer>
      <Inner>
        <LogoLink to="/">
          <img src={Logo} alt="STARBUCKS" />
        </LogoLink>
        <SubMenu />
        <MainMenu />
      </Inner>
      <Badges scrollY={scrollY}>
        <Badge src={Badge1} />
        <Badge src={Badge2} />
      </Badges>
    </HeaderContainer>
  );
};

export default Header;
