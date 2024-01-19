import React from "react";
import vid1 from "./img/vid1.gif";
import vid2 from "./img/vid2.gif";
import styled from "styled-components";

const FilmGallery = () => {
  return (
    <Container>
      <div>
        <a href="https://vimeo.com/845609888" target="#">
          <img src={vid1} alt="Video 1" />
          <p>Kayla et la Mer</p>
        </a>
      </div>
      <div>
        <a
          href="https://app.frame.io/presentations/3d7729d1-e779-43a2-beee-f21977187df4"
          target="#"
        >
          <img src={vid2} alt="Video 2" />
          <p>Wendake</p>
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  text-align: center;

  div {
    position: relative;
    margin-bottom: 40px;
  }

  img {
    width: 100%;
    display: block;
  }

  p {
    font-family: NeueItalic;
    color: yellow;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(30px, 7vw, 120px);
    margin: 0;
  }
`;

export default FilmGallery;
