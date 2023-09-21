import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import SectionAboutMe from './SectionAboutMe'; 

export function Layout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#FF5733', height: '50vh' }} />
        <SectionAboutMe/>
      </Container>
    </React.Fragment>
  );
}
