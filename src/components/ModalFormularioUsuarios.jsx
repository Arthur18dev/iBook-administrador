import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styles from "../styles/ModalFormularioUsuarios.module.css"
import { FormGroup, FormControl, TextField, Card, CardContent, CardActionArea, Button, FormControlLabel, Checkbox } from '@mui/material';
import { useEffect, useState } from 'react';
import api from '../services/api';
import ModalGenerico from './ModalGenerico';
import ServiceUsuarios from "../services/usuarios"


function ModalFormularioUsuarios({ open, handleClose, idUsuario }) {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [status, setStatus] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [cor, setCor] = useState("")
    const [titleFormulario, setTitleFormulario] = useState("")

    const enviarDados = () => {
        if (nome === "" || email === "" || senha === "") {
            setCor('#b20000')
            setMessage("Preencha todos os dados!")
            setTitle('Erro')
            setShowMessage(true)
            return false
        }

        let form = {
            nome: nome,
            senha: senha,
            email: email,
            status: status
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
                    setNome(data.login)
                    setEmail(data.email)
                    setSenha(data.senha)
                    setStatus(data.status)
                })
        } else {
            setTitleFormulario('Inserir Novo')
            //Resetar Valores
            setNome('')
            setEmail('')
            setSenha('')
            setStatus(false)
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
                        <label className={styles.titulo}>{titleFormulario} Usuário</label>
                        <CardContent>
                            <FormGroup className={styles.box} >
                                <FormControl className={styles.inputs} >
                                    <TextField id="outlined-basic" label="Email" variant="outlined"
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="Nome" variant="outlined"
                                        value={nome}
                                        onChange={(event) => {
                                            setNome(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <TextField id="outlined-basic" label="Senha" variant="outlined"
                                        value={senha}
                                        onChange={(event) => {
                                            setSenha(event.target.value);
                                        }} />
                                </FormControl>
                                <FormControl className={styles.inputs}>
                                    <FormControlLabel control={
                                        <Checkbox
                                            value={status}
                                            checked={status}
                                            onChange={(event) => {
                                                setStatus(event.target.checked);
                                            }}
                                        />
                                    }
                                        label="Status"
                                    />
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



export default ModalFormularioUsuarios