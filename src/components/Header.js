import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState();

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Container>
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
        transition={{ duration: 0.7, delay:0.2 }}
        viewport={{ once: true }}
        className="photo-box"
      >
        {open ? <p className="icon">-</p> : <p className="icon">+</p>}
        <button className="main-b" onClick={() => setOpen(!open)}>
          Photo
        </button>
        <AnimatePresence>
          {open && (
            <motion.div className="extra">
              <motion.button
                key={"film"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                onClick={() => {
                  setOpen(false);
                  handleNavigate("/photo");
                }}
              >
                Photographie sur pellicule
              </motion.button>
              <motion.button
                key={"corpo"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                onClick={() => {
                  setOpen(false);
                  handleNavigate("/entreprise");
                }}
              >
                Contras Corpo
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay:0.3 }}
        viewport={{ once: true }}
        className="main-b"
        onClick={() => {
          setOpen(false);
          handleNavigate("/film");
        }}
      >
        Film
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

  h1 {
    font-size: clamp(18px, 3vw, 24px);
    @media (max-width: 700px) {
      margin-right: -20px;
    }
  }

  button {
    all: unset;
    
    
    white-space: nowrap;
    margin: 2px 40px;
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
  }

  .photo-box{
    position: relative;

  }

  .icon {
    position: absolute;
    right: 20px;
    bottom: 1px;
  }

  .main-b {
    transition: 500ms;
    &:hover {
      transform: translateX(10%);
    }
  }
`;

export default Header;
