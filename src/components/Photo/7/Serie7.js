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
        className="full"
        alt="serie1"
        src={s7_1}
      />
      <img className="full" alt="serie1" src={s7_2} />
      <img className="full" alt="serie1" src={s7_3} />
      <img className="full" alt="serie1" src={s7_4} />
      <img className="full" alt="serie1" src={s7_5} />

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
`;

export default Serie7;
