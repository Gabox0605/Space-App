import styled from "styled-components";
import BotonIcono from "../../BotonIcono";

const Figure = styled.figure`
    width: 100%;
    max-width: ${(props) => (props.$expandida ? '900px' : '460px')};
    margin: ${(props) => (props.$expandida ? '0 auto' : '0')};
    align-self: center;
    display: flex;
    flex-direction: ${(props) => (props.$expandida ? 'row' : 'column')};
    gap: ${(props) => (props.$expandida ? '24px' : '0')};
    max-height: ${(props) => (props.$expandida ? 'calc(85vh - 80px)' : 'none')};
    & > img {
        width: ${(props) => (props.$expandida ? '50%' : '100%')};
        height: auto;
        max-height: ${(props) => (props.$expandida ? '520px' : 'auto')};
        object-fit: cover;
        border-radius: ${(props) => (props.$expandida ? '20px 0 0 20px' : '20px 20px 0 0')};
    }
    figcaption {
        width: ${(props) => (props.$expandida ? '50%' : '100%')};
        background-color: #001634;
        border-radius: ${(props) => (props.$expandida ? '0 20px 20px 0' : '0px 0px 20px 20px')};
        color: white;
        box-sizing: border-box;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

    @media (max-width: 740px) {
        flex-direction: column;
        gap: 16px;
        max-height: none;
        & > img {
            width: 100%;
            max-height: none;
            border-radius: 20px 20px 0 0;
        }
        figcaption {
            width: 100%;
            border-radius: 0 0 20px 20px;
            padding: 18px;
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

const Resena = styled.p`
    color: #D9D9D9;
    font-size: 15px;
    line-height: 1.8;
    margin: 16px 0;
    white-space: normal;
`;

// Imagen muestra una tarjeta con la foto, su título y acciones de favorito/zoom.
// expandida controla si la foto se muestra en modo modal o en la galería.
const Imagen = ({ foto, expandida = false, alSolicitarZoom, alterarFavorito }) => {

    // iconoFavorito elige el icono activo o inactivo según foto.favorita.
    const iconoFavorito = foto.favorita ? "/iconos/favorito-activo.png" : "/iconos/favorito.png"
    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.alt ?? foto.titulo} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                {expandida && foto.reseña && <Resena>{foto.reseña}</Resena>}
                <Pie>
                    <h4><Fuente>{foto.fuente}</Fuente></h4>
                    <BotonIcono onClick={() => alterarFavorito?.(foto)}>
                        <img src={iconoFavorito} alt="Icono de favoritos" />
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