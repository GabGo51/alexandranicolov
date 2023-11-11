import styled from "styled-components";
import Cursor from "./Cursor";


function App() {
  return (
    <Container className="App">
      <Cursor/>
      <p>yo sick bro</p>
    </Container>
  );
}

const Container = styled.div`
width: 100vw;
`

export default App;
