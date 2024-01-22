import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Container>
      <FooterLink
        to="/contact"
        onClick={() => handleNavigate("/contact")}
        isFilm={location.pathname === "/film"}
      >
        <p>Contact</p>
      </FooterLink>
      <FooterLink
        to="https://vimeo.com/user63054265"
        target="_blank"
        isFilm={location.pathname === "/film"}
      >
        <p>Vimeo</p>
      </FooterLink>
      <FooterLink
        to="https://www.instagram.com/alex.nicolov/"
        target="_blank"
        isFilm={location.pathname === "/film"}
      >
        <p>Instagram</p>
      </FooterLink>
      <FooterLink
        to="https://www.facebook.com/alex.nicolov.7/"
        target="_blank"
        isFilm={location.pathname === "/film"}
      >
        <p>Facebook</p>
      </FooterLink>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px 0;
  display: flex;
  width: 90%;
`;

const FooterLink = styled(motion.a)`
  color: ${(props) => (props.isFilm ? "white" : "black")};
  text-decoration: none;
  margin-right: 2.5vw;
  margin-top: 50px;
  font-size: clamp(14px, 3vw, 20px);

  @media (max-width: 1000px) {
    margin-right: 25px;
  }

  p {
    transition: 500ms;

    &:hover {
      transform: translateX(15%);
    }
  }
`;

export default Footer;