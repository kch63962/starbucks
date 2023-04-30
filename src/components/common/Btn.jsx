import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const BtnLink = styled(Link)`
  animation: ${fadeIn} 1s ease-in-out forwards;
  width: 130px;
  padding: 10px;
  border: 2px solid #333;
  border-radius: 4px;
  color: #333;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  transition: 0.4s;
  color: ${({ color }) => color};
  border-color: ${({ bordercolor }) => bordercolor};
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  &:hover {
    color: ${({ hovercolor }) => hovercolor};
    background-color: ${({ hoverbg }) => hoverbg};
  }
`;

const Btn = ({
  color,
  bordercolor,
  text,
  hovercolor,
  hoverbg,
  style,
  backgroundcolor,
}) => {
  return (
    <BtnLink
      to="/"
      style={style}
      color={color}
      backgroundcolor={backgroundcolor}
      bordercolor={bordercolor}
      hovercolor={hovercolor}
      hoverbg={hoverbg}
    >
      {text}
    </BtnLink>
  );
};

export default Btn;
