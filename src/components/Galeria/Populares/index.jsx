import styled from "styled-components"
import Titulo from "../../Titulo"

import fotosPopulares from "../../../fotos-populares.json"
const ColumnaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`

const Imagen = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Boton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

// Populares muestra las imágenes destacadas de la sección lateral.
// Usa fotosPopulares importadas desde un JSON para renderizar cada imagen.
const Populares = () => {
    return (
        <section>
            <Titulo $align='center'>Populares</Titulo>
            <ColumnaFotos> 
                {fotosPopulares.map(foto => <Imagen key={foto.id} src={foto.path} alt={foto.alt}/>)}
            </ColumnaFotos>
            <Boton>Ver más</Boton>
        </section>
    )
}

export default Populares