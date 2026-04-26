import styled from "styled-components";
import ItemNavegacion from "./ItemNavegacion";

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;  
`



const BarraLateral = () => {
    return (
    <aside>
        <nav>
            <ListaEstilizada>
                <ItemNavegacion iconoActivo="iconos/home-activo.png" iconoInactivo="iconos/home-inactivo.png"><a href="#">Inicio</a></ItemNavegacion>
                <ItemNavegacion activo={true} iconoActivo="iconos/mas-vistas-activo.png" iconoInactivo="iconos/mas-vistas-inactivo.png"><a href="#">Más vistas</a></ItemNavegacion>
                <ItemNavegacion iconoActivo="iconos/me-gusta-activo.png" iconoInactivo="iconos/me-gusta-inactivo.png"><a href="#">Más Me Gusta</a></ItemNavegacion>
                <ItemNavegacion iconoActivo="iconos/nuevas-activo.png" iconoInactivo="iconos/nuevas-inactivo.png"><a href="#">Nuevas</a></ItemNavegacion>
                <ItemNavegacion iconoActivo="iconos/sorprendeme-activo.png" iconoInactivo="iconos/sorprendeme-inactivo.png"><a href="#">Sorpréndame</a></ItemNavegacion>
            </ListaEstilizada>  
        </nav>
    </aside>)
}
// public\iconos\mas-vistas-activo.png

export default BarraLateral;