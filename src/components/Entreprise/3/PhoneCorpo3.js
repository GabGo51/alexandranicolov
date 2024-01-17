import React, { useEffect, useRef} from "react";
import styled from "styled-components";

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

const PhoneCorpo3 = () => {
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
        <img
          onClick={() => {
            openOverlay(c3_1);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_1}
        />
        <img
          onClick={() => {
            openOverlay(c3_2);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_2}
        />
        <img
          onClick={() => {
            openOverlay(c3_3);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_3}
        />
        <img
          onClick={() => {
            openOverlay(c3_4);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_4}
        />
        <img
          onClick={() => {
            openOverlay(c3_5);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_5}
        />
        <img
          onClick={() => {
            openOverlay(c3_6);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_6}
        />
        <img
          onClick={() => {
            openOverlay(c3_7);
            setSize(true);
          }}
          alt="corpo3"
          src={c3_7}
        />
        <img
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

export default PhoneCorpo3;
