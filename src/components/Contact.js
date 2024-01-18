import React from "react";
import styled from "styled-components";
import contact from './img/contact.jpg'
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <Container>
      <img   src={contact} alt="alexe"/>
      <p> alexandranicolov@gmail.com</p>
      <p>514-402-2940</p>
    </Container>
  );
};

const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 26px;

  img{
    transition: 1s;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    &:hover{
      transform: rotate(360deg);
    }
  }
`;

export default Contact;
