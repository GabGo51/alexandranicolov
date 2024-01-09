import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import nuage from "./img/nuage.png";

const Home = () => {
  const containerRef = useRef(null);

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
        <img src={nuage} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
        <img src={nuage} alt="Cloud" />
      </div>
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
    }
  }
`;

export default Home;