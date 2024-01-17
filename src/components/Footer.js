import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Container>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        onClick={()=> handleNavigate('/contact')}
      >
        Contact
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Vimeo
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Instagram
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Facebook
      </motion.a>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px 0;
  display: flex;
  width: 90%;

  a {
    margin-right: 2.5vw;
    margin-top: 50px;
    font-size: clamp(14px, 3vw, 20px);
    @media (max-width: 1000px) {
      margin-right: 25px;
    }
  }
`;

export default Footer;
