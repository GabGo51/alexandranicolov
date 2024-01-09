import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
      
    });
  };
  return (
    <Container>
    <h1 onClick={() => handleNavigate("/")}>ALEXANDRA NICOLOV</h1>
    <button onClick={() => handleNavigate("/photo")}>Photo</button>
    <button>Film</button>
    </Container>
  )
}

const Container = styled.div`

padding: 20px 0;
padding-top: 100px;
display: flex;
width: 100vw;
justify-content: flex-start;

button{
  margin: 0 60px;
}

`

export default Header