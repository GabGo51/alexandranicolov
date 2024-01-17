import React from "react";
import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import c4_1 from "./img/c4-1.jpg";
import c4_2 from "./img/c4-2.jpg";
import c4_3 from "./img/c4-3.jpg";
import c4_4 from "./img/c4-4.jpg";
import c4_5 from "./img/c4-5.jpg";
import c4_6 from "./img/c4-6.jpg";

const Corpo4 = () => {
  const { selectedImage, openOverlay, closeOverlay } = useImageContext();
  return (
    <Container>
      <img onClick={() => openOverlay(c4_1)}  alt="corpo4" src={c4_1} />
      <img onClick={() => openOverlay(c4_2)}  alt="corpo4" src={c4_2} />
      <img onClick={() => openOverlay(c4_3)}  alt="corpo4" src={c4_3} />
      <img onClick={() => openOverlay(c4_4)}  alt="corpo4" src={c4_4} />
      <img onClick={() => openOverlay(c4_5)}  alt="corpo4" src={c4_5} />
      <img onClick={() => openOverlay(c4_6)}  alt="corpo4" src={c4_6} />
      

      <BackTop />
      {selectedImage && <ImageOverlay onClose={closeOverlay} />}
    </Container>
  );
}

const Container = styled.div`
   width: 70%;
  @media (max-width: 1200px) {
      width: 90%;
    }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Corpo4