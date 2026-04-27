import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";

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

const ContenidoGaleira = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;
`


function App() {
  return (
    <>
      <FondoGradiente>
        <GlobalStyle />
        
        <AppContainer>
          <Cabecera />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleira>
              <Banner/>
              <Galeria/>
            </ContenidoGaleira>
          </MainContainer>
          
        </AppContainer>
        
      </FondoGradiente>
    </>
  )
}

export default App;
