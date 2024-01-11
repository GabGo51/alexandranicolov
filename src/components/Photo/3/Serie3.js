import React from 'react'
import s3_1 from "./img/s3-1.jpg";
import s3_2 from "./img/s3-2.jpg";
import s3_3 from "./img/s3-3.jpg";
import s3_4 from "./img/s3-4.jpg";
import s3_5 from "./img/s3-5.jpg";
import s3_6 from "./img/s3-6.jpg";

import styled from 'styled-components';

const Serie3 = () => {
  return (
    <Container>
      <img alt="serie1" src={s3_1} />
      <img alt="serie1" src={s3_2} />
      <img alt="serie1" src={s3_3} />
      <img alt="serie1" src={s3_4} />
      <img alt="serie1" src={s3_5} />
      <img alt="serie1" src={s3_6} />
      

    </Container>
  )
}
const Container = styled.div`
width: 90%;
`

export default Serie3