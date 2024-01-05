import styled from "styled-components";
import Cursor from "./Cursor";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoGallery from "./components/Photo/PhotoGallery";
import EntrepriseGallery from "./components/Entreprise/EntrepriseGallery";
import FilmGallery from "./components/Film/FilmGallery";
import Header from "./components/Header";
import Serie1 from "./components/Photo/1/Serie1";
function App() {
  return (
    <Router>
      <Container className="App">
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/photo"
            element={
              <>
                <Header />
                <PhotoGallery />
              </>
            }
          />
          <Route
            path="/entreprise"
            element={
              <>
                <Header />
                <EntrepriseGallery />
              </>
            }
          />
          <Route
            path="/film"
            element={
              <>
                <Header />
                <FilmGallery />
              </>
            }
          />
          <Route
            path="/photo/1"
            element={
              <>
                <Header />
                <Serie1 />
              </>
            }
          />
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
