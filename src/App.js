import styled from "styled-components";
import Cursor from "./Cursor";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoGallery from "./components/Photo/PhotoGallery";
import EntrepriseGallery from "./components/Entreprise/EntrepriseGallery";
import FilmGallery from "./components/Film/FilmGallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePhone from "./components/HomePhone";
import { useState, useEffect } from "react";
import Serie1 from "./components/Photo/1/Serie1";
import Serie2 from "./components/Photo/2/Serie2";
import Serie3 from "./components/Photo/3/Serie3";
import Serie4 from "./components/Photo/4/Serie4";
import Serie5 from "./components/Photo/5/Serie5";
import Serie6 from "./components/Photo/6/Serie6";
import Serie7 from "./components/Photo/7/Serie7";
import Serie8 from "./components/Photo/8/Serie8";
import Serie9 from "./components/Photo/9/Serie9";
import Serie10 from "./components/Photo/10/Serie10";
import Corpo1 from "./components/Entreprise/1/Corpo1";
import Corpo2 from "./components/Entreprise/2/Corpo2";
import Corpo3 from "./components/Entreprise/3/Corpo3";
import Corpo4 from "./components/Entreprise/4/Corpo4";
function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

  useEffect(() => {
    // Update isSmallScreen state when window is resized
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const HomeElement = isSmallScreen ? HomePhone : Home;
  return (
    <Router>
      <Container className="App">
        <Cursor />
        <Header />
        <Routes>
          <Route path="/" element={<HomeElement />} />
          <Route path="/photo" element={<PhotoGallery />} />
          <Route path="/entreprise" element={<EntrepriseGallery />} />
          <Route path="/film" element={<FilmGallery />} />
          <Route path="/photo/1" element={<Serie1 />} />
          <Route path="/photo/2" element={<Serie2 />} />
          <Route path="/photo/3" element={<Serie3 />} />
          <Route path="/photo/4" element={<Serie4 />} />
          <Route path="/photo/5" element={<Serie5 />} />
          <Route path="/photo/6" element={<Serie6 />} />
          <Route path="/photo/7" element={<Serie7 />} />
          <Route path="/photo/8" element={<Serie8 />} />
          <Route path="/photo/9" element={<Serie9 />} />
          <Route path="/photo/10" element={<Serie10 />} />
          <Route path="/corpo/1" element={<Corpo1 />} />
          <Route path="/corpo/2" element={<Corpo2 />} />
          <Route path="/corpo/3" element={<Corpo3 />} />
          <Route path="/corpo/4" element={<Corpo4 />} />
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
  
`;

export default App;
