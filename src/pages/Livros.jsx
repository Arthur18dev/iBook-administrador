import Navbar from "../components/Navbar"
import ListagemLivros from "../components/ListagemLivros"
import BotaoFlutuante from "../components/BotaoFlutuante"
import ModalFormularioLivro from "../components/ModalFormularioLivro"
import { useState } from "react"


function Livros() {
    const [abreModal, setAbreModal] = useState(false)
    const [idLivro, setidLivro] = useState(null)

    const abrirModal = () => {
        setidLivro(null)
        setAbreModal(true)
    }

    const editarLivro = ( id ) => {
        setidLivro(id)
        setAbreModal(true)
    }

    return (<>
        <Navbar />
        <ListagemLivros reload={abreModal} handleEditar={editarLivro}/>
        <BotaoFlutuante aoClicar={abrirModal} />
        <ModalFormularioLivro open={abreModal}  handleClose ={ () => setAbreModal(false)} idLivro={idLivro}/>
    </>
    )
}


export default Livros