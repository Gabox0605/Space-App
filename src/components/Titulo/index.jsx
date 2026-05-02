import styled from "styled-components";

// Titulo es un componente styled que usa un h2 para mostrar títulos.
// Acepta la propiedad $align para cambiar la alineación del texto.
const Titulo = styled.h2`
   font-size: 32px;
   color: #7B78E5;
   text-align: ${props => props.$align ? props.$align : "left" };
`
  
export default Titulo;