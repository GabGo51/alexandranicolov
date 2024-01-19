import React from "react";
import styled from "styled-components";

import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import c4_1 from "./img/c4-1.jpg";
import c4_2 from "./img/c4-2.jpg";
import c4_3 from "./img/c4-3.jpg";
import c4_4 from "./img/c4-4.jpg";
import c4_5 from "./img/c4-5.jpg";
import c4_6 from "./img/c4-6.jpg";

const Corpo4 = () => {
  const { selectedImage, openOverlay, closeOverlay, setSize } =
    useImageContext();

  return (
    <Container>
      <div className="frame">
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

export default Corpo4;
