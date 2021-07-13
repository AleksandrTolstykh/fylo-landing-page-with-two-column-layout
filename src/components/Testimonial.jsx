import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(0, 0%, 100%)',
    color: 'hsl(243, 87%, 12%)',
    fontFamily: 'Open Sans',
    fontWeight: 400,
    width: '75%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  title: {
    color: 'hsl(243, 87%, 12%)',
    fontFamily: 'Open Sans',
    fontWeight: 700,
  },
  occupation: {
    color: 'hsl(243, 87%, 12%)',
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: 10,
  },
}));

function Testimonial(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <img src='images/icon-quotes.svg' alt='quotes' />
        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
      </CardContent>
      <CardHeader
        avatar=<Avatar src='images/avatar-testimonial.jpg' />
        title=<Box className={classes.title}>Kyle Burton</Box>
        subheader=<Box className={classes.occupation}>Founder & CEO, Huddle</Box>
      />
    </Card>
  );
}

export default Testimonial;
