import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import styles from "../styles/CardsHomes.module.css"



export default function CardsHome() {
    const nomeCards = [
        {
            nome: "Usuários",
            valor: 19
        },
        {
            nome: "Produtos",
            valor: 19
        },
        {
            nome: "Vendas",
            valor: 500
        }
    ]
    return (
        <>
            <div className={styles.listCards}>
                {
                    nomeCards.map((item) =>
                        <div className={styles.bloco}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {item.nome}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {item.valor}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    )
                }
            </div>
        </>
    );
}