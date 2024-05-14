import styles from "../styles/BoasVindas.module.css"
import CardsHome from "./CardsHome"

function BoasVindas({ nome, idade}) {

    return (
        <div>
            <h1 className={styles.titulo}>Ola, {nome}! Bem vindo ao nosso Painel.</h1>
            <CardsHome/>
        </div>
    )

}

export default BoasVindas