import React from "react";
import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import s5_1 from "./img/s5-1.jpg";
import s5_2 from "./img/s5-2.jpg";
import s5_3 from "./img/s5-3.jpg";
import s5_4 from "./img/s5-4.jpg";
import s5_5 from "./img/s5-5.jpg";
import { useContext } from "react";
import { MouseContext } from "../../../context/mouseContext";

const Serie5 = () => {
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
            openOverlay(s5_1);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s5_1}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s5_2);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s5_2}
        />
      </div>
      <div className="row">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s5_3);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s5_3}
        />
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s5_4);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s5_4}
        />
      </div>
      <div className="row last">
        <img
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => {
            openOverlay(s5_5);
            setSize(true);
          }}
          className="row-img"
          alt="serie1"
          src={s5_5}
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

export default Serie5;
