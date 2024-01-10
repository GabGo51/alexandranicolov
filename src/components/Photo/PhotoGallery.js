import React from "react";
import Header from "../Header";
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
        <img className="p1" onClick={() => handleNavigate("/photo/1")} alt="intro" src={s1} />
        <img className="p2" onClick={() => handleNavigate("/photo/2")} alt="intro" src={s2} />
      </div>
      <div className="row">
        <img className="p3" onClick={() => handleNavigate("/photo/3")} alt="intro" src={s3} />
        <img className="p4" onClick={() => handleNavigate("/photo/4")} alt="intro" src={s4} />
      </div>

      <div className="row">
        <img className="p5" onClick={() => handleNavigate("/photo/5")} alt="intro" src={s5} />
        <img className="p6" onClick={() => handleNavigate("/photo/6")} alt="intro" src={s6} />
      </div>
      <div className="row">
        <img className="p7" onClick={() => handleNavigate("/photo/7")} alt="intro" src={s7} />
        <img className="p8" onClick={() => handleNavigate("/photo/8")} alt="intro" src={s8} />
      </div>
      <div className='row'>
        <img className="p9" onClick={() => handleNavigate("/photo/9")} alt="intro" src={s9} />
        <img className="p10" onClick={() => handleNavigate("/photo/10")} alt="intro" src={s10} />
      </div>

      
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  img {
    height: 700px;
    object-fit: cover;
    @media (max-width: 1200px) {
      height: 500px;
    }
    @media (max-width: 600px) {
      height: 250px;
    }
  }

  .row{
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  .p1{
    width: 30%;
  }

  .p2{
    width: 65%;
  }

  .p3{
    width: 55%;
  }

  .p4{
    width: 40%;
  }
  .p5{
    width: 30%;
  }

  .p6{
    width: 65%;
  }
  .p7{
    width: 30%;
  }

  .p8{
    width: 65%;
  }
  .p9{
    width: 30%;
  }

  .p10{
    width: 65%;
  }
`;

export default Gallery;
