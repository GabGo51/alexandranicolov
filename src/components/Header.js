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
      <h1 onClick={() => {
                  setOpen(false);
                  handleNavigate("/");
                }}>Alexandra Nicolov</h1>
      <div>
        {open ? <p className="icon">-</p>: <p className="icon">+</p>}
        <button onClick={() => setOpen(!open)}>Photo</button>
        <AnimatePresence>
          {open && (
            <motion.div
              className="extra"
              initial={{  y: -20 }}
              animate={{  y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay:0.1 }}
                onClick={() => {
                  setOpen(false);
                  handleNavigate("/photo");
                }}
              >
                Photographie sur pellicule
              </motion.button>
              <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay:0.2 }}
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
      </div>

      <button onClick={() => {
                  setOpen(false);
                  handleNavigate("/film");
                }}>Film</button>
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
  margin-bottom: 50px;

  h1 {
    font-size: clamp(18px, 3vw, 24px);
  }

  button {
    all: unset;
    margin: 0 60px;
    transition: 500ms;
    white-space: nowrap;
    margin: 2px 60px;
  }

  div {
    display: flex;
    flex-direction: column;
    position: relative;
    p{
      
    }
  }
  .extra {
    position: absolute;
    bottom: -50px;
  }

  .icon{
    position: absolute;
    right: 40px;
    bottom: 1px;
  }
`;

export default Header;
