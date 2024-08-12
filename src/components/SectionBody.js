import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  height: '100vh', // Esto hace que cada Grid ocupe el 100% de la altura de la pantalla
  display: 'flex',
  alignItems: 'center', // Esto alinea verticalmente el contenido en el centro
  justifyContent: 'center', // Esto alinea horizontalmente el contenido en el centro
  textAlign: 'center',// Esto centra el texto dentro del Paper
}));

export default function SectionBody() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8">
          <Item>xs=8</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
      
      </Box>
    </React.Fragment>
  );
}