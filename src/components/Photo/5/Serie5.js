import React from "react";
import styled from "styled-components";
import s5_1 from "./img/s5-1.jpg";
import s5_2 from "./img/s5-2.jpg";
import s5_3 from "./img/s5-3.jpg";
import s5_4 from "./img/s5-4.jpg";
import s5_5 from "./img/s5-5.jpg";

const Serie5 = () => {
  return (
    <Container>
      <img alt="serie1" src={s5_1} />
      <img alt="serie1" src={s5_2} />
      <img alt="serie1" src={s5_3} />
      <img alt="serie1" src={s5_4} />
      <img alt="serie1" src={s5_5} />
      
    </Container>
  )
}
const Container = styled.div`
width: 90%;
`;

export default Serie5