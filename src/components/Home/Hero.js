import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import { useContext } from "react";
import { MouseContext } from '../../context/mouseContext';

const Hero = () => {
  const [show, setShow] = useState(false)
  const {cursorChangeHandler} = useContext(MouseContext);

  const handleToggle = () =>{
    setShow(!show)
  }

  

  return (
    <Container >
      <button onClick={() => handleToggle()} onMouseEnter={() => cursorChangeHandler("hover")} onMouseLeave={ cursorChangeHandler('')}>CLICK ME AHAHAHAHAH</button>
      {show && <p>JE TAIMEEEEEEEE</p>}

      
    </Container>
  )
}

const Rotate = keyframes`
to {
  transform: rotate(360deg);
}
`

const Container = styled.section`

button{
  background-color: purple;
  color: white;
  border: 2px solid blue;
  padding: 40px;
  border-radius: 50px;

  &:hover{
    animation: ${Rotate} 1s forwards;
  }
}

`

export default Hero