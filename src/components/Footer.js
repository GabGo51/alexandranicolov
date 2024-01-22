import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { hover, normal } = useContext(MouseContext);
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Container>
      <a
        onMouseEnter={hover}
        onMouseLeave={normal}
        to="/contact"
        onClick={() => handleNavigate("/contact")}
        isFilm={location.pathname === "/film"}
      >
        <p>Contact</p>
      </a>
      <a
        onMouseEnter={hover}
        onMouseLeave={normal}
        to="https://vimeo.com/user63054265"
        target="_blank"
        isFilm={location.pathname === "/film"}
      >
        <p>Vimeo</p>
      </a>
      <a
        onMouseEnter={hover}
        onMouseLeave={normal}
        to="https://www.instagram.com/alex.nicolov/"
        target="_blank"
        isFilm={location.pathname === "/film"}
      >
        <p>Instagram</p>
      </a>
      <a
        onMouseEnter={hover}
        onMouseLeave={normal}
        to="https://www.facebook.com/alex.nicolov.7/"
        target="_blank"
        isFilm={location.pathname === "/film"}
      >
        <p>Facebook</p>
      </a>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px 0;
  display: flex;
  width: 90%;

  a {
    color: ${(props) => (props.isFilm ? "white" : "black")};
    text-decoration: none;
    margin-right: 2.5vw;
    margin-top: 50px;
    font-size: clamp(14px, 3vw, 20px);

    @media (max-width: 1000px) {
      margin-right: 25px;
    }
  }

  p {
    transition: 500ms;

    &:hover {
      transform: translateX(15%);
    }
  }
`;

export default Footer;
