import React from "react";
import s2_1 from "./img/s2-1.jpg";
import s2_2 from "./img/s2-2.jpg";
import s2_3 from "./img/s2-3.jpg";
import s2_4 from "./img/s2-4.jpg";
import s2_5 from "./img/s2-5.jpg";
import s2_6 from "./img/s2-6.jpg";
import s2_7 from "./img/s2-7.jpg";
import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import { useContext } from "react";
import { MouseContext } from "../../../context/mouseContext";

const Serie2 = () => {
  const { selectedImage, openOverlay, closeOverlay } = useImageContext();
  const { hover, normal } = useContext(MouseContext);
  return (
    <Container>
      <img
        onMouseEnter={hover}
        onMouseLeave={normal}
        onClick={() => openOverlay(s2_1)}
        className="middle"
        alt="serie1"
        src={s2_1}
      />
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s2_2)}
          className="row-img"
          alt="serie1"
          src={s2_2}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s2_3)}
          className="row-img"
          alt="serie1"
          src={s2_3}
        />
      </div>
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s2_4)}
          className="row-img"
          alt="serie1"
          src={s2_4}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s2_5)}
          className="row-img"
          alt="serie1"
          src={s2_5}
        />
      </div>
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s2_6)}
          className="row-img"
          alt="serie1"
          src={s2_6}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s2_7)}
          className="row-img"
          alt="serie1"
          src={s2_7}
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
    width: 50vw;
    margin-bottom: 4vw;
  }
`;

export default Serie2;
