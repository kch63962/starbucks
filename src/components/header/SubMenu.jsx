import { Link } from "react-router-dom";
import { menuItems } from "../../containers/Header";
import styled from "styled-components";
import { useRef, useState } from "react";

export const SubMenuContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  display: flex;
`;

export const Ul = styled.ul`
  font-family: Arial, sans-serif;
  display: flex;
  li {
    position: relative;
  }
  li::before {
    content: "";
    width: 1px;
    height: 12px;
    background-color: #e5e5e5;
    /* background-color: red; */
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  li:first-child::before {
    display: none;
  }
`;

export const SubMenuLink = styled(Link)`
  padding: 11px 16px;
  font-size: 13px;
  display: block;
  color: #656565;
  &:hover {
    color: #000;
  }
`;

export const Search = styled.div`
  position: relative;
  height: 34px;
  input {
    width: 36px;
    height: inherit;
    padding: 4px 10px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 5px;
    outline: none;
    background-color: #fff;
    color: #777;
    font-size: 12px;
    transition: width 0.4s;
  }
  .material-icons {
    height: 24px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 5px;
    margin: auto;
  }
`;

const SubMenu = () => {
  const inputRef = useRef();
  const [search, setSearch] = useState(false);

  return (
    <SubMenuContainer>
      <Ul>
        {menuItems.map((item) => (
          <li key={item.text}>
            <SubMenuLink to={item.to}>{item.text}</SubMenuLink>
          </li>
        ))}
      </Ul>
      <Search>
        <input type='text' ref={inputRef} />
        <span
          className='material-icons'
          onClick={() => {
            setSearch(!search);
            if (search) {
              inputRef.current.style.width = "36px";
              inputRef.current.style.borderColor = "#ccc";
            } else {
              inputRef.current.style.width = "190px";
              inputRef.current.style.borderColor = "#669900";
            }
          }}
        >
          search
        </span>
      </Search>
    </SubMenuContainer>
  );
};

export default SubMenu;
