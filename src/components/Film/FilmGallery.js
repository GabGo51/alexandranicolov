import React, { useEffect } from "react";
import vid1 from "./img/vid1.gif";
import vid2 from "./img/vid2.gif";
import kelm from './img/kelm.gif'
import wend from './img/wend.gif'
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { MouseContext } from "../../context/mouseContext";


//dark mode component with film gifs / links and description

const FilmGallery = () => {
  const location = useLocation();
  const { hover, normal } = useContext(MouseContext);


 //setting uup dark mode
  useEffect(() => {
    if (location.pathname === "/film") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.removeAttribute("data-theme");
    };
  }, [location.pathname]);

  
  return (
    <Container>
      <div onMouseEnter={hover} onMouseLeave={normal}>
        <a href="https://vimeo.com/845609888" target="#">
          <img src={kelm} alt="Video 1" />
          <motion.p
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Kayla et la Mer
          </motion.p>
        </a>
      </div>
      <p className="description top">
        {" "}
        Kayla est à l'aube de réaliser son plus grand rêve : devenir capitaine
        d'une embarcation de pêche. Mais avant, elle doit traverser une longue
        saison morte dans la Baie-des-Chaleurs. Se perdant dans la rêverie et
        les paysages grandioses de la Gaspésie, nous suivons les préparatifs de
        cette jeune femme qui a fait le choix de rester. Un film de{" "}
        <span>Thomas Landry</span>
      </p>
      <div onMouseEnter={hover} onMouseLeave={normal}>
        <a
          href="https://app.frame.io/presentations/3d7729d1-e779-43a2-beee-f21977187df4"
          target="#"
        >
          <img src={wend} alt="Video 2" />
          <motion.p
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Wendake
          </motion.p>
        </a>
      </div>

      <p className="description">
        Intrusion dans l’univers de l'artiste tatoueuse Wendat Terry Dactel. Le
        film explore notamment le concept de la réappropriation culturelle du
        peuple Wendat à travers la quête identitaire du réalisateur, lui aussi
        Wendat. Un film de <span> Vincent Careau</span>
      </p>
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
    height: 70vh;
    display: block;
  }

  .title {
    font-family: NeueItalic;
    color: yellow;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(30px, 7vw, 120px);
    margin: 0;
  }

  .description {
    text-align: start;
    width: clamp(320px, 50%, 800px);
    font-size: clamp(14px, 3vw, 20px);

    span {
      font-weight: bold;
    }
  }
  .top {
    margin-bottom: 200px;

    @media (max-width: 1000px) {
      margin-bottom: 100px;
    }
  }
`;

export default FilmGallery;
