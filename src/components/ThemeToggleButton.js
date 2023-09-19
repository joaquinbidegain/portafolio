import React from 'react';
import Button from '@mui/material/Button';

function ThemeToggleButton({ toggleTheme }) {
  return (
    <Button onClick={toggleTheme} color="primary" variant="contained">
      Cambiar Tema
    </Button>
  );
}

export default ThemeToggleButton;
