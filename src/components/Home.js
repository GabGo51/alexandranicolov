import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import nuage from "./img/nuage.png";
import ImageOverlay from "./Overlay";
import { useImageContext } from "../context/PhotoContext";
import test from "./img/test.jpg";
import test2 from "./img/test2.jpg";

const Home = () => {
  const { selectedImage, openOverlay, closeOverlay } = useImageContext();

  const [scrollAmount, setScrollAmount] = useState(0);

  const controls = useAnimation();

  const handleWheel = (event) => {
    const newScrollAmount = scrollAmount + event.deltaY;
    // Ensure scrollAmount stays within the range [0, 2000]
    setScrollAmount(Math.max(0, Math.min(newScrollAmount, 2500)));
    controls.start({ x: -scrollAmount, transition: { type: "spring", damping: 10, stiffness: 50 } });
  };

  useEffect(() => {
    controls.start({ x: -scrollAmount, transition: { type: "spring", damping: 10, stiffness: 50 } });
  }, [controls, scrollAmount]);

  return (
    <Container onWheel={handleWheel}>
      <ScrollableDiv  animate={controls}>
        <img onClick={() => openOverlay(nuage)} src={nuage} alt="Cloud" />
        <img onClick={() => openOverlay(test)} src={test} alt="Cloud" />
        <img onClick={() => openOverlay(test2)} src={test2} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
      </ScrollableDiv>
      {selectedImage && <ImageOverlay onClose={closeOverlay} />}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
`;

const ScrollableDiv = styled(motion.div)`
  padding: 20px 0;
  display: flex;
  gap: 10px;
  white-space: nowrap;
  img {
    height: 50vh;
    margin: 0 40px;

    @media (max-width: 700px) {
      height: 200px;
    }
  }
`;

export default Home;