import React from "react";
import styled from "styled-components";
import arrow from "./img/arrow.png";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

const BackTop = () => {
  const { hover, normal } = useContext(MouseContext);
  return (
    <Button
      onMouseEnter={hover}
      onMouseLeave={normal}
      className="back-top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <img className="arrow" src={arrow} alt="arrow" />
    </Button>
  );
};

const Button = styled.button`
  .arrow {
    transition: 500ms;
    object-fit: contain;
    width: 50px;
    height: 50px;

    @media (max-width: 700px) {
      width: 40px;
      height: 40px;
    }

    &:hover {
      transform: translateY(-20%);
      filter: invert(64%) sepia(8%) saturate(2197%) hue-rotate(297deg) brightness(103%) contrast(104%); /* Adjust hue-rotate for the desired pink shade */
    }
  }
`;

export default BackTop;
