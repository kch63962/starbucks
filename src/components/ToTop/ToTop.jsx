import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const ToTopForm = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9;
  width: 42px;
  height: 42px;
  background-color: #333;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.scrollY < 500 ? "none" : "flex")};
`;

const ToTop = () => {
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ToTopForm onClick={scrollToTop} scrollY={scrollY}>
      <div className="material-icons">arrow_upward</div>
    </ToTopForm>
  );
};

export default ToTop;
