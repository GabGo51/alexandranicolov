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

const Serie6 = () => {
  const { selectedImage, openOverlay, closeOverlay } = useImageContext();
  return (
    <Container>
      <div className="row">
        <img onClick={() => openOverlay(s6_1)} className="row-img" alt="serie1" src={s6_1} />
        <img onClick={() => openOverlay(s6_2)}  className="row-img" alt="serie1" src={s6_2} />
      </div>
      <img onClick={() => openOverlay(s6_3)}  className="middle" alt="serie1" src={s6_3} />
      <div className="row">
        <img onClick={() => openOverlay(s6_4)}  className="row-img" alt="serie1" src={s6_4} />
        <img onClick={() => openOverlay(s6_5)}  className="row-img" alt="serie1" src={s6_5} />
      </div>
      <div className="row">
        <img onClick={() => openOverlay(s6_6)}  className="row-img" alt="serie1" src={s6_6} />
        <img onClick={() => openOverlay(s6_7)}  className="row-img" alt="serie1" src={s6_7} />
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

  .middle{
    width: 80%;
    margin-bottom: 4vw;
  }
`;

export default Serie6;
