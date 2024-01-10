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
import P1 from "./components/Photo/1/Serie1";
import P2 from "./components/Photo/2/Serie2";
import P3 from "./components/Photo/3/Serie3";
import P4 from "./components/Photo/4/Serie4";
import P5 from "./components/Photo/5/Serie5";
import P6 from "./components/Photo/6/Serie6";
import P7 from "./components/Photo/7/Serie7";
import P8 from "./components/Photo/8/Serie8";
import P9 from "./components/Photo/9/Serie9";
import P10 from "./components/Photo/10/Serie10";
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
          <Route path="/photo/1" element={<P1 />} />
          <Route path="/photo/2" element={<P2 />} />
          <Route path="/photo/3" element={<P3 />} />
          <Route path="/photo/4" element={<P4 />} />
          <Route path="/photo/5" element={<P5 />} />
          <Route path="/photo/6" element={<P6 />} />
          <Route path="/photo/7" element={<P7 />} />
          <Route path="/photo/8" element={<P8 />} />
          <Route path="/photo/9" element={<P9 />} />
          <Route path="/photo/10" element={<P10 />} />
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
