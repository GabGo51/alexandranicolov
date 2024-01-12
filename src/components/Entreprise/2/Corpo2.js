import React from "react";
import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import c2_1 from "./img/c2-1.jpg";
import c2_2 from "./img/c2-2.jpg";
import c2_3 from "./img/c2-3.jpg";
import c2_4 from "./img/c2-4.jpg";
import c2_5 from "./img/c2-5.jpg";
import c2_6 from "./img/c2-6.jpg";
import c2_7 from "./img/c2-7.jpg";
import c2_8 from "./img/c2-8.jpg";
import c2_9 from "./img/c2-9.jpg";
import c2_10 from "./img/c2-10.jpg";
import c2_11 from "./img/c2-11.jpg";
import c2_12 from "./img/c2-12.jpg";

const Corpo2 = () => {
  const { selectedImage, openOverlay, closeOverlay } = useImageContext();
  return (
    <Container>
    <img onClick={() => openOverlay(c2_1)}  alt="corpo2" src={c2_1} />
    <img onClick={() => openOverlay(c2_2)}  alt="corpo2" src={c2_2} />
    <img onClick={() => openOverlay(c2_3)}  alt="corpo2" src={c2_3} />
    <img onClick={() => openOverlay(c2_4)}  alt="corpo2" src={c2_4} />
    <img onClick={() => openOverlay(c2_5)}  alt="corpo2" src={c2_5} />
    <img onClick={() => openOverlay(c2_6)}  alt="corpo2" src={c2_6} />
    <img onClick={() => openOverlay(c2_7)}  alt="corpo2" src={c2_7} />
    <img onClick={() => openOverlay(c2_8)}  alt="corpo2" src={c2_8} />
    <img onClick={() => openOverlay(c2_9)}  alt="corpo2" src={c2_9} />
    <img onClick={() => openOverlay(c2_10)}  alt="corpo2" src={c2_10} />
    <img onClick={() => openOverlay(c2_11)}  alt="corpo2" src={c2_11} />
    <img onClick={() => openOverlay(c2_12)}  alt="corpo2" src={c2_12} />
    

    <BackTop />
    {selectedImage && <ImageOverlay onClose={closeOverlay} />}
  </Container>
  )
}

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Corpo2