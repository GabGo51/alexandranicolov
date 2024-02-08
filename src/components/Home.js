import React from "react";
import styled from "styled-components";
import ImageOverlay from "./Overlay";
import { useImageContext } from "../context/PhotoContext";
import Marquee from "react-fast-marquee";
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
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";
import { Helmet } from "react-helmet";

//photo automatic slideshow in home using react fast marquee
const Home = () => {
  const { hover, normal } = useContext(MouseContext);

  const { selectedImage, openOverlay, closeOverlay, setSize } =
    useImageContext();

  const screeWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  let speed = 100;
  if (screeWidth < 500) {
    speed = 75;
  }

  return (
    <Container>
      <Helmet>
        <title>Home - Alexandra Nicolov</title>
        <meta
          name="description"
          content="Collection de photographie pellicule et corporative / videographie"
        />
      </Helmet>
      <Marquee speed={speed} className="frame">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(home1)}
          src={home1}
          alt="Cloud"
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(home3)}
          src={home3}
          alt="Cloud"
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(home2)}
          src={home2}
          alt="Cloud"
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(home4)}
          src={home4}
          alt="Cloud"
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(home5);
            setSize(true);
          }}
          src={home5}
          alt="Cloud"
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(home6)}
          src={home6}
          alt="Cloud"
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(home7)}
          src={home7}
          alt="Cloud"
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(home8)}
          src={home8}
          alt="Cloud"
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(home9)}
          src={home9}
          alt="Cloud"
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(home10)}
          src={home10}
          alt="Cloud"
        />
      </Marquee>

      {selectedImage && <ImageOverlay onClose={closeOverlay} />}
    </Container>
  );
};

const Container = styled.div`
  width: 90%;

  .frame {
    max-width: 110%;
    z-index: 0;
  }

  img {
    height: 60vh;
    margin-right: 30px;
    @media (max-width: 700px) {
      height: 300px;
    }
  }
`;

export default Home;
