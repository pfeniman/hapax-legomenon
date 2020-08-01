import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  homeContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh'
  },
  homeButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.homeContent}>
        <Container maxWidth="lg">
          <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
            HAPAX LEGOMENON
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Palavras únicas no texto grego do Novo Testamento
          </Typography>  
          <div className={classes.homeButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="outlined" color="secondary" component={RouterLink} to="/books">
                  Por livro
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="secondary" component={RouterLink} to="/alphabetical">
                  Ordem alfabética
                </Button>
              </Grid>
            </Grid>
          </div>          
        </Container>
      </div>
  );
}