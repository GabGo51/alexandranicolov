import React from "react";
import styled from "styled-components";
import arrow from "./img/arrow.png";

const BackTop = () => {
  return (
    <Button
      className="back-top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <img src={arrow} alt="arrow" />
    </Button>
  );
};

const Button = styled.button`
  img {
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
    }
  }
`;

export default BackTop;
