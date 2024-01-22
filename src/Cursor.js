import styled, { keyframes } from "styled-components";
import useMousePosition from "./hooks/useMousePosition";
import { MouseContext } from "./context/mouseContext";
import { useContext } from "react";
import on from './components/img/on.png'
import off from './components/img/off.png'



const Cursor = () => {
  const {cursorType} = useContext(MouseContext);
  
    // 1.
  const { x, y } = useMousePosition();
  return (
    <Container>     
      <Dot
        className={cursorType === 'hover' ? cursorType : ''}
        style={{ left: `${x}px`, top: `${y}px` }}
      ><img className={cursorType === 'hover' ? 'move' : ''}  src={cursorType === 'hover'? on : off}/></Dot>
    </Container>
  );
};

const tiltAnimation = keyframes`
  0% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
`;

const Container = styled.div`

z-index: 999;
position: absolute;

img{
  width: 40px;
  transform: translateY(-5%);

  &.move{
    animation: ${tiltAnimation} 0.5s infinite;
    
  }
}

`


const Dot = styled.div`
  transition:width 200ms, height 200ms;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  z-index: 999;
  pointer-events: none;

  
  
  @media (max-width:800px){
    display: none;
  }
` 
  


export default Cursor;