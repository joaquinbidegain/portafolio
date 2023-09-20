import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import ThemeToggleButton from './ThemeToggleButton'; // Importa el componente del botón
  

const pages = ['About Me', 'Skills', 'Contact'];

export function NavBar({ toggleTheme, theme }) {

 

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            fontFamily={'Playfair Display'}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Joaquin Bidegain
          </Typography>

          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography fontFamily={'Playfair Display'}>
                {page}
                </Typography>
              </Button>
            ))}
          </Box>

          <ThemeToggleButton toggleTheme={toggleTheme}  theme={theme}/> {/* Incorpora el botón */}
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
