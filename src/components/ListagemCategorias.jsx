import styles from "../styles/ListagemUsuarios.module.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/DriveFileRenameOutline';

import ServiceLivro from "../services/Livros"
import { useEffect, useState } from "react";


function ListagemCategorias({ reload, handleEditar }) {
    const [rows, setRows] = useState([])

    useEffect(() => {
        if (!reload)
            ServiceLivro.getLivrosCategoria().then((response) => {
                setRows(response.data)
            }).catch((erro) => {
                console.log(erro)
                setRows([])
            })
    }, [reload])


    function deletarUsuario(id) {

        ServiceLivro.deleteUsuariosId(id).then(() => {
            ServiceLivro.getLivrosCategoria().then((response) => {
                setRows(response.data)
            })
        })

    }

    return (<>
        <div className={styles.titulo}>
            <h1>
                Categoria de Livros
            </h1>
        </div>
        <div className={styles.tabela}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Título</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell>Quantidade</TableCell>
                            <TableCell>Preço</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length > 0 ? rows.map((row) => (
                            <TableRow
                                key={row.login}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className={styles.linhas}
                            >
                                <TableCell>{row.nome}</TableCell>
                                <TableCell>
                                    <DeleteIcon onClick={() => deletarUsuario(row._id)} />
                                    <EditIcon onClick={() => handleEditar(row._id)} />
                                </TableCell>
                            </TableRow>
                        ))
                            :
                            (<>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" className={styles.celulaunica}>
                                        Não há dados ainda...
                                    </TableCell>
                                </TableRow>
                            </>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </>)
}

export default ListagemCategorias