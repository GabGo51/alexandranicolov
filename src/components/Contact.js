import React from "react";
import styled from "styled-components";
import contact from "./img/contact.jpg";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

const Contact = () => {
  const { hover, normal } = useContext(MouseContext);

  return (
    <Container>
      <a target="#" href="https://www.linkedin.com/in/alexandra-nicolov-262067292/">
        <div>
        <img src={contact} alt="alexe" />
      </div>
      </a>
      
      
      <a
        onMouseEnter={hover}
        onMouseLeave={normal}
        href="mailto:alexandranicolov@gmail.com"
      >
        <p>alexandranicolov@gmail.com</p>
      </a>
      <a onMouseEnter={hover} onMouseLeave={normal} href="tel:+15144022940">
        <p>514-402-2940</p>
      </a>
    </Container>
  );
};

const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 26px;
  div{
    overflow: hidden;
margin-bottom: 10px;
height: 50vh;
  }

  img {
    transition: 1s;
    width: auto;
    height: 50vh;
    margin-bottom: 10px;
    &:hover {
      scale: 2;
      transform: translateY(-20%);
    }
  }

  a {
    color: black;
    text-decoration: none;
    font-size: clamp(16px, 3vw, 20px);

    p {
      transition: 500ms;
      &:hover {
        filter: invert(64%) sepia(8%) saturate(2197%) hue-rotate(297deg)
          brightness(103%) contrast(104%); /* Adjust hue-rotate for the desired pink shade */
      }
    }
  }
`;

export default Contact;
