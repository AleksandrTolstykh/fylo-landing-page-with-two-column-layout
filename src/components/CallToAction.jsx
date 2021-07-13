import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';
import EmailField from './EmailField';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(238, 22%, 44%)',
    color: 'hsl(0, 0%, 100%)',
    fontFamily: 'Raleway',
    fontWeight: 700,
    padding: 50,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  text: {
    fontWeight: 400,
  }
}));

function CallToAction(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <h1>Get early access today</h1>
          <p className={classes.text}>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <EmailField />
            </Grid>
            <Grid item xs={12}>
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
      </Grid>
    </Box>
  );
}

export default CallToAction;
