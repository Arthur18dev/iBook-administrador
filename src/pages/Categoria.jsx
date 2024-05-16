import Navbar from "../components/Navbar"
import ListagemCategorias from "../components/ListagemCategorias"
import ModalFormularioLivro from "../components/ModalFormularioLivro"
import { useState } from "react"


function Categoria() {
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
        <ListagemCategorias reload={abreModal} handleEditar={editarLivro}/>
        <ModalFormularioLivro open={abreModal}  handleClose ={ () => setAbreModal(false)} idLivro={idLivro}/>
    </>
    )
}


export default Categoria