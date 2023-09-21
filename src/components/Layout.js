import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';


import SectionTitle from './SectionTitle'; 
import SectionAboutMe from './SectionAboutMe'; 
import SectionSkills from './SectionSkills'; 
import SectionContact from './SectionContact';

export function Layout() {
  return (
    <React.Fragment>
      <CssBaseline />
      
        
        <SectionTitle/>
        <SectionAboutMe/>
        <SectionSkills/>
        <SectionContact/>
        
     
    </React.Fragment>
  );
}
