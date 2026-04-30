import styled from "styled-components";
import BotonIcono from "../../BotonIcono";

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '100%' : '460px')};
    max-width: ${(props) => (props.$expandida ? '760px' : '100%')};
    margin: ${(props) => (props.$expandida ? '0 auto' : '0')};
    align-self: center;
    display: flex;
    flex-direction: column;
    max-height: ${(props) => (props.$expandida ? 'calc(85vh - 80px)' : 'none')};
    & > img {
        width: 100%;
        height: auto;
        max-height: ${(props) => (props.$expandida ? '520px' : 'auto')};
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 14px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`;

const Pie = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Fuente = styled.span`
    color: #D9D9D9;
`;

const Imagen = ({ foto, expandida = false, alSolicitarZoom, alterarFavorito }) => {
    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.alt ?? foto.titulo} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <Pie>
                    <h4><Fuente>{foto.fuente}</Fuente></h4>
                    <BotonIcono onClick={() => alterarFavorito?.(foto)}>
                        <img src="/iconos/favorito.png" alt="Icono de favoritos" />
                    </BotonIcono>
                    {!expandida && <BotonIcono aria-hidden={expandida} onClick={()=> alSolicitarZoom(foto)}>
                            <img src="/iconos/expandir.png" alt="Icono de expandir" />
                        </BotonIcono>
                    }
                </Pie>
            </figcaption>
        </Figure>
    );
};

export default Imagen;