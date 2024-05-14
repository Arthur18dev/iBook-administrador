import Navbar from "../components/Navbar"
import ListagemUsuarios from "../components/ListagemUsuarios"
import BotaoFlutuante from "../components/BotaoFlutuante"
import ModalFormularioUsuarios from "../components/ModalFormularioUsuarios"
import { useState } from "react"


function Usuarios() {
    const [abreModal, setAbreModal] = useState(false)
    const [idUser, setidUser] = useState(null)

    const abrirModal = () => {
        setidUser(null)
        setAbreModal(true)
    }

    const editarUsuario = ( id ) => {
        setidUser(id)
        setAbreModal(true)
    }

    return (<>
        <Navbar />
        <ListagemUsuarios reload={abreModal} handleEditar={editarUsuario}/>
        <BotaoFlutuante aoClicar={abrirModal} />
        <ModalFormularioUsuarios open={abreModal}  handleClose ={ () => setAbreModal(false)} idUsuario={idUser}/>
    </>
    )
}


export default Usuarios