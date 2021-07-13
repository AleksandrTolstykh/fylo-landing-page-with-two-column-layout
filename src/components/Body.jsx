import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';
import Testimonial from './Testimonial';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(240, 75%, 98%)',
    padding: 100,
    [theme.breakpoints.down('sm')]: {
      padding: 25,
      paddingBottom: 100,
    },
  },
  content: {
    color: 'hsl(243, 87%, 12%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    order: 1,
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  title: {
    fontFamily: 'Raleway',
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  text: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  image: {
    order: 2,
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
}));

function Body() {
  const classes = useStyles();

  return (
    <Box>
      <img src='images/bg-curve-desktop.svg' alt='background' width='100%' />
      <Box className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.content}>
            <h1 className={classes.title}>Stay productive, wherever you are</h1>
            <p className={classes.text}>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p className={classes.text}>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            <Box className={classes.button}>
              <CustomButton
                content='See how Fylo works'
                background='hsl(240, 75%, 98%)'
                backgroundHover='hsl(240, 75%, 98%)'
                color='hsl(170, 45%, 43%)'
                opacity='50%'
                decoration='underline'
                decorationHover='underline'
                fontFamily='Open Sans'
              />
            </Box>
            <Testimonial />
          </Grid>
          <Grid item xs={12} md={6} className={classes.image}>
            <img src='images/illustration-2.svg' alt='stay-productive' width='100%' />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Body;
