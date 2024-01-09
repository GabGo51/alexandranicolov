import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
const Footer = () => {

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
      
    });
  };
  return (
    <Container>
    <a>Contact</a>
    <a>Vimeo</a>
    <a>Instagram</a>
    <a>Facebook</a>
    </Container>
  )
}

const Container = styled.div`
display: flex;
width: 100vw;

a{
  margin: 0 50px;
}
`

export default Footer