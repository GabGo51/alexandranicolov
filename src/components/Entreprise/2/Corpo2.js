import React from "react";
import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import c2_1 from "./img/c2-1.jpg";
import c2_2 from "./img/c2-2.jpg";
import c2_3 from "./img/c2-3.jpg";
import c2_4 from "./img/c2-4.jpg";
import c2_5 from "./img/c2-5.jpg";
import c2_6 from "./img/c2-6.jpg";
import c2_7 from "./img/c2-7.jpg";
import c2_8 from "./img/c2-8.jpg";
import c2_9 from "./img/c2-9.jpg";
import c2_10 from "./img/c2-10.jpg";
import c2_11 from "./img/c2-11.jpg";
import c2_12 from "./img/c2-12.jpg";

import { useContext } from "react";
import { MouseContext } from "../../../context/mouseContext";

const Corpo2 = () => {
  const { hover, normal } = useContext(MouseContext);
  const { selectedImage, openOverlay, closeOverlay, setSize } =
    useImageContext();
  return (
    <Container>
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c2_1);
            setSize(true);
          }}
          alt="corpo2"
          src={c2_1}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c2_2);
            setSize(true);
          }}
          alt="corpo2"
          src={c2_2}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c2_3);
            setSize(true);
          }}
          alt="corpo2"
          src={c2_3}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c2_4);
            setSize(true);
          }}
          alt="corpo2"
          src={c2_4}
        />
      </div>
      <div className="row ">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          className="flower"
          onClick={() => openOverlay(c2_5)}
          alt="corpo2"
          src={c2_5}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          className="flower"
          onClick={() => openOverlay(c2_6)}
          alt="corpo2"
          src={c2_6}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          className="flower"
          onClick={() => {
            openOverlay(c2_7);
            setSize(true);
          }}
          alt="corpo2"
          src={c2_7}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          className="flower"
          onClick={() => openOverlay(c2_8)}
          alt="corpo2"
          src={c2_8}
        />
      </div>
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c2_9);
            setSize(true);
          }}
          alt="corpo2"
          src={c2_9}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c2_10);
            setSize(true);
          }}
          alt="corpo2"
          src={c2_10}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c2_11);
            setSize(true);
          }}
          alt="corpo2"
          src={c2_11}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(c2_12);
            setSize(true);
          }}
          alt="corpo2"
          src={c2_12}
        />
      </div>

      <BackTop />
      {selectedImage && <ImageOverlay onClose={closeOverlay} />}
    </Container>
  );
};

const Container = styled.section`
  width: 70%;
  @media (max-width: 1200px) {
    width: 90%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 23%;
  }
  .row {
    margin-bottom: 1.5vw;
  }
`;

export default Corpo2;
