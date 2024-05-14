import Navbar from "../components/Navbar"
import ListagemLivros from "../components/ListagemLivros"
import BotaoFlutuante from "../components/BotaoFlutuante"
import ModalFormularioUsuarios from "../components/ModalFormularioUsuarios"
import { useState } from "react"


function Livros() {
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
        <ListagemLivros reload={abreModal} handleEditar={editarUsuario}/>
        <BotaoFlutuante aoClicar={abrirModal} />
        <ModalFormularioUsuarios open={abreModal}  handleClose ={ () => setAbreModal(false)} idUsuario={idUser}/>
    </>
    )
}


export default Livros