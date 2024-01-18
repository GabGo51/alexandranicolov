import React, { useEffect, useRef } from "react";
import styled from "styled-components";

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

const HomePhone = () => {
  const containerRef = useRef(null);
  const { selectedImage, openOverlay, closeOverlay, setSize } = useImageContext();

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const handleScroll = (e) => {
        container.scrollLeft += e.deltaY;
      };

      container.addEventListener("wheel", handleScroll);

      return () => {
        container.removeEventListener("wheel", handleScroll);
      };
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <div>
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
      </div>
      {selectedImage && <ImageOverlay onClose={closeOverlay} />}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  margin-right: -10px;
  overflow-y: hidden;
  overflow-x: auto;

  div {
    padding: 20px 0;

    display: flex;
    gap: 10px;
    white-space: nowrap;
    img {
      height: 50vh;
      margin: 0 10px;

      @media (max-width: 700px) {
        height: 300px;
      }
    }
  }
`;

export default HomePhone;
