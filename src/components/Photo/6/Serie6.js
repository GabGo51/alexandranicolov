import React from "react";
import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import s6_1 from "./img/s6-1.jpg";
import s6_2 from "./img/s6-2.jpg";
import s6_3 from "./img/s6-3.jpg";
import s6_4 from "./img/s6-4.jpg";
import s6_5 from "./img/s6-5.jpg";
import s6_6 from "./img/s6-6.jpg";
import s6_7 from "./img/s6-7.jpg";
import { useContext } from "react";
import { MouseContext } from "../../../context/mouseContext";

const Serie6 = () => {
  const { selectedImage, openOverlay, closeOverlay, setSize } =
    useImageContext();
  const { hover, normal } = useContext(MouseContext);
  return (
    <Container>
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s6_1);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s6_1}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s6_2);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s6_2}
        />
      </div>
      <img
        onMouseEnter={hover}
        onMouseLeave={normal}
        onClick={() => openOverlay(s6_3)}
        className="middle"
        alt="serie1"
        src={s6_3}
      />
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s6_4);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s6_4}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s6_5);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s6_5}
        />
      </div>
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s6_6);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s6_6}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s6_7);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s6_7}
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

  .middle {
    width: 80%;
    margin-bottom: 4vw;
  }
`;

export default Serie6;
