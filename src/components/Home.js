import React from "react";
import styled from "styled-components";


import ImageOverlay from "./Overlay";
import { useImageContext } from "../context/PhotoContext";
import home1 from "./img/home1.jpg";
import home2 from "./img/home2.jpg";
import home3 from "./img/home3.jpg";
import home4 from "./img/home4.jpg";
import home5 from "./img/home5.jpg";
import home6 from "./img/home6.jpg";
import home7 from "./img/home7.jpg";
import home8 from "./img/home8.jpg";
import home9 from "./img/home9.jpg";
import home10 from "./img/home10.jpg";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

const Home = () => {
  const { selectedImage, openOverlay, closeOverlay, setSize } =
    useImageContext();

    useEffect(() => {
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true, 
        direction:'horizontal',
      });
    
      return () => {
        scroll.destroy();
      };
    }, []); 

  return (
    <Container>
      <div data-scroll-container className="frame">
        <img data-scroll-section onClick={() => openOverlay(home1)} src={home1} alt="Cloud" />
        <img data-scroll-section onClick={() => openOverlay(home2)} src={home2} alt="Cloud" />
        <img data-scroll-section onClick={() => openOverlay(home3)} src={home3} alt="Cloud" />
        <img data-scroll-section onClick={() => openOverlay(home4)} src={home4} alt="Cloud" />
        <img data-scroll-section
          onClick={() => {
            openOverlay(home5);
            setSize(true);
          }}
          src={home5}
          alt="Cloud"
        />
        <img data-scroll-section onClick={() => openOverlay(home6)} src={home6} alt="Cloud" />
        <img data-scroll-section onClick={() => openOverlay(home7)} src={home7} alt="Cloud" />
        <img data-scroll-section onClick={() => openOverlay(home8)} src={home8} alt="Cloud" />
        <img data-scroll-section onClick={() => openOverlay(home9)} src={home9} alt="Cloud" />
        <img data-scroll-section onClick={() => openOverlay(home10)} src={home10} alt="Cloud" />
      </div>

      {selectedImage && <ImageOverlay onClose={closeOverlay} />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding:  0vw 5vw;
  
  .frame {
    max-width: 110%;
    display: grid;
    grid-auto-flow: column;
    
    overflow-x: scroll;
    scroll-behavior: smooth;
  }

  img {
    height:50vh;
    margin-right: 30px;
    @media (max-width: 700px) {
      height: 300px;
    }
  }
`;

export default Home;
