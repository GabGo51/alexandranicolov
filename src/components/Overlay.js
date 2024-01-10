import React from 'react';
import { useImageContext } from '../context/PhotoContext'; // Update the path if needed
import styled from 'styled-components';

const ImageOverlay = () => {
  const { selectedImage, closeOverlay } = useImageContext();

  return (
    selectedImage && (
      <Container>
        <div>
          <img className='image-over' src={selectedImage} alt="Full Screen" />
        </div>
        <button className='close' onClick={closeOverlay}>X</button>
        
      </Container>
    )
  );
};

const Container = styled.div`
position: absolute;
top: 0;
bottom: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.6); /* Adjust the alpha value (last parameter) for opacity */
display: flex;
align-items: center;
justify-content: center;
padding: 100px;
div{
  display: flex;
align-items: center;
justify-content: center;

  width: 80%;
  height: 80%;
  
}
.image-over{
  scale: 1.7;
  object-fit: cover;

  @media (max-width:700px){
    scale: 1.3;
  }
}

.close{
  position: absolute;
  color: white;
  font-size: 40px;
  top: 20px;
  right: 20px;
}
`

export default ImageOverlay;