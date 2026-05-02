import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import { useState } from "react"; // useState es un hook de React para guardar y actualizar estado local en componentes funcionales
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
`;

// App es el componente principal de la aplicaciÃ³n.
// Mantiene el estado de la galerÃ­a y de la foto seleccionada para el modal.
const App = () => {
  // fotosDeGaleria guarda la lista de imÃ¡genes que se muestran en la galerÃ­a.
  // setFotosDeGaleria es la funciÃ³n que se usa para actualizar ese estado.
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos);

  // fotoSeleccionada guarda la foto que se abriÃ³ en el modal de zoom.
  // setFotoSeleccionada actualiza quÃ© foto estÃ¡ activa en el modal.
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  // terminoBusqueda guarda el texto que el usuario escribe en el campo de bÃºsqueda.
  // setTerminoBusqueda actualiza ese valor y hace que se vuelva a renderizar la galerÃ­a.
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  // tagSeleccionado guarda la etiqueta activa para filtrar fotos por tagId.
  const [tagSeleccionado, setTagSeleccionado] = useState(0);

  const alAlterarFavorito = (foto) => {
    // AquÃ­ actualizamos el estado de la galerÃ­a.
    // React vuelve a renderizar el componente cuando llamamos a setFotosDeGaleria.
    setFotosDeGaleria((fotosPrevias) =>
      fotosPrevias.map((fotoDeGaleria) => ({
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita,
      }))
    );

    // Si el modal estÃ¡ abierto con la foto seleccionada, tambiÃ©n actualizamos ese estado.
    setFotoSeleccionada((seleccionadaPrev) =>
      seleccionadaPrev && seleccionadaPrev.id === foto.id
        ? { ...seleccionadaPrev, favorita: !seleccionadaPrev.favorita }
        : seleccionadaPrev
    );
  }

  // Selecciona una foto para abrirla en el modal de zoom.
  const seleccionarFoto = (foto) => setFotoSeleccionada(foto);

  // Cierra el modal eliminando la foto seleccionada.
  const cerrarModal = () => setFotoSeleccionada(null);

  // Normaliza texto eliminando tildes y diacríticos, y lo convierte a minúsculas.
  const normalizarTexto = (texto) =>
    texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const fotosFiltradas = fotosDeGaleria.filter((foto) => {
    const textoCompleto = `${foto.titulo} ${foto.fuente} ${foto.alt ?? ""}`;
    const coincideTexto = normalizarTexto(textoCompleto).includes(normalizarTexto(terminoBusqueda.trim()));
    const coincideTag = tagSeleccionado === 0 || foto.tagId === tagSeleccionado;
    return coincideTexto && coincideTag;
  });

  return (
    <>
      <FondoGradiente>
        <GlobalStyle />

        <AppContainer>
          <Cabecera terminoBusqueda={terminoBusqueda} onBuscar={setTerminoBusqueda} />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner />
              <Galeria
                alSeleccionarFoto={seleccionarFoto}
                fotos={fotosFiltradas}
                alAlterarFavorito={alAlterarFavorito}
                tagSeleccionado={tagSeleccionado}
                alCambiarTag={setTagSeleccionado}
              />
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
