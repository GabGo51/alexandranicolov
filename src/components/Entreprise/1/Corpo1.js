import React from "react";
import styled from "styled-components";
import BackTop from "../../BackTop";
import ImageOverlay from "../../Overlay";
import { useImageContext } from "../../../context/PhotoContext";
import c1_1 from "./img/c1-1.jpg";
import c1_2 from "./img/c1-2.jpg";
import c1_3 from "./img/c1-3.jpg";
import c1_4 from "./img/c1-4.jpg";
import c1_5 from "./img/c1-5.jpg";

const Corpo1 = () => {
  const { selectedImage, openOverlay, closeOverlay } = useImageContext();
  return (
    <Container>
      <div className="row">
        <img className="img1" onClick={() => openOverlay(c1_1)} alt="corpo1" src={c1_1} />
        <img className="img2" onClick={() => openOverlay(c1_2)} alt="corpo1" src={c1_2} />
      </div>
      <div className="row">
        <img className="img3" onClick={() => openOverlay(c1_3)} alt="corpo1" src={c1_3} />
        <img className="img4" onClick={() => openOverlay(c1_4)} alt="corpo1" src={c1_4} />
      </div>
      <div className="row">
        <img className="img5" onClick={() => openOverlay(c1_5)} alt="corpo1" src={c1_5} />
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
`;

export default Corpo1;
