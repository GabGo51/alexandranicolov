import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
      
    });
  };


  return (
    <Container>
      <p>
        Bienvenue sur mon site. Je vous avoue être une artiste assez
        multidisciplinaire un peu perdue dans se monde en désordre. Comme un
        journal je vous invite à parcourir (brièvement si cela vous dit) mes
        images que j’accumule depuis très longtemps; je fais majoritairement de
        la <span onClick={() => handleNavigate("/photo")}>[1] photo</span> sur pellicule. Ayant terminé mon bacc en cinéma j’ai
        évidemment plusieurs <span onClick={() => handleNavigate("/film")}>[2] films</span> à mon compte si vous voulez les écouter
        j’ai travailler très fort sur chacun d’eux. Je conçois être quelqu’un
        qui sait s’amuser, mais je suis aussi capable de faire des projets plus
        sérieux comme des photos <span onClick={() => handleNavigate("/entreprise")}>[3] d’entreprise</span> ou des photos de produits
        variés. En espérant que ce site vous donne une meilleure idée de qui je
        suis, contactez-moi où vous voulez je suis, ces jours-ci, assez
        disponible.
      </p>
    </Container>
  );
};

const Container = styled.div`

p{
  font-size: 38px;
}
`;
export default Home;
