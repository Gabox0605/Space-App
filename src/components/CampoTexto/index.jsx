import styled from "styled-components";


const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 64px 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C884FF;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
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

const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="¿Qué quieres buscar?" {...props} />
            <IconoLupa src="img/search.png" alt="lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto;