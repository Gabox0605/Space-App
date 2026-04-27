import styled from "styled-components";

const ItemListaEstilizado= styled.li`
    font-size:24px;
    margin-bottom: 30px;
    line-height:28px;
    display:flex;
    align-items:center;
    gap: 16px;
    font-family: ${props => props.$activo ? "GandhiSansBold" : "GandhiSansRegular"};

    a {
        color: ${props => props.$activo ? "#7b78e5" : "#d9d9d9"};
        text-decoration: none; /* Para quitar el subrayado por defecto de los enlaces */
    }

`


const ItemNavegacion = ({children, iconoActivo, iconoInactivo, activo=false}) => {
    return (
        <ItemListaEstilizado $activo={activo}>
        <img src={activo ? iconoActivo : iconoInactivo} alt="icono" />
            {children}
        </ItemListaEstilizado>
    )
}

export default ItemNavegacion;