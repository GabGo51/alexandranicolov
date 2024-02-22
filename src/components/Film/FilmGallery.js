import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { MouseContext } from "../../context/mouseContext";
import { Helmet } from "react-helmet";

import wendat1 from "./img/01_wendat.jpg";
import wendat2 from "./img/02_wendat.jpg";
import wendat3 from "./img/03_wendat.jpg";
import wendat5 from "./img/05_wendat.jpg";
import wendat7 from "./img/07_wendat.jpg";
import wendat8 from "./img/08_wendat.jpg";
import wendat9 from "./img/09_wendat.jpg";
import wendat10 from "./img/10_wendat.jpg";
import wendat11 from "./img/11_wendat.jpg";
import wendat12 from "./img/12_wendat.jpg";
import wendat13 from "./img/13_wendat.jpg";
import wendat14 from "./img/14_wendat.jpg";
import wendat15 from "./img/15_wendat.jpg";
import wendat16 from "./img/16_wendat.jpg";
import wendat17 from "./img/17_wendat.jpg";

import kelm1 from "./img/01.jpg";
import kelm2 from "./img/02.jpg";
import kelm3 from "./img/03.jpg";
import kelm4 from "./img/04.jpg";
import kelm5 from "./img/05.jpg";
import kelm6 from "./img/06.jpg";
import kelm7 from "./img/07.jpg";
import kelm8 from "./img/08.jpg";
import kelm9 from "./img/09.jpg";
import kelm10 from "./img/10.jpg";
import kelm11 from "./img/11.jpg";
import kelm12 from "./img/12.jpg";
const went = [
  wendat1,
  wendat2,
  wendat3,
  wendat5,
  wendat7,
  wendat8,
  wendat9,
  wendat10,
  wendat11,
  wendat12,
  wendat13,
  wendat14,
  wendat15,
  wendat16,
  wendat17,
];
const keml = [
  kelm1,
  kelm2,
  kelm3,
  kelm4,
  kelm5,
  kelm6,
  kelm7,
  kelm8,
  kelm9,
  kelm10,
  kelm11,
  kelm12,
];

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

  const [currentIndexKeml, setCurrentIndexKeml] = useState(0);
  const [currentIndexWent, setCurrentIndexWent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexKeml((prevIndex) => (prevIndex + 1) % keml.length);
      setCurrentIndexWent((prevIndex) => (prevIndex + 1) % went.length);
    }, 1000); // Change image every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Film</title>
        <meta name="description" content="Projet film / videographie" />
      </Helmet>
      <a href="https://vimeo.com/845609888" target="#">
        <div onMouseEnter={hover} onMouseLeave={normal}>
          <img src={keml[currentIndexKeml]} alt="Video 1" />
          <motion.p
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Kayla et la Mer
          </motion.p>
        </div>
      </a>

      <p className="description top">
        Kayla est à l'aube de réaliser son plus grand rêve : devenir capitaine
        d'une embarcation de pêche. Mais avant, elle doit traverser une longue
        saison morte dans la Baie-des-Chaleurs. Se perdant dans la rêverie et
        les paysages grandioses de la Gaspésie, nous suivons les préparatifs de
        cette jeune femme qui a fait le choix de rester. Un film de{" "}
        <span>Thomas Landry</span>
      </p>
      <div>
        <img src={went[currentIndexWent]} alt="Video 2" />
        <motion.p
          className="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Wendat endi'
        </motion.p>
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

const Container = styled.section`
  width: 90%;
  text-align: center;

  div {
    position: relative;
    margin-bottom: 40px;
  }

  img {
    width: 100%;
    height: 700px;
    display: block;
    @media (max-width: 1200px) {
      height: 500px;
    }
    @media (max-width: 600px) {
      height: 300px;
    }
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
