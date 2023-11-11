import styled from "styled-components";
import Cursor from "./Cursor";
import Hero from "./components/Home/Hero";


function App() {
  return (
    <Container className="App">
      <Cursor/>
      <Hero/>
    </Container>
  );
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export default App;
