import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import EmailField from './EmailField';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 50,
  },
  link: {
    color: 'hsl(243, 87%, 12%)',
    fontFamily: 'Raleway',
    fontWeight: 700,
    fontSize: 16,
    textAlign: 'right',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    order: 1,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      order: 2,
    },
  },
  title: {
    color: 'hsl(243, 87%, 12%)',
    fontFamily: 'Raleway',
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  text: {
    color: 'hsl(243, 87%, 12%)',
    fontFamily: 'Open Sans',
    fontWeight: 400,
    marginBottom: 50,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  image: {
    order: 2,
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6} md={9}>
          <img src='images/logo.svg' alt='logo' />
        </Grid>
        <Grid item xs={2} md={1} className={classes.link}>
          <p>Features</p>
        </Grid>
        <Grid item xs={2} md={1} className={classes.link}>
          <p>Team</p>
        </Grid>
        <Grid item xs={2} md={1} className={classes.link}>
          <p>Sign In</p>
        </Grid>
        <Grid item xs={12} md={6} className={classes.content}>
          <h1 className={classes.title}>All your files in one secure location, accessible anywhere.</h1>
          <p className={classes.text}>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <EmailField />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <CustomButton
                  content='Get Started'
                  background='hsl(224, 93%, 58%)'
                  backgroundHover='hsl(224, 93%, 58%)'
                  color='white'
                  opacity='50%'
                  width='100%'
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.image}>
          <img src='images/illustration-1.svg' alt='logo' width='100%' />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
