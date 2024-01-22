import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import c3_1 from "./img/c3-1.jpg";
import c3_2 from "./img/c3-2.jpg";
import c3_3 from "./img/c3-3.jpg";
import c3_4 from "./img/c3-4.jpg";
import c3_5 from "./img/c3-5.jpg";
import c3_6 from "./img/c3-6.jpg";
import c3_7 from "./img/c3-7.jpg";
import c3_8 from "./img/c3-8.jpg";
import { useContext } from "react";
import { MouseContext } from "../../../context/mouseContext";

const Corpo3 = () => {
  const { selectedImage, openOverlay, closeOverlay, setSize } =
    useImageContext();
  const { hover, normal } = useContext(MouseContext);

  return (
    <Container>
      <div className="frame">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c3_1);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_1}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c3_2);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_2}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c3_3);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_3}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c3_4);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_4}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c3_5);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_5}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c3_6);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_6}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c3_7);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_7}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c3_8);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_8}
        />
      </div>

      {selectedImage && <ImageOverlay onClose={closeOverlay} />}
    </Container>
  );
};

const Container = styled.div`
  width: 90%;

  .frame {
    max-width: 110%;
    display: grid;
    grid-auto-flow: column;

    overflow-x: scroll;
    scroll-behavior: smooth;
  }

  img {
    height: 50vh;
    margin-right: 30px;
    @media (max-width: 700px) {
      height: 300px;
    }
  }
`;

export default Corpo3;
