import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import c4_1 from "./img/c4-1.jpg";
import c4_2 from "./img/c4-2.jpg";
import c4_3 from "./img/c4-3.jpg";
import c4_4 from "./img/c4-4.jpg";
import c4_5 from "./img/c4-5.jpg";
import c4_6 from "./img/c4-6.jpg";

const Corpo4 = () => {
  const ref = useRef();

  const { selectedImage, openOverlay, closeOverlay, setSize } =
    useImageContext();

  let [scrollAmount, setScrollAmount] = useState(0);

  const controls = useAnimation();

  const handleWheel = (event) => {
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    if (scrollAmount > ref.current.offsetWidth * 1.3) {
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
      transition: { type: "spring", damping: 10, stiffness: 50 },
    });
  }, [controls, scrollAmount]);
  return (
    <Container onWheel={handleWheel}>
      <motion.div
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="frame"
      >
        <ScrollableDiv ref={ref} animate={controls}>
          <img
            onClick={() => {
              openOverlay(c4_1);
              setSize(true);
            }}
            alt="corpo4"
            src={c4_1}
          />
          <img
            onClick={() => {
              openOverlay(c4_2);
              setSize(true);
            }}
            alt="corpo4"
            src={c4_2}
          />
          <img
            onClick={() => {
              openOverlay(c4_3);
              setSize(true);
            }}
            alt="corpo4"
            src={c4_3}
          />
          <img
            onClick={() => {
              openOverlay(c4_4);
              setSize(true);
            }}
            alt="corpo4"
            src={c4_4}
          />
          <img
            onClick={() => {
              openOverlay(c4_5);
              setSize(true);
            }}
            alt="corpo4"
            src={c4_5}
          />
          <img
            onClick={() => {
              openOverlay(c4_6);
              setSize(true);
            }}
            alt="corpo4"
            src={c4_6}
          />
        </ScrollableDiv>
      </motion.div>

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

export default Corpo4;
