import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';

import TwoColumns from './TwoColumns'; 

export default function SectionContact() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ bgcolor: '#c8cdd0', height: '100vh' }}>
        
        <TwoColumns/>
     
      </Container>
    </React.Fragment>
  );
}