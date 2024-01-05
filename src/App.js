import styled from "styled-components";
import Cursor from "./Cursor";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoGallery from "./components/Photo/PhotoGallery";
import EntrepriseGallery from "./components/Entreprise/EntrepriseGallery";
import FilmGallery from "./components/Film/FilmGallery";

function App() {
  return (
    <Router>
      <Container className="App">
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo" element={<PhotoGallery />} />
          <Route path="/entreprise" element={<EntrepriseGallery />} />
          <Route path="/film" element={<FilmGallery />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
