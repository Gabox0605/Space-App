import Titulo from "../Titulo";
import Tag from "./Tags";
import Populares from "./Populares";
import styled from "styled-components";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const SeccionFluida = styled.section`
    flex-grow: 1;
`;

const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`
// Galeria es el componente que muestra la lista principal de imágenes.
// Recibe fotos, la función para seleccionar una foto y la función para alternar favoritos.
const Galeria = ({ fotos = [], alSeleccionarFoto, alAlterarFavorito, tagSeleccionado, alCambiarTag }) => {
    return (
        <>
            <Tag tagSeleccionado={tagSeleccionado} alCambiarTag={alCambiarTag} />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navege Por La Galeria</Titulo>
                    {fotos.length === 0 ? (
                        <p>No se encontraron fotos para esta búsqueda.</p>
                    ) : (
                        <ImagenesContainer>
                            {fotos.map(foto => (
                                <Imagen
                                    alterarFavorito={alAlterarFavorito}
                                    alSolicitarZoom={alSeleccionarFoto}
                                    key={foto.id}
                                    foto={foto}
                                />
                            ))}
                        </ImagenesContainer>
                    )}
                </SeccionFluida>
                <Populares fotos={fotos} />
            </GaleriaContainer>


        </>
    )
}

export default Galeria;