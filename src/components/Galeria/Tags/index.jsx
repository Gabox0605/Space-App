import tags from "./tags.json";
import styled from "styled-components";

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;
const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 64px;
    margin-bottom: 56px;
`;
const TagButton = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`;

const Tag = () => {
    return(
        
        <TagsContainer>
            <TagTitulo>Busqueda Por Tags</TagTitulo>
           {tags.map(tag=>{
                return <TagButton key={tag.id}>{tag.titulo}</TagButton>
        })} 
        </TagsContainer>
        )
}

export default Tag;