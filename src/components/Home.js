import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import nuage from "./img/nuage.png";
import ImageOverlay from "./Overlay";
import { useImageContext } from "../context/PhotoContext";
import test from "./img/test.jpg";

const Home = () => {
  const containerRef = useRef(null);
  const { selectedImage, openOverlay, closeOverlay } = useImageContext();


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
        <img onClick={() => openOverlay(nuage)} src={nuage} alt="Cloud" />
        <img onClick={() => openOverlay(test)} src={test} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
      </div>
      {selectedImage && <ImageOverlay onClose={closeOverlay} />}
    </Container>
  );
};

const Container = styled.div`
  
  width: 100vw;
  
  overflow-y: hidden;
  overflow-x: auto;

  div {
    padding: 20px 0;
    
    display: flex;
    gap: 10px;
    white-space: nowrap;
    img {
      height: 400px;
      margin: 0 40px;
    }
  }
`;

export default Home;