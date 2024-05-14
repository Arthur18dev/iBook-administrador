import { Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import styles from "../styles/BotaoFlutuante.module.css"

function BotaoFlutuante({ aoClicar }) {

    return (
        <div className={styles.botao}>
        <Fab color="primary" aria-label="Inserir novo usuario" onClick={aoClicar}>
            <AddIcon />
        </Fab>
        </div>
    )
}


export default BotaoFlutuante