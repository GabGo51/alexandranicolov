import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";
import fairy from "./img/fairy.png";

//header component with title\logo bring back home and nav to other pages
const Header = () => {

  const { hover, normal } = useContext(MouseContext);

  const [open, setOpen] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
    });
  };


  return (
    //for dark mode 
    <Container isFilm={location.pathname === "/film"}>
      <nav>
        <motion.h1
          onMouseEnter={hover}
          onMouseLeave={normal}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onClick={() => {
            setOpen(false);
            handleNavigate("/");
          }}
        >
          Alexandra Nicolov
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <button
            onMouseEnter={hover}
            onMouseLeave={normal}
            className="main-b"
            onClick={() => setOpen(!open)}
          >
            Photo {open ? <p className="icon">-</p> : <p className="icon">+</p>}
          </button>
          {/* need for exit prop in framer */}
          <AnimatePresence>
            {open && (
              <motion.div className="extra">
                <motion.button
                  onMouseEnter={hover}
                  onMouseLeave={normal}
                  key={"film"}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  onClick={() => {
                    setOpen(false);
                    handleNavigate("/photo");
                  }}
                >
                  <p>Pellicule</p>
                </motion.button>
                <motion.button
                  onMouseEnter={hover}
                  onMouseLeave={normal}
                  key={"corpo"}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  onClick={() => {
                    setOpen(false);
                    handleNavigate("/entreprise");
                  }}
                >
                  <p>Corporative</p>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.button
          onMouseEnter={hover}
          onMouseLeave={normal}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="main-b"
          onClick={() => {
            setOpen(false);
            handleNavigate("/film");
          }}
        >
          <p className="film-button">Film</p>
        </motion.button>
      </nav>
      <motion.img
            onMouseEnter={hover}
            onMouseLeave={normal}
            initial={{ opacity: 0, x: 40,  }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            onClick={() => {
              setOpen(false);
              handleNavigate("/");
            }}
            src={fairy}
            isFilm={location.pathname === "/film"}
          />
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  padding: 20px 0;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: clamp(14px, 3vw, 22px);
  font-family: NeueMedium;

  nav {
    display: flex;
    align-items: center;
  }

  img {
    transition: 500ms;
    width: 80px;

   

    filter: invert(${(props) => (props.isFilm ? "1" : "0")});

    &:hover {
      filter: invert(64%) sepia(8%) saturate(2197%) hue-rotate(297deg) brightness(103%) contrast(104%); /* Adjust hue-rotate for the desired pink shade */
    }

    @media (max-width: 400px) {
      width:60px;
    }
    @media (max-width: 350px) {
      width:50px;
    }
  }

  h1 {
    transition: 500ms;
    font-size: clamp(14px, 3vw, 24px);
    
    @media (max-width: 700px) {
      margin-right: -20px;
    }

    &:hover{
      color:#ff8fab ;
    }
  }

  button {
    all: unset;
    white-space: nowrap;
    margin: 2px 40px;

    p {
      transition: 500ms;

      &:hover {
        transform: translateX(5%);
        color:#ff8fab ;
      }
    }

    .film-button {

      &:hover {
        transform: translateX(20%);
        color:#ff8fab ;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .extra {
    position: absolute;
    bottom: -60px;
    transform: translateX(10%);

    @media (max-width: 700px) {
      bottom: -60px;
    }
    @media (max-width: 500px) {
      bottom: -45px;
    }
  }

  .main-b {
    transition: 500ms;
    display: flex;
    transform: translateX(30%);

    &:hover {
      transform: translateX(40%);
      color:#ff8fab ;
    }

    .icon {
      margin-left: 10px;

      &:hover {
      color:#ff8fab ;
    }
    }
  }
`;

export default Header;
