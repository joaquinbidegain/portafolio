import './App.css';
import { NavBar, SectionBody, SectionAboutMe, SectionSkills, SectionContact } from './components/index';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const [theme, setTheme] = useState('light'); // Estado para el tema

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Crea un tema personalizado basado en el modo actual
  const customTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <NavBar toggleTheme={toggleTheme} theme={theme} /> {/* Pasa el tema como prop */}

        <SectionBody/>
        <SectionAboutMe/>
        <SectionSkills/>
        <SectionContact/>
    </ThemeProvider>
  );
}

export default App;
