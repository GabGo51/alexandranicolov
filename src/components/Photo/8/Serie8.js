import React from "react";
import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import s8_1 from "./img/s8-1.jpg";
import s8_2 from "./img/s8-2.jpg";
import s8_3 from "./img/s8-3.jpg";
import s8_4 from "./img/s8-4.jpg";
import s8_5 from "./img/s8-5.jpg";
import s8_6 from "./img/s8-6.jpg";

const Serie8 = () => {
  const { selectedImage, openOverlay, closeOverlay } = useImageContext();
  return (
    <Container>
      <div className="row">
        <img
          onClick={() => openOverlay(s8_1)}
          className="row-img"
          alt="serie1"
          src={s8_1}
        />
        <img
          onClick={() => openOverlay(s8_2)}
          className="row-img"
          alt="serie1"
          src={s8_2}
        />
      </div>

      <img
        onClick={() => openOverlay(s8_3)}
        className="middle"
        alt="serie1"
        src={s8_3}
      />
      <img
        onClick={() => openOverlay(s8_4)}
        className="middle"
        alt="serie1"
        src={s8_4}
      />
      <img
        onClick={() => openOverlay(s8_5)}
        className="middle"
        alt="serie1"
        src={s8_5}
      />

      <div className="row last">
        <img
          onClick={() => openOverlay(s8_6)}
          className="row-img"
          alt="serie1"
          src={s8_6}
        />
      </div>
      <BackTop />
      {selectedImage && <ImageOverlay onClose={closeOverlay} />}
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
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

  .last {
    justify-content: center;
  }
`;

export default Serie8;
