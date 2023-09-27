import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  height: '100vh', // Esto hace que cada Grid ocupe el 100% de la altura de la pantalla
  display: 'flex',
  alignItems: 'center', // Esto alinea verticalmente el contenido en el centro
  justifyContent: 'center', // Esto alinea horizontalmente el contenido en el centro
  textAlign: 'center',// Esto centra el texto dentro del Paper
}));

export default function SectionTitle() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Grid container columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item xs={6}>
              <Item >2 holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Item>
            </Grid>
            <Grid item xs={6}>
              <Container>
                <Item>2 holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Item>
              </Container>
            </Grid>
          </Grid>
    </React.Fragment>
  );
}