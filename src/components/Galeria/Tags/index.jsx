import tags from "./tags.json";
import styled from "styled-components";

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;

    @media (max-width: 1024px) {
        font-size: 20px;
    }
`;
const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 32px;
    margin-bottom: 56px;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    @media (max-width: 768px) {
        margin-bottom: 32px;
    }
`;

const TagDiv = styled.div`
    display: flex;
    gap: 24px;
    justify-content: flex-start;
    width: 100%;
    @media (max-width: 1024px) {
        overflow-x: auto;
        padding-bottom: 8px;
    }
`;

const TagButton = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: ${(props) => (props.$activo ? "#7B78E5" : "rgba(217, 217, 217, 0.3)")};
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid ${(props) => (props.$activo ? "#C98CF1" : "transparent")};

    @media (max-width: 1024px) {
        font-size: 18px;
        padding: 10px;
    }

    &:hover {
      border-color: #C98CF1;
    }
`;

// Tag muestra los botones de filtro de etiquetas en la galería.
// Recorre el archivo tags.json y crea un botón para cada etiqueta.
const Tag = ({ tagSeleccionado = 0, alCambiarTag }) => {
    return(
        
        <TagsContainer>
            <TagTitulo>Busqueda Por Tags</TagTitulo>
            <TagDiv>
                {tags.map(tag=>{
                        return (
                            <TagButton
                                key={tag.id}
                                $activo={tag.id === tagSeleccionado}
                                onClick={() => alCambiarTag(tag.id)}
                            >
                                {tag.titulo}
                            </TagButton>
                        )
                })} 
            </TagDiv>
        </TagsContainer>
        )
}

export default Tag;