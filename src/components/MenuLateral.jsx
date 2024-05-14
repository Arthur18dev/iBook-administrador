import { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import UserIcon from '@mui/icons-material/Group';
import ProdutoIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';

import { useNavigate } from "react-router-dom";

export default function MenuLateral({ show, fecharMenu }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setOpen(show)
    }, [show])


    const DrawerList = (
        <div style={{ width: 200 }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate("/")}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate("/users")}>
                        <ListItemIcon>
                            <UserIcon />
                        </ListItemIcon>
                        <ListItemText primary="Usuarios" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate("/livros")}>
                        <ListItemIcon>
                            <ProdutoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Livros" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate("/categorias")}>
                        <ListItemIcon>
                            <ProdutoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Categorias" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <Drawer open={open} onClose={fecharMenu}>
                {DrawerList}
            </Drawer>
        </div>
    );
}