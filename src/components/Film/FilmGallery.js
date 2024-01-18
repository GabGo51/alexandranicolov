import React from 'react'
import vid1 from './img/vid1.gif'
import vid2 from './img/vid2.gif'
import styled from 'styled-components'


const FilmGallery = () => {
  return (
    <Container>
    <a href='https://vimeo.com/845609888' target='#'>
      <img src={vid1}/>
    </a>
    <a href='https://app.frame.io/presentations/3d7729d1-e779-43a2-beee-f21977187df4' target='#'>
      <img src={vid2}/>
    </a>
    
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