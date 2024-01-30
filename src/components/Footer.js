import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";


//footer component with social and contact links
const Footer = () => {
  
  const location = useLocation();

  const { hover, normal } = useContext(MouseContext);

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    //for darkmode
    <Container isFilm={location.pathname === "/film"}>
      <div
        className="navlink"
        onMouseEnter={hover}
        onMouseLeave={normal}
        to="/contact"
        onClick={() => handleNavigate("/contact")}
        isFilm={location.pathname === "/film"}
      >
        <p>Contact</p>
      </div>
      <a
        className="navlink"
        onMouseEnter={hover}
        onMouseLeave={normal}
        href="https://vimeo.com/user63054265"
        target="#"
        isFilm={location.pathname === "/film"}
      >
        <p>Vimeo</p>
      </a>
      <a
        className="navlink"
        onMouseEnter={hover}
        onMouseLeave={normal}
        href="https://www.instagram.com/alex.nicolov/"
        target="#"
        isFilm={location.pathname === "/film"}
      >
        <p>Instagram</p>
      </a>
      <a
        className="navlink"
        onMouseEnter={hover}
        onMouseLeave={normal}
        href="https://www.facebook.com/alex.nicolov.7/"
        target="#"
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

  .navlink {
    color: ${(props) => (props.isFilm ? "white" : "black")};
    text-decoration: none;
    margin-right: 2.5vw;
    margin-top: 50px;
    font-size: clamp(14px, 3vw, 20px);
    font-weight: bold;
    @media (max-width: 1000px) {
      margin-right: 25px;
    }
  }

  p {
    transition: 500ms;

    &:hover {
      transform: translateX(15%);

      filter: invert(64%) sepia(8%) saturate(2197%) hue-rotate(297deg)
        brightness(103%) contrast(104%); /* Adjust hue-rotate for the desired pink shade */
    }
  }
`;

export default Footer;
