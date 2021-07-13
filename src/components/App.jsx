import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Body from './Body';
import CallToAction from './CallToAction';
import Contacts from './Contacts';
import Footer from './Footer';

function App() {
  return (
    <Box>
      <Header />
      <Body />
      <CallToAction />
      <Contacts />
      <Grid container justify='center'>
        <Footer />
      </Grid>
    </Box>
  );
}

export default App;
