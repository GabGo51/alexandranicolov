import React, { useEffect, useState } from "react";
import s1 from "./img/s1.jpg";
import s2 from "./img/s2.jpg";
import s3 from "./img/s3.jpg";
import s4 from "./img/s4.jpg";
import s5 from "./img/s5.jpg";
import s6 from "./img/s6.jpg";
import s7 from "./img/s7.jpg";
import s8 from "./img/s8.jpg";
import s9 from "./img/s9.jpg";
import s10 from "./img/s10.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackTop from "../BackTop";
import { useContext } from "react";
import { MouseContext } from "../../context/mouseContext";

import s1_1 from "./1/img/s1-1.jpg";
import s1_2 from "./1/img/s1-2.jpg";
import s1_3 from "./1/img/s1-3.jpg";
import s1_4 from "./1/img/s1-4.jpg";
import s1_5 from "./1/img/s1-5.jpg";
import s1_6 from "./1/img/s1-6.jpg";
import s1_7 from "./1/img/s1-7.jpg";
import s1_8 from "./1/img/s1-8.jpg";
import s1_9 from "./1/img/s1-9.jpg";
import s1_10 from "./1/img/s1-10.jpg";
import s1_11 from "./1/img/s1-11.jpg";
import s1_12 from "./1/img/s1-12.jpg";

import s2_1 from "./2/img/s2-1.jpg";
import s2_2 from "./2/img/s2-2.jpg";
import s2_3 from "./2/img/s2-3.jpg";
import s2_4 from "./2/img/s2-4.jpg";
import s2_5 from "./2/img/s2-5.jpg";
import s2_6 from "./2/img/s2-6.jpg";
import s2_7 from "./2/img/s2-7.jpg";

import s3_1 from "./3/img/s3-1.jpg";
import s3_2 from "./3/img/s3-3.jpg";
import s3_3 from "./3/img/s3-3.jpg";
import s3_4 from "./3/img/s3-4.jpg";
import s3_5 from "./3/img/s3-5.jpg";
import s3_6 from "./3/img/s3-6.jpg";

import s4_1 from "./4/img/s4-1.jpg";
import s4_2 from "./4/img/s4-2.jpg";
import s4_3 from "./4/img/s4-3.jpg";
import s4_4 from "./4/img/s4-4.jpg";
import s4_5 from "./4/img/s4-5.jpg";
import s4_6 from "./4/img/s4-6.jpg";
import s4_7 from "./4/img/s4-7.jpg";
import s4_8 from "./4/img/s4-8.jpg";
import s4_9 from "./4/img/s4-9.jpg";
import s4_10 from "./4/img/s4-10.jpg";
import s4_11 from "./4/img/s4-11.jpg";
import s4_12 from "./4/img/s4-12.jpg";
import s4_13 from "./4/img/s4-13.jpg";
import s4_14 from "./4/img/s4-14.jpg";
import s4_15 from "./4/img/s4-15.jpg";
import s4_16 from "./4/img/s4-16.jpg";
import s4_17 from "./4/img/s4-17.jpg";

const p1Images = [
  s1_1,
  s1_2,
  s1_3,
  s1_4,
  s1_5,
  s1_6,
  s1_7,
  s1_8,
  s1_9,
  s1_10,
  s1_11,
  s1_12,
];
const p2Images = [s2_1, s2_2, s2_3, s2_4, s2_5, s2_6, s2_7];
const p3Images = [s3_1, s3_2, s3_3, s3_4, s3_5, s3_6];
const p4Images = [
  s4_2,
  s4_1,
  s4_3,
  s4_4,
  s4_5,
  s4_6,
  s4_7,
  s4_8,
  s4_9,
  s4_10,
  s4_11,
  s4_12,
  s4_13,
  s4_14,
  s4_15,
  s4_16,
  s4_17,
];

const Gallery = () => {
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
      }, 1000); // Change image every second
    } else {
      clearInterval(intervalId); // Clear interval when not hovering
    }
    return () => clearInterval(intervalId); // Cleanup on unmount or when not hovering
  }, [serieHover]);

  const { hover, normal } = useContext(MouseContext);

  console.log(currentImageIndex);

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Container>
      <div className="row">
        <div
          className="p1"
          onClick={() => handleNavigate("/photo/1")}
          onMouseEnter={() => {
            setSerieHover(p1Images);
          }}
          onMouseLeave={() => {
            setSerieHover("");
          }}
        >
          {serieHover === p1Images ? (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              src={p1Images[currentImageIndex]}
            />
          ) : (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              src={s1}
            />
          )}
          <p>la vallée brulée</p>
        </div>

        <div
          className="p2"
          onClick={() => handleNavigate("/photo/2")}
          onMouseEnter={() => {
            setSerieHover(p2Images);
          }}
          onMouseLeave={() => {
            setSerieHover("");
          }}
        >
          {serieHover === p2Images ? (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              src={p2Images[currentImageIndex]}
            />
          ) : (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              src={s2}
            />
          )}
          <p>seul au monde</p>
        </div>
      </div>
      <div className="row">
        <div
          className="p3"
          onClick={() => handleNavigate("/photo/3")}
          onMouseEnter={() => {
            setSerieHover(p3Images);
          }}
          onMouseLeave={() => {
            setSerieHover("");
          }}
        >
          {serieHover === p3Images ? (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              src={p3Images[currentImageIndex]}
            />
          ) : (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              src={s3}
            />
          )}
          <p>la musique au goût de la mer</p>
        </div>
        <div
          className="p4"
          onClick={() => handleNavigate("/photo/4")}
          onMouseEnter={() => {
            setSerieHover(p4Images);
          }}
          onMouseLeave={() => {
            setSerieHover("");
          }}
        >
          {serieHover === p4Images ? (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              src={p4Images[currentImageIndex]}
            />
          ) : (
            <img
              onClick={normal}
              onMouseEnter={hover}
              onMouseLeave={normal}
              alt="intro"
              src={s4}
            />
          )}
          <p>Margaux</p>
        </div>
      </div>

      <div className="row">
        <div className="p5" onClick={() => handleNavigate("/photo/5")}>
          <img
            onClick={normal}
            onMouseEnter={hover}
            onMouseLeave={normal}
            alt="intro"
            src={s5}
          />
          <p>48 heures plus tard</p>
        </div>
        <div className="p6" onClick={() => handleNavigate("/photo/6")}>
          <img
            onClick={normal}
            onMouseEnter={hover}
            onMouseLeave={normal}
            alt="intro"
            src={s6}
          />
          <p>bercé par le bruit des vagues</p>
        </div>
      </div>
      <div className="row">
        <div className="p7" onClick={() => handleNavigate("/photo/7")}>
          <img
            onClick={normal}
            onMouseEnter={hover}
            onMouseLeave={normal}
            alt="intro"
            src={s7}
          />
          <p>jusqu’à temps qu’on reparte</p>
        </div>
        <div className="p8" onClick={() => handleNavigate("/photo/8")}>
          <img
            onClick={normal}
            onMouseEnter={hover}
            onMouseLeave={normal}
            alt="intro"
            src={s8}
          />
          <p>Joe’s Valley</p>
        </div>
      </div>
      <div className="row">
        <div className="p9" onClick={() => handleNavigate("/photo/9")}>
          <img
            onClick={normal}
            onMouseEnter={hover}
            onMouseLeave={normal}
            alt="intro"
            src={s9}
          />
          <p>les feuilles qui dansent</p>
        </div>
        <div className="p10" onClick={() => handleNavigate("/photo/10")}>
          <img
            onClick={normal}
            onMouseEnter={hover}
            onMouseLeave={normal}
            alt="intro"
            src={s10}
          />
          <p>atmosphère fuyante</p>
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

  img {
    height: 500px;
    width: 100%;
    margin-bottom: 10px;
    object-fit: cover;
    @media (max-width: 1200px) {
      height: 350px;
    }
    @media (max-width: 600px) {
      height: 200px;
    }
  }
  p {
    font-size: clamp(14px, 3vw, 20px);
    font-weight: 500;
  }

  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  .p1 {
    width: 30%;
  }

  .p2 {
    width: 65%;
  }

  .p3 {
    width: 55%;
  }

  .p4 {
    width: 40%;
  }
  .p5 {
    width: 30%;
  }

  .p6 {
    width: 65%;
  }
  .p7 {
    width: 30%;
  }

  .p8 {
    width: 65%;
  }
  .p9 {
    width: 30%;
  }

  .p10 {
    width: 65%;
  }
`;

export default Gallery;
