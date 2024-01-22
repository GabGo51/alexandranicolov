import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import fairy from "./img/fairy.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
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
    <Container isFilm={location.pathname === "/film"}>
      <motion.img
        initial={{ opacity: 0, x: -40, y: 55 }}
        whileInView={{ opacity: 1, x: -20 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        onClick={() => {
          setOpen(false);
          handleNavigate("/");
        }}
        src={fairy}
        isFilm={location.pathname === "/film"}
      />
      <motion.h1
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
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button className="main-b" onClick={() => setOpen(!open)}>
          Photo {open ? <p className="icon">-</p> : <p className="icon">+</p>}
        </button>
        <AnimatePresence>
          {open && (
            <motion.div className="extra">
              <motion.button
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
                <p>Photographie sur pellicule</p>
              </motion.button>
              <motion.button
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
                <p>Photographie corporative</p>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.button
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
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  padding: 20px 0;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 70px;
  font-size: clamp(14px, 3vw, 22px);
  font-family: NeueMedium;

  img {
    transition: 500ms;
    width: 70px;
    position: absolute;
    filter: invert(${(props) => (props.isFilm ? "1" : "0")});
  }

  h1 {
    font-size: clamp(14px, 3vw, 24px);
    @media (max-width: 700px) {
      margin-right: -20px;
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
      }
    }

    .film-button {
      &:hover {
        transform: translateX(20%);
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    position: relative;
    p {
    }
  }

  .extra {
    position: absolute;
    bottom: -60px;

    @media (max-width: 700px) {
      bottom: -45px;
    }
  }

  .main-b {
    transition: 500ms;
    display: flex;
    &:hover {
      transform: translateX(10%);
    }
    p {
      margin-left: 10px;
    }
  }
`;

export default Header;
