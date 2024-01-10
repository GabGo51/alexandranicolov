import React from 'react'
import styled from 'styled-components'
import c1 from './img/c1.jpg'
import c2 from './img/c2.jpg'
import c3 from './img/c3.jpg'
import c4 from './img/c4.jpg'
import { useNavigate } from "react-router-dom";


const EntrepriseGallery = () => {
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
        <div className="p1" onClick={() => handleNavigate("/corpo/1")}>
          <img alt="intro" src={c1} />
          <p>Place Publique</p>
        </div>

        <div className="p2" onClick={() => handleNavigate("/corpo/2")}>
          <img alt="intro" className='image2' src={c2} />
          <p>Fleurist Binette et filles</p>
        </div>
      </div>
      <div className="row two">
        <div className="p3"  onClick={() => handleNavigate("/corpo/3")}>
          <img alt="intro" className='image3' src={c3} />
          <p>Photographie corporative</p>
        </div>
        <div className="p4" onClick={() => handleNavigate("/corpo/4")}>
          <img alt="intro" src={c4} />
          <p>Évènements</p>
        </div>
      </div>

    </Container>
    
  )
}

const Container = styled.div`
width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    max-height: 800px;
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
    margin-bottom: 80px;
  }

  .two{
    align-items: end;
    transform: translateY(-20%);
  }
  .p1 {
    width: 50%;
  }
  .p2 {
    width: 40%;
   .image2{
    @media (max-width: 1200px) {
      height: 600px;
    }
    @media (max-width: 600px) {
      height: 400px;
    }
   }
  }
  .p3 {
    width: 45%;
    

    .image3{
    @media (max-width: 1200px) {
      height: 600px;
    }
    @media (max-width: 600px) {
      height: 350px;
    }
   }
  }
  .p4 {
    width: 40%;
    transform: translateY(20%);
    
  }

`

export default EntrepriseGallery