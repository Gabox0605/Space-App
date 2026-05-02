import styled from "styled-components"
import Imagen from "../Galeria/Imagen"
import BotonIcono from "../BotonIcono"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`
const DialogEstilizado = styled.dialog`
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 16px;
    margin: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;

    form {
        margin-top: 16px;
        button {
            position: static;
        }
    }

    @media (max-width: 740px) {
        align-items: flex-start;
        padding: 12px;
        width: 100%;
        max-width: 100%;
    }
`
// ModalZoom muestra una foto en grande cuando el usuario hace clic en expandir.
// foto es la imagen seleccionada, onCerrar cierra el modal y alAlterarFavorito altera el estado de favorito.
const ModalZoom = ({ foto, onCerrar, alAlterarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay onClick={onCerrar} />
                <DialogEstilizado open={!!foto} onClose={onCerrar}>
                    <Imagen foto={foto} expandida={true} alterarFavorito={alAlterarFavorito} />
                    <form method="dialog">
                        <BotonIcono formMethod="dialog">
                            <img src="/iconos/cerrar.png" alt="Ícono de cerrar" />
                        </BotonIcono>
                    </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom