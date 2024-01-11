import React from "react";
import styled from "styled-components";
import s7_1 from "./img/s7-1.jpg";
import s7_2 from "./img/s7-2.jpg";
import s7_3 from "./img/s7-3.jpg";
import s7_4 from "./img/s7-4.jpg";
import s7_5 from "./img/s7-5.jpg";

const serie7 = () => {
  return (
    <Container>
      <img alt="serie1" src={s7_1} />
      <img alt="serie1" src={s7_2} />
      <img alt="serie1" src={s7_3} />
      <img alt="serie1" src={s7_4} />
      <img alt="serie1" src={s7_5} />
      
    </Container>
  )
}

const Container = styled.div`
width: 90%;
`;

export default serie7