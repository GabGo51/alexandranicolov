import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import c4_1 from "./img/c4-1.jpg";
import c4_2 from "./img/c4-2.jpg";
import c4_3 from "./img/c4-3.jpg";
import c4_4 from "./img/c4-4.jpg";
import c4_5 from "./img/c4-5.jpg";
import c4_6 from "./img/c4-6.jpg";

const PhoneCorpo4 = () => {
  const containerRef = useRef(null);
  const { selectedImage, openOverlay, closeOverlay, setSize } =
    useImageContext();

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
  width: 100vw;

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
        height: 320px;
      }
    }
  }
`;

export default PhoneCorpo4;
