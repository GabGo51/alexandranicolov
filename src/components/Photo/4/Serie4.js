import React from "react";
import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import s4_1 from "./img/s4-1.jpg";
import s4_2 from "./img/s4-2.jpg";
import s4_3 from "./img/s4-3.jpg";
import s4_4 from "./img/s4-4.jpg";
import s4_5 from "./img/s4-5.jpg";
import s4_6 from "./img/s4-6.jpg";
import s4_7 from "./img/s4-7.jpg";
import s4_8 from "./img/s4-8.jpg";
import s4_9 from "./img/s4-9.jpg";
import s4_10 from "./img/s4-10.jpg";
import s4_11 from "./img/s4-11.jpg";
import s4_12 from "./img/s4-12.jpg";
import s4_13 from "./img/s4-13.jpg";
import s4_14 from "./img/s4-14.jpg";
import s4_15 from "./img/s4-15.jpg";
import s4_16 from "./img/s4-16.jpg";
import s4_17 from "./img/s4-17.jpg";
import { useContext } from "react";
import { MouseContext } from "../../../context/mouseContext";

//maybe wrong number at the spot

const Serie4 = () => {
  const { selectedImage, openOverlay, closeOverlay, setSize } =
    useImageContext();
  const { hover, normal } = useContext(MouseContext);
  return (
    <Container>
      <img
        onMouseEnter={hover}
        onMouseLeave={normal}
        onClick={() => openOverlay(s4_1)}
        className="middle"
        alt="serie1"
        src={s4_1}
      />
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s4_15)}
          className="row-img"
          alt="serie1"
          src={s4_15}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s4_16)}
          className="row-img"
          alt="serie1"
          src={s4_16}
        />
      </div>
      <img
        onMouseEnter={hover}
        onMouseLeave={normal}
        onClick={() => openOverlay(s4_17)}
        className="middle"
        alt="serie1"
        src={s4_17}
      />
      <img
        onMouseEnter={hover}
        onMouseLeave={normal}
        onClick={() => openOverlay(s4_9)}
        className="middle"
        alt="serie1"
        src={s4_9}
      />
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s4_13)}
          className="row-img"
          alt="serie1"
          src={s4_13}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s4_14)}
          className="row-img"
          alt="serie1"
          src={s4_14}
        />
      </div>
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s4_6)}
          alt="serie1"
          className="row-img big"
          src={s4_6}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s4_12)}
          alt="serie1"
          className="row-img big"
          src={s4_12}
        />
      </div>
      <div className="row"></div>
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s4_4)}
          className="row-img"
          alt="serie1"
          src={s4_4}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => openOverlay(s4_3)}
          className="row-img"
          alt="serie1"
          src={s4_3}
        />
      </div>
      <img
        onMouseEnter={hover}
        onMouseLeave={normal}
        onClick={() => openOverlay(s4_7)}
        className="middle"
        alt="serie1"
        src={s4_7}
      />

      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s4_11);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s4_11}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s4_10);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s4_10}
        />
      </div>
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s4_5);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s4_5}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s4_8);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s4_8}
        />
      </div>
      <img
        onMouseEnter={hover}
        onMouseLeave={normal}
        onClick={() => openOverlay(s4_1)}
        className="middle"
        alt="serie1"
        src={s4_2}
      />

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
    width: 40vw;
    margin-bottom: 1vw;
  }

  .row {
    margin-bottom: 1vw;
    justify-content: center;
    gap: 1vw;
    .row-img {
      width: 40%;
    }

    .big {
      width: 50%;
    }
  }
`;

export default Serie4;
