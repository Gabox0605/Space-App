import styled from "styled-components";

const FigureEstilizada = styled.figure`
    background-image: url("/assets/banner.png");
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`

// Banner muestra la sección hero con la imagen de fondo y el título principal.
const Banner = ()=>{
    return(
        <FigureEstilizada>
            <TituloEstilizado>La galería más completa del espacio</TituloEstilizado>
        </FigureEstilizada>
    )
}

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;

    @media (max-width: 1024px) {
        font-size: 30px;
        line-height: 38px;
        padding: 0 32px;
    }
`


export default Banner;