import React from "react";
import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import c3_1 from "./img/c3-1.jpg";
import c3_2 from "./img/c3-2.jpg";
import c3_3 from "./img/c3-3.jpg";
import c3_4 from "./img/c3-4.jpg";
import c3_5 from "./img/c3-5.jpg";
import c3_6 from "./img/c3-6.jpg";
import c3_7 from "./img/c3-7.jpg";
import c3_8 from "./img/c3-8.jpg";

const Corpo3 = () => {
  const { selectedImage, openOverlay, closeOverlay } = useImageContext();
  return (
    <Container>
    <img onClick={() => openOverlay(c3_1)}  alt="corpo3" src={c3_1} />
    <img onClick={() => openOverlay(c3_2)}  alt="corpo3" src={c3_2} />
    <img onClick={() => openOverlay(c3_3)}  alt="corpo3" src={c3_3} />
    <img onClick={() => openOverlay(c3_4)}  alt="corpo3" src={c3_4} />
    <img onClick={() => openOverlay(c3_5)}  alt="corpo3" src={c3_5} />
    <img onClick={() => openOverlay(c3_6)}  alt="corpo3" src={c3_6} />
    <img onClick={() => openOverlay(c3_7)}  alt="corpo3" src={c3_7} />
    <img onClick={() => openOverlay(c3_8)}  alt="corpo3" src={c3_8} />
    
    

    <BackTop />
    {selectedImage && <ImageOverlay onClose={closeOverlay} />}
  </Container>
  )
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

export default Corpo3