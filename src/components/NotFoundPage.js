import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  homeContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh'
  }
}));

export default  function NotFoundPage(){
  const classes = useStyles();

  return (
    <div className={classes.homeContent}>
      <Container maxWidth="lg">
        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
          Ops... nada por aqui!
        </Typography>
      </Container>
    </div>
  );
}