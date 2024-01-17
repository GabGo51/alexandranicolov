import React from "react";
import s3_1 from "./img/s3-1.jpg";
import s3_2 from "./img/s3-2.jpg";
import s3_3 from "./img/s3-3.jpg";
import s3_4 from "./img/s3-4.jpg";
import s3_5 from "./img/s3-5.jpg";
import s3_6 from "./img/s3-6.jpg";

import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";

const Serie3 = () => {
  const { selectedImage, openOverlay, closeOverlay, setSize} = useImageContext();
  return (
    <Container>
      <div className="row">
        <img
          onClick={() => {openOverlay(s3_1);setSize(true)}}
          className="row-img"
          alt="serie1"
          src={s3_1}
        />
        <img
          onClick={() => {openOverlay(s3_2);setSize(true)}}
          className="row-img"
          alt="serie1"
          src={s3_2}
        />
      </div>
      <div className="row">
        <img
          onClick={() => {openOverlay(s3_3);setSize(true)}}
          className="row-img"
          alt="serie1"
          src={s3_3}
        />
        <img
          onClick={() => {openOverlay(s3_4);setSize(true)}}
          className="row-img"
          alt="serie1"
          src={s3_4}
        />
      </div>

      <img
        onClick={() => openOverlay(s3_5)}
        className="full"
        alt="serie1"
        src={s3_5}
      />
      <img
        onClick={() => openOverlay(s3_6)}
        className="full"
        alt="serie1"
        src={s3_6}
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
`;

export default Serie3;
