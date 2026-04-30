import Titulo from "../Titulo";
import Tag from "./Tags";
import Populares from "./Populares";
import styled from "styled-components";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
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
const Galeria = ({ fotos = [], alSeleccionarFoto, alAlterarFavorito }) => {
    return (
        <>
            <Tag />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navege Por La Galeria</Titulo>
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
                </SeccionFluida>
                <Populares fotos={fotos} />
            </GaleriaContainer>


        </>
    )
}

export default Galeria;