import Titulo from "../Titulo";
import Tag from "./Tags";

const GaleriaContainer = styled.div`
`



const Galeria = ()=>{
    return(
        <>
        <Tag/>
        <Tag/>
        <Tag/>
        <Tag/>  
        <GaleriaContainer>
        </GaleriaContainer>
        
        <Titulo>Navege Por La Galeria</Titulo>
        </>
    )
}

export default Galeria;