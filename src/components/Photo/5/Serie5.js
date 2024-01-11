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

const Serie5 = () => {
  const { selectedImage, openOverlay, closeOverlay } = useImageContext();
  return (
    <Container>
      <img onClick={() => openOverlay(s5_1)} className="full" alt="serie1" src={s5_1} />
      <img onClick={() => openOverlay(s5_2)} className="full" alt="serie1" src={s5_2} />
      <img onClick={() => openOverlay(s5_3)} className="full" alt="serie1" src={s5_3} />
      <img onClick={() => openOverlay(s5_4)} className="full" alt="serie1" src={s5_4} />
      <img onClick={() => openOverlay(s5_5)} className="full" alt="serie1" src={s5_5} />
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

export default Serie5;
