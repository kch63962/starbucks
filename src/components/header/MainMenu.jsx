import styled from "styled-components";
import { mainMenu } from "../../containers/Header";
import patternImg from "../../images/main_menu_pattern.jpg";

export const MainMenuUl = styled.ul`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
`;

export const ItemLi = styled.li`
  &:hover {
    .itemName {
      background-color: #2c2a29;
      color: #669900;
      border-radius: 6px 6px 0 0;
    }
    .itemContents {
      display: block;
    }
  }
`;

export const ItemName = styled.div`
  padding: 10px 20px 34px 20px;
  font-family: Arial, sans-serif;
  font-size: 13px;
`;

export const ItemContents = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  display: none;
`;

export const ContentMenu = styled.div`
  background-color: #2c2a29;
`;

export const Inner = styled.ul`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  padding: 20px 0;
  display: flex;
`;

export const ContentsMenuLi = styled.li`
  width: 220px;
  h4 {
    padding: 3px 0 12px 0;
    font-size: 14px;
    color: #fff;
  }
  li {
    padding: 5px 0;
    font-size: 12px;
    color: #999;
    cursor: pointer;
  }
  li:hover {
    color: #669900;
  }
`;

export const ContentsTexture = styled.div`
  padding: 26px 0;
  font-size: 12px;
  background-image: url(${patternImg});
`;

export const Inner2 = styled.div`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  h4 {
    color: #999;
    font-weight: 900;
  }
  p {
    color: #64a70b;
    margin: 4px 0 14px;
  }
`;

const MainMenu = () => {
  return (
    <MainMenuUl>
      {mainMenu.map((item, index) => {
        return (
          <ItemLi key={index}>
            <ItemName className='itemName'>{item.name}</ItemName>
            <ItemContents className='itemContents'>
              <ContentMenu>
                <Inner>
                  {item.contents.map((menu, index) => {
                    return (
                      <ContentsMenuLi key={index}>
                        <h4>{menu.title}</h4>
                        <ul>
                          {menu.items.map((i, index) => {
                            return <li key={index}>{i}</li>;
                          })}
                        </ul>
                      </ContentsMenuLi>
                    );
                  })}
                </Inner>
              </ContentMenu>
              <ContentsTexture>
                <Inner2>
                  {item.des.map((des, index) => {
                    return (
                      <div key={index}>
                        <h4>{des.maindes}</h4>
                        <p>{des.subdes}</p>
                      </div>
                    );
                  })}
                </Inner2>
              </ContentsTexture>
            </ItemContents>
          </ItemLi>
        );
      })}
    </MainMenuUl>
  );
};

export default MainMenu;
