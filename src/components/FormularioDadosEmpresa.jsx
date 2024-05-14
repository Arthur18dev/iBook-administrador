import { FormGroup, FormControl, TextField, Card, CardContent, CardActionArea } from '@mui/material';
import styles from "../styles/FormularioDadosEmpresa.module.css"
import { useState } from 'react';

function FormularioDadosEmpresa() {

    const [cnpj, setCnpj] = useState("")
    const [endereco, setEndereco] = useState("")
    const [descricao, setDescricao] = useState("")
    const [whatsapp, setWhatsapp] = useState("")


    const enviarDados = () => {
        if( cnpj === "" || endereco === "" || descricao === "" || whatsapp ===""){
            
            console.log("Preencha todos os dados")
            return false
        }

        console.log("Dados enviados!")
        return true
    }


    return (
        <Card className={styles.card}>
            <label className={styles.titulo}>Atualizar Dados da Empresa</label>
            <CardContent>
                <FormGroup className={styles.container} >
                    <FormControl className={styles.inputs} >
                        <TextField id="outlined-basic" label="Cnpj" variant="outlined" 
                        value={cnpj}
                        onChange={(event) => {
                            setCnpj(event.target.value);
                        }} />
                    </FormControl>
                    <FormControl className={styles.inputs}>
                        <TextField id="outlined-basic" label="Endereço" variant="outlined" 
                        value={endereco}
                        onChange={(event) => {
                            setEndereco(event.target.value);
                        }}/>
                    </FormControl>
                    <FormControl className={styles.inputs}>
                        <TextField id="outlined-basic" label="Descrição" variant="outlined" 
                        value={descricao}
                        onChange={(event) => {
                            setDescricao(event.target.value);
                        }}/>
                    </FormControl>
                    <FormControl className={styles.inputs}>
                        <TextField id="outlined-basic" label="Numero do whatsapp" variant="outlined" 
                        value={whatsapp}
                        onChange={(event) => {
                            setWhatsapp(event.target.value);
                        }}/>
                    </FormControl>
                </FormGroup>

            </CardContent>
            <CardActionArea>
                <button onClick={enviarDados}>Salvar</button>
            </CardActionArea>
        </Card>


    )

}

export default FormularioDadosEmpresa