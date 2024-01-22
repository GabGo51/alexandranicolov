import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import fairy from "./img/fairy.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";
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
          transition={{ duration: 0.7, delay: 0.2 }}
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
                  <p>Photographie sur pellicule</p>
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
                  <p>Photographie corporative</p>
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

    .icon {
      margin-left: 10px;
    }
  }
`;

export default Header;
