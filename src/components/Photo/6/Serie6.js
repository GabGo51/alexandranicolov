import React from "react";
import styled from "styled-components";
import s6_1 from "./img/s6-1.jpg";
import s6_2 from "./img/s6-2.jpg";
import s6_3 from "./img/s6-3.jpg";
import s6_4 from "./img/s6-4.jpg";
import s6_5 from "./img/s6-5.jpg";
import s6_6 from "./img/s6-6.jpg";
import s6_7 from "./img/s6-7.jpg";

const Serie6 = () => {
  return (
    <Container>
      <img alt="serie1" src={s6_1} />
      <img alt="serie1" src={s6_2} />
      <img alt="serie1" src={s6_3} />
      <img alt="serie1" src={s6_4} />
      <img alt="serie1" src={s6_5} />
      <img alt="serie1" src={s6_6} />
      <img alt="serie1" src={s6_7} />
      
    </Container>
  )
}

const Container = styled.div`
width: 90%;
`;

export default Serie6