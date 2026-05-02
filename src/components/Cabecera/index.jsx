import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 60px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 32px;
    }


    > img {
        width: 150px;
    }
    
`;

// Cabecera es el componente de la parte superior de la página.
// Incluye el logo y el campo de búsqueda.
const Cabecera = ({ terminoBusqueda, onBuscar }) => {
  return <HeaderEstilizado>
      <img src="img/logo.png" alt="Logo" />
      <CampoTexto
        value={terminoBusqueda}
        onChange={(event) => onBuscar(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            onBuscar(event.target.value);
          }
        }}
      />
    </HeaderEstilizado>
  
};

export default Cabecera;    