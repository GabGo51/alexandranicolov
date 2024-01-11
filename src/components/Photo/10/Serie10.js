import React from "react";
import styled from "styled-components";
import s10_1 from "./img/s10-1.jpg";
import s10_2 from "./img/s10-2.jpg";
import s10_3 from "./img/s10-3.jpg";
import s10_4 from "./img/s10-4.jpg";
import s10_5 from "./img/s10-5.jpg";
import s10_6 from "./img/s10-6.jpg";

const Serie10 = () => {
  return (
    <Container>
      <img alt="serie1" src={s10_1} />
      <img alt="serie1" src={s10_2} />
      <img alt="serie1" src={s10_3} />
      <img alt="serie1" src={s10_4} />
      <img alt="serie1" src={s10_5} />
      <img alt="serie1" src={s10_6} />
      
    </Container>
  )
}
const Container = styled.div`
width: 90%;
`;

export default Serie10