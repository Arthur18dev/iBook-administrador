import Modal from '@mui/material/Modal';
import styles from "../styles/ModalFormularioUsuarios.module.css"
import { Box } from '@mui/material';


function ModalGenerico({ open, handleClose , cor, title, message }) {



    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.centralizaModal}>
                <h1 style={{color: cor}}> {title} </h1>

                <h4>{message}</h4>
            </Box>
        </Modal>

    )

}



export default ModalGenerico