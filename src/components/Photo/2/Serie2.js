import React from 'react'
import s2_1 from "./img/s2-1.jpg";
import s2_2 from "./img/s2-2.jpg";
import s2_3 from "./img/s2-3.jpg";
import s2_4 from "./img/s2-4.jpg";
import s2_5 from "./img/s2-5.jpg";
import s2_6 from "./img/s2-6.jpg";
import s2_7 from "./img/s2-7.jpg";
import styled from 'styled-components';


const Serie2 = () => {
  return (
    <Container>
      <img alt="serie1" src={s2_1} />
      <img alt="serie1" src={s2_2} />
      <img alt="serie1" src={s2_3} />
      <img alt="serie1" src={s2_4} />
      <img alt="serie1" src={s2_5} />
      <img alt="serie1" src={s2_6} />
      <img alt="serie1" src={s2_7} />

    </Container>
  )
}

const Container = styled.div`
width: 90%;
`

export default Serie2