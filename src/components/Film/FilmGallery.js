import React from 'react'
import Header from '../Header'
// import vid1 from './img/vid1.gif'
// import vid2 from './img/vid2.gif'
import styled from 'styled-components'


const FilmGallery = () => {
  return (
    <Container>
    
    {/* <img src={vid1}/>
    <img src={vid2}/> */}
    </Container>
    
  )
}

const Container = styled.div`
width: 90%;
img{
  width: 100%;
  margin-bottom: 100px;
}
`

export default FilmGallery