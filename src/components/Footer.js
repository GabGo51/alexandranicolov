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
padding: 50px 0;
display: flex;
width: 90%;

a{
  margin-right: 50px;
  margin-top: 50px;
  @media (max-width:1000px){
      margin-right: 25px;
    }
}
`

export default Footer