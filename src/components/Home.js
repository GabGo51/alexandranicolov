import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import ImageOverlay from "./Overlay";
import { useImageContext } from "../context/PhotoContext";
import home1 from './img/home1.jpg'
import home2 from './img/home2.jpg'
import home3 from './img/home3.jpg'
import home4 from './img/home4.jpg'
import home5 from './img/home5.jpg'
import home6 from './img/home6.jpg'
import home7 from './img/home7.jpg'
import home8 from './img/home8.jpg'
import home9 from './img/home9.jpg'
import home10 from './img/home10.jpg'


const Home = () => {
  const ref = useRef();

  const { selectedImage, openOverlay, closeOverlay, setSize } = useImageContext();

  let [scrollAmount, setScrollAmount] = useState(0);

  const controls = useAnimation();

  const handleWheel = (event) => {
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    if (scrollAmount > ref.current.offsetWidth * 4.5) {
      scrollAmount = 0;
    }

    const newScrollAmount = scrollAmount + event.deltaY;
    setScrollAmount(newScrollAmount);
    controls.start({
      x: -newScrollAmount,
      transition: { type: "spring", damping: 10, stiffness: 50 },
    });
  };

  useEffect(() => {
    controls.start({
      x: -scrollAmount,
      transition: { type: "spring", damping: 10, stiffness: 50 }
    });
  }, [controls, scrollAmount]);

  return (
    <Container onWheel={handleWheel}>
      <motion.div initial={{ y:40}} animate ={{ y:0 }} transition={{duration:1}} className="frame">
        <ScrollableDiv
          ref={ref}
          animate={controls}
        >
          <img onClick={() => openOverlay(home1)} src={home1} alt="Cloud" />
          <img onClick={() => openOverlay(home2)} src={home2} alt="Cloud" />
          <img onClick={() => openOverlay(home3)} src={home3} alt="Cloud" />
          <img onClick={() => openOverlay(home4)} src={home4} alt="Cloud" />
          <img onClick={() => {openOverlay(home5);setSize(true)}} src={home5} alt="Cloud" />
          <img onClick={() => openOverlay(home6)} src={home6} alt="Cloud" />
          <img onClick={() => openOverlay(home7)} src={home7} alt="Cloud" />
          <img onClick={() => openOverlay(home8)} src={home8} alt="Cloud" />
          <img onClick={() => openOverlay(home9)} src={home9} alt="Cloud" />
          <img onClick={() => openOverlay(home10)} src={home10} alt="Cloud" />
          
        </ScrollableDiv>
      </motion.div>

      {selectedImage && <ImageOverlay onClose={closeOverlay} />}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 50vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .frame {
    width: 90%;
    overflow: hidden;
    transform-origin: bottom;
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
