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
      <h1 onClick={() => handleNavigate("/")}>Alexandra Nicolov</h1>
      <div>
        <button onClick={() => setOpen(!open)}>Photo</button>
        {open && (
          <AnimatePresence>
          <motion.div
            className="extra"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <button>yo</button>
            <button>ahahahahah</button>
          </motion.div>
          </AnimatePresence>
        )}
      </div>

      <button onClick={() => handleNavigate("/film")}>Film</button>
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
  }

  div {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .extra {
    position: absolute;
    bottom: -50px;
  }
`;

export default Header;
