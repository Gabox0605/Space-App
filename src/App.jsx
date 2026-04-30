import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import Footer from "./components/Footer";
import ModalZoom from "./components/ModalZoom";

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: auto;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  padding: 0 24px;
  max-width: 100%;
  box-sizing: border-box;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
`;

const App = () => {
  const [fotosDeGaleria] = useState(fotos);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  const alAlterarFavorito = (foto) => {
    console.log(foto);
  }
  const seleccionarFoto = (foto) => setFotoSeleccionada(foto);
  const cerrarModal = () => setFotoSeleccionada(null);

  return (
    <>
      <FondoGradiente>
        <GlobalStyle />

        <AppContainer>
          <Cabecera />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner />
              <Galeria alSeleccionarFoto={seleccionarFoto} fotos={fotosDeGaleria} alAlterarFavorito={alAlterarFavorito} />
            </ContenidoGaleria>
          </MainContainer>

          <Footer />
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada} onCerrar={cerrarModal} alAlterarFavorito={alAlterarFavorito} />
      </FondoGradiente>
    </>
  )
}

export default App;
