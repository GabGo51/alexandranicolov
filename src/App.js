import styled from "styled-components";
import Cursor from "./Cursor";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoGallery from "./components/Photo/PhotoGallery";
import EntrepriseGallery from "./components/Entreprise/EntrepriseGallery";
import FilmGallery from "./components/Film/FilmGallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import p1 from "./components/Photo/1/Serie1";
import p2 from "./components/Photo/2/Serie2";
import p3 from "./components/Photo/3/Serie3";
import p4 from "./components/Photo/4/Serie4";
import p5 from "./components/Photo/5/Serie5";
import p6 from "./components/Photo/6/Serie6";
import p7 from "./components/Photo/7/Serie7";
import p8 from "./components/Photo/8/Serie8";
import p9 from "./components/Photo/9/Serie9";
import p10 from "./components/Photo/10/Serie10";
function App() {
  return (
    <Router>
      <Container className="App">
        <Cursor />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo" element={<PhotoGallery />} />
          <Route path="/entreprise" element={<EntrepriseGallery />} />
          <Route path="/film" element={<FilmGallery />} />
        </Routes>
        <Footer/>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: auto; 
  padding: 60px 60px;
`;

export default App;
