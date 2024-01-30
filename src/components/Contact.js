import React from "react";
import styled from "styled-components";
import contact from "./img/contact.jpg";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";
import {motion} from 'framer-motion'


//contact page with phone email and photo(LKd link)
const Contact = () => {
  const { hover, normal } = useContext(MouseContext);

  return (
    <Container>
      <a
        target="#"
        href="https://www.linkedin.com/in/alexandra-nicolov-262067292/"
      >
        <motion.div initial={{y:-60}} animate={{y:0}} transition={{duration:1}} onMouseEnter={hover} onMouseLeave={normal}>
          <motion.img initial={{scale:1}} animate={{scale:1.8, y:-140}} transition={{duration:0.5, delay:1}} src={contact} alt="alexe" />
        </motion.div>
      </a>

      <motion.a initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1}}
        onMouseEnter={hover}
        onMouseLeave={normal}
        href="mailto:alexandranicolov@gmail.com"
      >
        <p>alexandranicolov@gmail.com</p>
      </motion.a >
      <motion.a initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1, delay:0.2}} onMouseEnter={hover} onMouseLeave={normal} href="tel:+15144022940">
        <p>514-402-2940</p>
      </motion.a>
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
  div {
    overflow: hidden;
    margin-bottom: 10px;
    height: 50vh;
  }

  img {
    transition: 1s;
    width: auto;
    height: 50vh;
    margin-bottom: 10px;
    
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
