import React from "react";
import styled from "styled-components";
import s9_1 from "./img/s9-1.jpg";
import s9_2 from "./img/s9-2.jpg";
import s9_3 from "./img/s9-3.jpg";
import s9_4 from "./img/s9-4.jpg";
import s9_5 from "./img/s9-5.jpg";
import s9_6 from "./img/s9-6.jpg";

const Serie9 = () => {
  return (
    <Container>
      <img alt="serie1" src={s9_1} />
      <img alt="serie1" src={s9_2} />
      <img alt="serie1" src={s9_3} />
      <img alt="serie1" src={s9_4} />
      <img alt="serie1" src={s9_5} />
      <img alt="serie1" src={s9_6} />
      
    </Container>
  )
}
const Container = styled.div`
width: 90%;
`;

export default Serie9