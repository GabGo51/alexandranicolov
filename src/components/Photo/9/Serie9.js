import React from "react";
import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import s9_1 from "./img/s9-1.jpg";
import s9_2 from "./img/s9-2.jpg";
import s9_3 from "./img/s9-3.jpg";
import s9_4 from "./img/s9-4.jpg";
import s9_5 from "./img/s9-5.jpg";
import s9_6 from "./img/s9-6.jpg";
import { useContext } from "react";
import { MouseContext } from "../../../context/mouseContext";

const Serie9 = () => {
  const { selectedImage, openOverlay, closeOverlay, setSize } =
    useImageContext();
  const { hover, normal } = useContext(MouseContext);
  return (
    <Container>
      <img
        onMouseEnter={hover}
        onMouseLeave={normal}
        className="middle"
        onClick={() => {
          openOverlay(s9_1);
          setSize(true);
        }}
        alt="serie1"
        src={s9_1}
      />
      <div className="layer">
        <div className="column">
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => openOverlay(s9_2)}
            alt="serie1"
            src={s9_2}
          />
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => {
              openOverlay(s9_4);
              setSize(true);
            }}
            alt="serie1"
            src={s9_4}
          />
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => {
              openOverlay(s9_6);
              setSize(true);
            }}
            alt="serie1"
            src={s9_6}
          />
        </div>
        <div className="column">
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => {
              openOverlay(s9_3);
              setSize(true);
            }}
            alt="serie1"
            src={s9_3}
          />
          <img
            onMouseEnter={hover}
            onMouseLeave={normal}
            onClick={() => {
              openOverlay(s9_5);
              setSize(true);
            }}
            alt="serie1"
            src={s9_5}
          />
        </div>
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
    width: 40%;
    margin-bottom: 4vw;
  }

  .column {
    width: 47.5%;
  }
`;

export default Serie9;
