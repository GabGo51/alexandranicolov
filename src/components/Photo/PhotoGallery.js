import React from "react";
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

const Gallery = () => {
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
        <div className="p1" onClick={() => handleNavigate("/photo/1")}>
          <img alt="intro" src={s1} />
          <p>la vallée brulée</p>
        </div>

        <div className="p2" onClick={() => handleNavigate("/photo/2")}>
          <img alt="intro" src={s2} />
          <p>seul au monde</p>
        </div>
      </div>
      <div className="row">
        <div className="p3" onClick={() => handleNavigate("/photo/3")}>
          <img alt="intro" src={s3} />
          <p>la musique au goût de la mer</p>
        </div>
        <div className="p4" onClick={() => handleNavigate("/photo/4")}>
          <img alt="intro" src={s4} />
          <p>Margaux</p>
        </div>
      </div>

      <div className="row">
        <div className="p5" onClick={() => handleNavigate("/photo/5")}>
          <img alt="intro" src={s5} />
          <p>48 heures plus tard</p>
        </div>
        <div className="p6" onClick={() => handleNavigate("/photo/6")}>
          <img alt="intro" src={s6} />
          <p>bercé par le bruit des vagues</p>
        </div>
      </div>
      <div className="row">
        <div className="p7" onClick={() => handleNavigate("/photo/7")}>
          <img alt="intro" src={s7} />
          <p>jusqu’à temps qu’on reparte</p>
        </div>
        <div className="p8" onClick={() => handleNavigate("/photo/8")}>
          <img alt="intro" src={s8} />
          <p>Joe’s Valley</p>
        </div>
      </div>
      <div className="row">
        <div className="p9" onClick={() => handleNavigate("/photo/9")}>
          <img alt="intro" src={s9} />
          <p>les feuilles qui dansent</p>
        </div>
        <div className="p10" onClick={() => handleNavigate("/photo/10")}>
          <img alt="intro" src={s10} />
          <p>atmosphère fuyante</p>
        </div>
      </div>
      <BackTop/>

    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 700px;
    width: 100%;
    margin-bottom: 10px;
    object-fit: cover;
    @media (max-width: 1200px) {
      height: 500px;
    }
    @media (max-width: 600px) {
      height: 250px;
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
