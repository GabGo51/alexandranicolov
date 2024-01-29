import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import c4_1 from "./img/c4-1.jpg";
import c4_2 from "./img/c4-2.jpg";
import c4_3 from "./img/c4-3.jpg";
import c4_4 from "./img/c4-4.jpg";
import c4_5 from "./img/c4-5.jpg";
import c4_6 from "./img/c4-6.jpg";
import { useContext } from "react";
import { MouseContext } from "../../../context/mouseContext";

const Corpo4 = () => {
  const { selectedImage, openOverlay, closeOverlay, setSize } =
    useImageContext();
  const { hover, normal } = useContext(MouseContext);

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
      <Marquee speed={speed} className="frame">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c4_1);
            setSize(true);
          }}
          alt="corpo4"
          src={c4_1}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c4_2);
            setSize(true);
          }}
          alt="corpo4"
          src={c4_2}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c4_3);
            setSize(true);
          }}
          alt="corpo4"
          src={c4_3}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c4_4);
            setSize(true);
          }}
          alt="corpo4"
          src={c4_4}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c4_5);
            setSize(true);
          }}
          alt="corpo4"
          src={c4_5}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c4_6);
            setSize(true);
          }}
          alt="corpo4"
          src={c4_6}
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
    height: 50vh;
    margin-right: 30px;
    @media (max-width: 700px) {
      height: 300px;
    }
  }
`;

export default Corpo4;
