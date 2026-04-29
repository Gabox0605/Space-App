import Titulo from "../Titulo";
import Tag from "./Tags";
import Populares from "./Populares";
import styled from "styled-components";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
    display: flex;
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
const Galeria = ({ fotos= [] })=>{
    return(
        <>
        <Tag />
        <GaleriaContainer>
            <SeccionFluida>
               <Titulo>Navege Por La Galeria</Titulo> 
               <ImagenesContainer>
                    {fotos.map(foto => (
                        <Imagen
                            key={foto.id}
                            foto={foto}
                        />
                    ))}
               </ImagenesContainer>
            </SeccionFluida>
            <Populares>
                <Titulo>Populares</Titulo>
            </Populares>
        </GaleriaContainer>
        
        
        </>
    )
}

export default Galeria;