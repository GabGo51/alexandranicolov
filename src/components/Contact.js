import React from "react";
import styled from "styled-components";
import contact from "./img/contact.jpg";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

const Contact = () => {
  const { hover, normal } = useContext(MouseContext);
  return (
    <Container>
      <img src={contact} alt="alexe" />
      <a onMouseEnter={hover} onMouseLeave={normal} href="mailto:alexandranicolov@gmail.com">
        {" "}
        alexandranicolov@gmail.com
      </a>
      <a onMouseEnter={hover} onMouseLeave={normal} href="tel:+15144022940">
        514-402-2940
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

  img {
    transition: 1s;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    &:hover {
      transform: rotate(360deg);
    }
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

export default Contact;
