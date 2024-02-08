import React from "react";
import styled from "styled-components";
import s1_1 from "./img/s1-1.jpg";
import s1_2 from "./img/s1-2.jpg";
import s1_3 from "./img/s1-3.jpg";
import s1_4 from "./img/s1-4.jpg";
import s1_5 from "./img/s1-5.jpg";
import s1_6 from "./img/s1-6.jpg";
import s1_7 from "./img/s1-7.jpg";
import s1_8 from "./img/s1-8.jpg";
import s1_9 from "./img/s1-9.jpg";
import s1_10 from "./img/s1-10.jpg";
import s1_11 from "./img/s1-11.jpg";
import s1_12 from "./img/s1-12.jpg";
import s1_13 from "./img/s1-13.jpg";
import s1_14 from "./img/s1-14.jpg";
import s1_15 from "./img/s1-15.jpg";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import BackTop from "../../BackTop";
import { useContext } from "react";
import { MouseContext } from "../../../context/mouseContext";

const Serie1 = () => {
  const { selectedImage, openOverlay, closeOverlay, setSize } =
    useImageContext();
  const { hover, normal } = useContext(MouseContext);

  return (
    <Container>
      <div className="layer">
        <div className="first colum">
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => {
              openOverlay(s1_1);
              setSize(true);
            }}
            alt="serie1"
            src={s1_1}
          />
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => {
              openOverlay(s1_3);
              setSize(true);
            }}
            alt="serie1"
            src={s1_3}
          />
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => {
              openOverlay(s1_5);
              setSize(true);
            }}
            alt="serie1"
            src={s1_5}
          />
        </div>
        <div className=" second colum">
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => openOverlay(s1_2)}
            alt="serie1"
            src={s1_2}
          />
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => {
              openOverlay(s1_4);
              setSize(true);
            }}
            alt="serie1"
            src={s1_4}
          />
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => openOverlay(s1_6)}
            alt="serie1"
            src={s1_6}
          />
        </div>
      </div>
      <img
        onMouseEnter={hover}
        onMouseLeave={normal}
        className="full"
        onClick={() => openOverlay(s1_7)}
        alt="serie1"
        src={s1_7}
      />
      <div className="layer">
        <div className="third column">
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => openOverlay(s1_9)}
            alt="serie1"
            src={s1_9}
          />
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => openOverlay(s1_10)}
            alt="serie1"
            src={s1_10}
          />
        </div>
        <div className="fourth column">
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => {
              openOverlay(s1_8);
              setSize(true);
            }}
            alt="serie1"
            src={s1_8}
          />
        </div>
      </div>

      <img
        onMouseEnter={hover}
        onMouseLeave={normal}
        className="full"
        onClick={() => openOverlay(s1_11)}
        alt="serie1"
        src={s1_11}
      />
      <div className="layer">
        <div className="fifth column">
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => {
              openOverlay(s1_12);
              setSize(true);
            }}
            alt="serie1"
            src={s1_12}
          />
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => openOverlay(s1_14)}
            alt="serie1"
            src={s1_14}
          />
        </div>
        <div className="sixth column">
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => openOverlay(s1_13)}
            alt="serie1"
            src={s1_13}
          />

          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => openOverlay(s1_15)}
            alt="serie1"
            src={s1_15}
          />
        </div>
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

  .first {
    width: 40%;
  }

  .second {
    width: 55%;
  }

  .third {
    width: 50%;
  }

  .fourth {
    width: 45%;
  }
  .fifth {
    width: 45%;
  }
  .sixth {
    width: 50%;
  }
`;

export default Serie1;
