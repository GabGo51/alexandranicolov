import React from 'react';
import { useImageContext } from '../context/PhotoContext'; // Update the path if needed
import styled from 'styled-components';
import { motion } from 'framer-motion';
import close from './img/close.png'

const ImageOverlay = () => {
  const { selectedImage, closeOverlay, size} = useImageContext();

  return (
    selectedImage && (
      <Container size={size}>
        <motion.div initial={{y:20}} animate={{y:0}}>
          <img className='image-over' src={selectedImage} alt="Full Screen" />
        </motion.div>
        <img src={close} alt='close' className='close' onClick={closeOverlay}/>
        
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
background-color: rgba(0, 0, 0, 0.6); /* Adjust the alpha value (last parameter) for opacity */
display: flex;
align-items: center;
justify-content: center;
padding: 100px;
div{
  display: flex;
align-items: center;
justify-content: center;

  
  
}
.image-over{
  height: 90vh;
  width: auto;
  object-fit: cover;

  @media (max-width:1000px){
    
    height: ${(props) => (props.size ? '500px' : '250px')};
  }
}

.close{
  position: absolute;
  width: 40px;
  height: 40px ;
  font-size: 40px;
  top: 30px;
  right: 30px;
  @media (max-width:1000px){
    
    right: 0px;
  }
  
  
}
`

export default ImageOverlay;