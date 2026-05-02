import styled from "styled-components";


const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 64px 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C884FF;
    background: transparent;
    box-sizing: border-box;
    width: 100%;
    max-width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
    &::placeholder {
        color: #D9D9D9;
    }
`;

const IconoLupa = styled.img`
    position: absolute;
    top: 50%;
    right: 20px;
    width: 32px;
    height: 32px;
    transform: translateY(-50%);
`;

// CampoTexto es el componente de búsqueda con un campo y un icono de lupa.
// Recibe props adicionales para permitir personalizar el input desde quien lo usa.
const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="¿Qué quieres buscar?" {...props} />
            <IconoLupa src="img/search.png" alt="lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto;