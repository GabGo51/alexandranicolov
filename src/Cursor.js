import styled, { keyframes } from "styled-components";
import useMousePosition from "./hooks/useMousePosition";
import { MouseContext } from "./context/mouseContext";
import { useContext } from "react";
import on from "./components/img/on.png";
import off from "./components/img/off.png";

// Custom cursor using 2 images changing depending on the state hover normal in mouse context
const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  return (
    <Container>
      <Dot
        className={cursorType === "hover" ? cursorType : ""}
        style={{ left: `${x}px`, top: `${y}px` }}
      >
        <img
          alt="cursor-on"
          className={cursorType === "hover" ? "move" : ""}
          src={on}
        />
        <img
          alt="cursor-off"
          className={cursorType !== "hover" ? "move" : ""}
          src={off}
        />
      </Dot>
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
`;

const Dot = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 40px; /* Adjust width according to your images */
  height: 40px; /* Adjust height according to your images */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  pointer-events: none;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;

    &.move {
      opacity: 1;
      animation: ${tiltAnimation} 0.5s infinite;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export default Cursor;