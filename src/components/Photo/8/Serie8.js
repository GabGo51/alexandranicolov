import React from "react";
import styled from "styled-components";
import s8_1 from "./img/s8-1.jpg";
import s8_2 from "./img/s8-2.jpg";
import s8_3 from "./img/s8-3.jpg";
import s8_4 from "./img/s8-4.jpg";
import s8_5 from "./img/s8-5.jpg";
import s8_6 from "./img/s8-6.jpg";

const serie8 = () => {
  return (
    <Container>
      <img alt="serie1" src={s8_1} />
      <img alt="serie1" src={s8_2} />
      <img alt="serie1" src={s8_3} />
      <img alt="serie1" src={s8_4} />
      <img alt="serie1" src={s8_5} />
      <img alt="serie1" src={s8_6} />
      
    </Container>
  )
}

const Container = styled.div`
width: 90%;
`;

export default serie8