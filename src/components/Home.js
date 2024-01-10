import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import nuage from "./img/nuage.png";
import ImageOverlay from "./Overlay";
import { useImageContext } from "../context/PhotoContext";
import test from "./img/test.jpg";
import test2 from "./img/test2.jpg";

const Home = () => {
  const ref = useRef()
  
  const { selectedImage, openOverlay, closeOverlay } = useImageContext();

  let [scrollAmount, setScrollAmount] = useState(0);

  const controls = useAnimation();

  const handleWheel = (event) => {
    if(scrollAmount<0) {
      scrollAmount = 0
    }
    if(scrollAmount>ref.current.offsetWidth *4){
      scrollAmount= 0
    }
    
    const newScrollAmount = scrollAmount + event.deltaY;
    setScrollAmount(newScrollAmount);
    controls.start({ x: -newScrollAmount, transition: { type: "spring", damping: 10, stiffness: 50 } });
  };

  useEffect(() => {
    
    controls.start({ x: -scrollAmount, transition: { type: "spring", damping: 10, stiffness: 50 } });
  }, [controls, scrollAmount]);

  return (
    <Container onWheel={handleWheel}>
      <div className="frame">
        <ScrollableDiv ref={ref}  animate={controls}>
        <img onClick={() => openOverlay(nuage)} src={nuage} alt="Cloud" />
        <img onClick={() => openOverlay(test)} src={test} alt="Cloud" />
        <img onClick={() => openOverlay(test2)} src={test2} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
        <img onClick={() => openOverlay(test2)} src={test2} alt="Cloud" />
        <img onClick={() => openOverlay(test)} src={test} alt="Cloud" />
      </ScrollableDiv>
      </div>
      
      {selectedImage && <ImageOverlay onClose={closeOverlay} />}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .frame{
    width: 90%;
    overflow: hidden;
  }
`;

const ScrollableDiv = styled(motion.div)`
  
  display: flex;
  white-space: nowrap;


  img {
    height: 60vh;
    margin-right: 80px;
    @media (max-width: 700px) {
      height: 200px;
    }
  }
`;

export default Home;