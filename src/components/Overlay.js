import React, {useEffect} from "react";
import { useImageContext } from "../context/PhotoContext"; 
import styled from "styled-components";
import { motion } from "framer-motion";
import close from "./img/close.png";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";


//makes all images clickable opening an overlay to single the out 
const ImageOverlay = () => {

  const { selectedImage, closeOverlay, size } = useImageContext();

  const { hover, normal } = useContext(MouseContext);


  //make escape key close overlay
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeOverlay();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    selectedImage && (
      <Container onClick={closeOverlay} size={size}>
        <motion.div initial={{ y: 20 }} animate={{ y: 0 }}>
          <img className="image-over" src={selectedImage} alt="Full Screen" />
        </motion.div>
        <img onMouseEnter={hover}
        onMouseLeave={normal} src={close} alt="close" className="close" />
      </Container>
    )
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(
    0,
    0,
    0,
    0.6
  ); /* Adjust the alpha value (last parameter) for opacity */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .image-over {
    height: 90vh;
    width: auto;
    object-fit: cover;
    margin: 0;

    @media (max-width: 1000px) {
      height: ${(props) => (props.size ? "500px" : "250px")};
    }
  }

  .close {
    position: absolute;
    margin: 0;
    width: 40px;
    height: 40px;
    font-size: 40px;
    top: 30px;
    right: 40px;
    @media (max-width: 1000px) {
      right: 20px;
    }
  }
`;

export default ImageOverlay;
