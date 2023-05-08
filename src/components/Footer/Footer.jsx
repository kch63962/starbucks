import { Link } from "react-router-dom";
import styled from "styled-components";
import Btn from "../common/Btn";
import Logo from "../../images/starbucks_logo_only_text.png";

const FooterForm = styled.div`
  background-color: #272727;
  border-top: 1px solid #272727;
`;

const Inner = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  padding: 40px 0 60px 0;
  img {
    margin: 30px auto 0;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
`;

const Li = styled.li`
  position: relative;
  &::before {
    content: "";
    width: 3px;
    height: 3px;
    background-color: #555;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -1px;
    margin: auto;
  }
  &:last-child::before {
    display: none;
  }
`;

const LiLink = styled(Link)`
  display: block;
  color: #ccc;
  font-size: 12px;
  font-weight: 700;
  padding: 15px;
`;

const BtnGroup = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const Info = styled.div`
  margin-top: 30px;
  text-align: center;
  span {
    margin-right: 20px;
    color: #999;
    font-size: 12px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const CopyRight = styled.p`
  color: #999;
  font-size: 12px;
  text-align: center;
  margin-top: 12px;
`;

const Footer = () => {
  return (
    <FooterForm>
      <Inner>
        <Menu>
          <Li>
            <LiLink to='/' style={{ color: "#669900" }}>
              개인정보처리방침
            </LiLink>
          </Li>
          <Li>
            <LiLink to='/'>영상정보처리기기 운영관리 방침</LiLink>
          </Li>
          <Li>
            <LiLink to='/'>홈페이지 이용약관</LiLink>
          </Li>
          <Li>
            <LiLink to='/'>위치정보 이용약관</LiLink>
          </Li>
          <Li>
            <LiLink to='/'>스타벅스 카드 이용약관</LiLink>
          </Li>
          <Li>
            <LiLink to='/'>윤리경영 핫라인</LiLink>
          </Li>
        </Menu>
        <BtnGroup>
          <Btn
            text={"찻아오시는 길"}
            style={{ fontSize: "12px", marginRight: "10px" }}
            color={"#fff"}
            bordercolor={"#fff"}
            hoverbg={"#fff"}
            hovercolor={"#333"}
          />
          <Btn
            text={"신규입정제의"}
            style={{ fontSize: "12px", marginRight: "10px" }}
            color={"#fff"}
            bordercolor={"#fff"}
            hoverbg={"#fff"}
            hovercolor={"#333"}
          />
          <Btn
            text={"사이트 맵"}
            style={{ fontSize: "12px" }}
            color={"#fff"}
            bordercolor={"#fff"}
            hoverbg={"#fff"}
            hovercolor={"#333"}
          />
        </BtnGroup>
        <Info>
          <span>사업자등록번호 201-81-21515</span>
          <span>(주)스타벅스 코리아 대표이사 이석구</span>
          <span>TEL : 02) 3015-1100 / FAX : 02) 3015-1106</span>
          <span>개인정보 책임자 : 강기원</span>
        </Info>
        <CopyRight>
          &copy; 2023 Starbucks Coffee Company. All Rights Reserved.
        </CopyRight>
        <img src={Logo} alt='STAR BUCKS' />
      </Inner>
    </FooterForm>
  );
};

export default Footer;
