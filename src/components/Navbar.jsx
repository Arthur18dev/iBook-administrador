import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "../styles/Navbar.module.css"
import MenuLateral from './MenuLateral';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton onClick={() => setOpen(true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <h3 className={styles.marca}>
              iBook
            </h3>
          </Toolbar>
        </AppBar>
      </Box>
      <MenuLateral show={open} fecharMenu={() => setOpen(false)}/>
    </>
  );
}