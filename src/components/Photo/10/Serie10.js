import React from "react";
import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import s10_1 from "./img/s10-1.jpg";
import s10_2 from "./img/s10-2.jpg";
import s10_3 from "./img/s10-3.jpg";
import s10_4 from "./img/s10-4.jpg";
import s10_5 from "./img/s10-5.jpg";
import s10_6 from "./img/s10-6.jpg";

const Serie10 = () => {
  const { selectedImage, openOverlay, closeOverlay, setSize } = useImageContext();
  return (
    <Container>
      <img onClick={() => openOverlay(s10_1)} className="full" alt="serie1" src={s10_1} />
      <img onClick={() => openOverlay(s10_2)} className="full" alt="serie1" src={s10_2} />
      <img onClick={() => {openOverlay(s10_3);setSize(true)}} className="tall" alt="serie1" src={s10_3} />
      <img onClick={() => openOverlay(s10_4)} className="full" alt="serie1" src={s10_4} />
      <img onClick={() => {openOverlay(s10_5);setSize(true)}} className="tall" alt="serie1" src={s10_5} />
      <img onClick={() => openOverlay(s10_6)} className="full" alt="serie1" src={s10_6} />

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

.full{
  width: 70vw;
}

.tall{
  width: 40%;
}
`;

export default Serie10