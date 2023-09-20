import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

function ThemeToggleButton({ toggleTheme,theme }) {

    console.log(toggleTheme);
  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
        {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}

export default ThemeToggleButton;
