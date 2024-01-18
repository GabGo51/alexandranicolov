import React from "react";

import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <p> alexandranicolov@gmail.com</p>
      <p>514-402-2940</p>
    </Container>
  );
};

const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Contact;
