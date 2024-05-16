import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styles from "../styles/ModalFormularioLivro.module.css"
import { FormGroup, FormControl, TextField, Card, CardContent, CardActionArea, Button, FormControlLabel, Checkbox } from '@mui/material';
import { useEffect, useState } from 'react';
import api from '../services/api';
import ModalGenerico from './ModalGenerico';
import ServiceUsuarios from "../services/usuarios"


function ModalFormularioLivro({ open, handleClose, idUsuario }) {

    const [imagem, setImagem] = useState("")
    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [descricao, setDescricao] = useState(false)
    const [sinopse, setSinopse] = useState(false)
    const [totalPaginas, setTotalPaginas] = useState("")
    const [idioma, setIdioma] = useState("")
    const [dataPublicacao, setDataPublicacao] = useState("")
    const [edicao, setEdicao] = useState("")
    const [preco, setPreco] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [lacamento, setLacamento] = useState("")
    const [categoria_id, setCategoria_id] = useState("")
    const [frete, setFrete] = useState("")
    const [showMessage, setShowMessage] = useState(false)
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [cor, setCor] = useState("")
    const [titleFormulario, setTitleFormulario] = useState("")

    const enviarDados = () => {
        if (imagem === "" || titulo === "" || autor === "" || descricao === "" || sinopse === "" || totalPaginas === "" || idioma === "" || dataPublicacao === "" || edicao === "" || preco === "" || quantidade === "" || lacamento === "" || categoria_id === "" || frete === "" ) {
            setCor('#b20000')
            setMessage("Preencha todos os dados!")
            setTitle('Erro')
            setShowMessage(true)
            return false
        }

        let form = {
            imagem: imagem,
            titulo: titulo,
            autor: autor,
            descricao: descricao,
            sinopse: sinopse,
            totalPaginas: totalPaginas,
            idioma: idioma,
            dataPublicacao: dataPublicacao,
            edicao: edicao,
            preco: preco,
            quantidade: quantidade,
            lacamento: lacamento,
            categoria_id: categoria_id,
            frete: frete,
        }

        if (idUsuario) {
            ServiceUsuarios.editUsuariosId(idUsuario, form).then((response) => {
                if (response.status === 200) {
                    setCor('#008000')
                    setMessage(response.data.message)
                    setTitle('Sucesso')
                    handleClose()

                }
            }).catch(({ response }) => {
                if (response.status === 400) {
                    setCor('#b20000')
                    setMessage(response.data.message)
                    setTitle('Erro')
                }
            })
                .finally(() => setShowMessage(true))
        } else {
            ServiceUsuarios.createUsuarios(form).then((response) => {
                if (response.status === 201) {
                    setCor('#008000')
                    setMessage(response.data.message)
                    setTitle('Sucesso')
                    handleClose()
                }
            }).catch(({ response }) => {
                if (response.status === 400) {
                    setCor('#b20000')
                    setMessage(response.data.message)
                    setTitle('Erro')
                }
            })
                .finally(() => setShowMessage(true))
        }

    }

    useEffect(() => {

        if (idUsuario) {
            setTitleFormulario('Editar')
            ServiceUsuarios.getUsuariosId(idUsuario)
                .then(({ data }) => {
                    setImagem(data.imagem)
                    setTitulo(data.titulo)
                    setAutor(data.autor)
                    setDescricao(data.descricao)
                    setSinopse(data.sinopse)
                    setTotalPaginas(data.totalPaginas)
                    setIdioma(data.idioma)
                    setDataPublicacao(data.dataPublicacao)
                    setEdicao(data.edicao)
                    setPreco(data.preco)
                    setQuantidade(data.quantidade)
                    setLacamento(data.lacamento)
                    setCategoria_id(data.categoria_id)
                    setFrete(data.frete)
                })
        } else {
            setTitleFormulario('Inserir Novo')
            //Resetar Valores
            setImagem('')
            setTitulo('')
            setAutor('')
            setDescricao('')
            setSinopse('')
            setTotalPaginas('')
            setIdioma('')
            setDataPublicacao('')
            setEdicao('')
            setPreco('')
            setQuantidade('')
            setLacamento('')
            setCategoria_id('')
            setFrete('')
        }
    }, [idUsuario])



    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={styles.container}>
                    <Card className={styles.card}>
                        <label className={styles.titulo}>{titleFormulario} Livro</label>
                        <CardContent>
                            <FormGroup className={styles.box} >
                                <FormControl className={styles.inputs} >
                                    <TextField id="outlined-basic" label="imagem" variant="outlined"
                                        value={imagem}
                                        onChange={(event) => {
                                            setImagem(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="titulo" variant="outlined"
                                        value={titulo}
                                        onChange={(event) => {
                                            setTitulo(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="autor" variant="outlined"
                                        value={autor}
                                        onChange={(event) => {
                                            setAutor(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="descricao" variant="outlined"
                                        value={descricao}
                                        onChange={(event) => {
                                            setDescricao(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="sinopse" variant="outlined"
                                        value={sinopse}
                                        onChange={(event) => {
                                            setSinopse(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="totalPaginas" variant="outlined"
                                        value={totalPaginas}
                                        onChange={(event) => {
                                            setTotalPaginas(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="idioma" variant="outlined"
                                        value={idioma}
                                        onChange={(event) => {
                                            setIdioma(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="dataPublicacao" variant="outlined"
                                        value={dataPublicacao}
                                        onChange={(event) => {
                                            setDataPublicacao(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="edicao" variant="outlined"
                                        value={edicao}
                                        onChange={(event) => {
                                            setEdicao(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="preco" variant="outlined"
                                        value={preco}
                                        onChange={(event) => {
                                            setPreco(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="quantidade" variant="outlined"
                                        value={quantidade}
                                        onChange={(event) => {
                                            setQuantidade(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="lacamento" variant="outlined"
                                        value={lacamento}
                                        onChange={(event) => {
                                            setLacamento(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="categoria_id" variant="outlined"
                                        value={categoria_id}
                                        onChange={(event) => {
                                            setCategoria_id(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="frete" variant="outlined"
                                        value={frete}
                                        onChange={(event) => {
                                            setFrete(event.target.value);
                                        }} />
                                </FormControl>

                            </FormGroup>

                        </CardContent>
                        <CardActionArea className={styles.botao}>
                            <Button onClick={enviarDados} variant="contained">Salvar</Button>
                        </CardActionArea>
                    </Card>
                </Box>
            </Modal>
            <ModalGenerico open={showMessage} handleClose={() => setShowMessage(false)} cor={cor} title={title} message={message} />
        </>

    )

}



export default ModalFormularioLivro