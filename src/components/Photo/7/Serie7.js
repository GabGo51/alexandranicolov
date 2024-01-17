import React from "react";
import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import s7_1 from "./img/s7-1.jpg";
import s7_2 from "./img/s7-2.jpg";
import s7_3 from "./img/s7-3.jpg";
import s7_4 from "./img/s7-4.jpg";
import s7_5 from "./img/s7-5.jpg";

const Serie7 = () => {
  const { selectedImage, openOverlay, closeOverlay } = useImageContext();
  return (
    <Container>
      <img
        onClick={() => openOverlay(s7_1)}
        className="middle"
        alt="serie1"
        src={s7_1}
      />
      <div className="row">
        <img
          onClick={() => openOverlay(s7_2)}
          className="row-img"
          alt="serie1"
          src={s7_2}
        />
        <img
          onClick={() => openOverlay(s7_3)}
          className="row-img"
          alt="serie1"
          src={s7_3}
        />
      </div>
      <div className="row"></div>
      <div className="row">
        <img
          onClick={() => openOverlay(s7_4)}
          className="row-img"
          alt="serie1"
          src={s7_4}
        />
        <img
          onClick={() => openOverlay(s7_5)}
          className="row-img"
          alt="serie1"
          src={s7_5}
        />
      </div>

      <BackTop />
      {selectedImage && <ImageOverlay onClose={closeOverlay} />}
    </Container>
  );
};

const Container = styled.div`
   width: 70%;
  @media (max-width: 1200px) {
      width: 90%;
    }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .middle {
    width: 80%;
    margin-bottom: 4vw;
    @media (max-width: 700px) {
        width: 100%;
        
      }
  }

  .row {
    .row-img {
      @media (max-width: 700px) {
        width: 100%;
        margin-bottom: 4vw;
      }
    }
    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
`;

export default Serie7;
