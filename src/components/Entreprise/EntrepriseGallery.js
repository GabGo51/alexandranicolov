import React, { useEffect, useState } from "react";
import styled from "styled-components";
import c1 from "./img/c1.jpg";
import c2 from "./img/c2.jpg";
import c3 from "./img/c3.jpg";
import c4 from "./img/c4.jpg";
import { useNavigate } from "react-router-dom";
import BackTop from "../BackTop";
import { useContext } from "react";
import { MouseContext } from "../../context/mouseContext";
import { Helmet } from "react-helmet";

import c1_1 from "./1/img/c1-1.jpg";
import c1_2 from "./1/img/c1-2.jpg";
import c1_3 from "./1/img/c1-3.jpg";
import c1_4 from "./1/img/c1-4.jpg";
import c1_5 from "./1/img/c1-5.jpg";
import c1_6 from "./1/img/c1-6.jpg";

import c2_1 from "./2/img/c2-1.jpg";
import c2_2 from "./2/img/c2-2.jpg";
import c2_3 from "./2/img/c2-3.jpg";
import c2_4 from "./2/img/c2-4.jpg";
import c2_5 from "./2/img/c2-5.jpg";
import c2_6 from "./2/img/c2-6.jpg";
import c2_7 from "./2/img/c2-7.jpg";
import c2_8 from "./2/img/c2-8.jpg";
import c2_9 from "./2/img/c2-9.jpg";
import c2_10 from "./2/img/c2-10.jpg";
import c2_11 from "./2/img/c2-11.jpg";
import c2_12 from "./2/img/c2-12.jpg";

import c3_1 from "./3/img/c3-1.jpg";
import c3_2 from "./3/img/c3-2.jpg";
import c3_3 from "./3/img/c3-3.jpg";
import c3_4 from "./3/img/c3-4.jpg";
import c3_5 from "./3/img/c3-5.jpg";
import c3_6 from "./3/img/c3-6.jpg";
import c3_7 from "./3/img/c3-7.jpg";
import c3_8 from "./3/img/c3-8.jpg";

import c4_1 from "./4/img/c4-1.jpg";
import c4_2 from "./4/img/c4-2.jpg";
import c4_3 from "./4/img/c4-3.jpg";
import c4_4 from "./4/img/c4-4.jpg";
import c4_5 from "./4/img/c4-5.jpg";
import c4_6 from "./4/img/c4-6.jpg";

const c1Images = [c1_2, c1_3, c1_4, c1_5, c1_6, c1_1];
const c2Images = [
  c2_2,
  c2_3,
  c2_4,
  c2_5,
  c2_6,
  c2_7,
  c2_8,
  c2_9,
  c2_10,
  c2_11,
  c2_12,
  c2_1,
];

const c3Images = [ c3_1,c3_2, c3_3, c3_4, c3_5, c3_6, c3_7, c3_8,];

const c4Images = [ c4_2, c4_3, c4_4,c4_1,c4_5,c4_6,]

//same as photo gallery not the way but it works i guess 
//showing main pic on normal and array on hover
//link to all corpo series

const EntrepriseGallery = () => {
  const { hover, normal } = useContext(MouseContext);

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
    });
  };

  const [serieHover, setSerieHover] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let intervalId;
    setCurrentImageIndex(0);
    if (serieHover) {
      intervalId = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % serieHover.length
        );
      }, 700); // Change image every second
    } else {
      clearInterval(intervalId); // Clear interval when not hovering
    }
    return () => clearInterval(intervalId); // Cleanup on unmount or when not hovering
  }, [serieHover]);
  
  return (
    <Container>
      <Helmet>
        <title>Photo corporative - Alexandra Nicolov</title>
        <meta
          name="description"
          content="Ensemble de photographie corporative"
        />
      </Helmet>
      <div className="row">
        <div
          className="p1"
          onClick={() => handleNavigate("/corpo/1")}
          onMouseEnter={() => {
            setSerieHover(c1Images);
          }}
          onMouseLeave={() => {
            setSerieHover("");
          }}
        >
          {serieHover === c1Images ? (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              src={c1Images[currentImageIndex]}
            />
          ) : (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              src={c1}
            />
          )}
          <p>Place Publique</p>
        </div>

        <div
          className="p2"
          onClick={() => handleNavigate("/corpo/2")}
          onMouseEnter={() => {
            setSerieHover(c2Images);
          }}
          onMouseLeave={() => {
            setSerieHover("");
          }}
        >
          {serieHover === c2Images ? (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              src={c2Images[currentImageIndex]}
            />
          ) : (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              className="image2"
              src={c2}
            />
          )}
          <p>Fleuriste Binette et filles</p>
        </div>
      </div>
      <div className="row two">
        <div className="p3" onClick={() => handleNavigate("/corpo/3")} onMouseEnter={() => {
            setSerieHover(c3Images);
          }}
          onMouseLeave={() => {
            setSerieHover("");
          }}>{serieHover === c3Images ? (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              src={c3Images[currentImageIndex]}
            />
          ) :
          <img
            onClick={normal}
            onMouseEnter={hover}
            onMouseLeave={normal}
            alt="intro"
            className="image3"
            src={c3}
          />}
          <p>Photographie corporative</p>
        </div>
        <div className="p4" onClick={() => handleNavigate("/corpo/4")} onMouseEnter={() => {
            setSerieHover(c4Images);
          }}
          onMouseLeave={() => {
            setSerieHover("");
          }}>{serieHover === c4Images ? (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              src={c4Images[currentImageIndex]}
            />
          ) :
          <img
            onClick={normal}
            onMouseEnter={hover}
            onMouseLeave={normal}
            alt="intro"
            src={c4}
          />}
          <p>Évènements</p>
        </div>
      </div>

      <BackTop />
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

  div {
  }

  img {
    width: 100%;
    height: 90%;
    margin-bottom: 20px;
    object-fit: cover;
  }
  p {
    font-size: clamp(14px, 3vw, 20px);
    font-weight: 500;
  }

  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }

  .p1 {
    width: 50%;
    height: 40vw;
  }
  .p2 {
    width: 45%;
    height: 55vw;
  }
  .p3 {
    height: 50vw;
    width: 50%;
    transform: translateY(-25%);
  }
  .p4 {
    width: 45%;
    height: 50vw;
  }
`;

export default EntrepriseGallery;
