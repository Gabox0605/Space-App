import styled from "styled-components";

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    padding: 32px 24px;
    margin-top: 48px;
    background-color: #04244f;
    color: #ffffff;
    box-sizing: border-box;

    p {
        margin: 0;
        font-size: 16px;
    }

    @media (max-width: 640px) {
        flex-direction: column;
        text-align: center;
    }
`;

const ListaRedes = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const LinkRedSocial = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;

    img {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }
`;

const redesSociales = [
    {
        nombre: "Facebook",
        icono: "/img/redes/facebook.svg",
        url: "https://www.facebook.com",
    },
    {
        nombre: "Twitter",
        icono: "/img/redes/twitter.svg",
        url: "https://www.twitter.com",
    },
    {
        nombre: "Instagram",
        icono: "/img/redes/instagram.svg",
        url: "https://www.instagram.com",
    },
];

// Footer renderiza la sección inferior con enlaces a redes sociales.
// redesSociales es un arreglo de datos que se mapea para crear enlaces e íconos.
const Footer = () => {
    return (
        <FooterEstilizado>
            <ListaRedes aria-label="Redes sociales">
                {redesSociales.map((redSocial) => (
                    <li key={redSocial.nombre}>
                        <LinkRedSocial
                            href={redSocial.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={redSocial.nombre}
                        >
                            <img src={redSocial.icono} alt="" />
                        </LinkRedSocial>
                    </li>
                ))}
            </ListaRedes>
            <p>Desarrollado por Gabriel Mena Muñoz</p>
        </FooterEstilizado>
    );
};

export default Footer;
