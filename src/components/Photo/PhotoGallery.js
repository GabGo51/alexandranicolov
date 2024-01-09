import React from 'react'
import Header from '../Header'
import s1 from './img/s1.jpg'
import s2 from './img/s2.jpg'
import s3 from './img/s3.jpg'
import s4 from './img/s4.jpg'
import s5 from './img/s5.jpg'
import s6 from './img/s6.jpg'
import s7 from './img/s7.jpg'
import s8 from './img/s8.jpg'
import s9 from './img/s9.jpg'
import s10 from './img/s10.jpg'
import styled from 'styled-components'
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
    
    <img onClick={() => handleNavigate("/photo/1")} alt='intro' src={s1}/>
    <img onClick={() => handleNavigate("/photo/2")} alt='intro' src={s2}/>
    <img onClick={() => handleNavigate("/photo/3")} alt='intro' src={s3}/>
    <img onClick={() => handleNavigate("/photo/4")} alt='intro' src={s4}/>
    <img onClick={() => handleNavigate("/photo/5")} alt='intro' src={s5}/>
    <img onClick={() => handleNavigate("/photo/6")} alt='intro' src={s6}/>
    <img onClick={() => handleNavigate("/photo/7")} alt='intro' src={s7}/>
    <img onClick={() => handleNavigate("/photo/8")} alt='intro' src={s8}/>
    <img onClick={() => handleNavigate("/photo/9")} alt='intro' src={s9}/>
    <img onClick={() => handleNavigate("/photo/10")} alt='intro' src={s10}/>
    </Container>
  )
}

const Container = styled.div`
img{
  height: 700px;
}
`

export default Gallery