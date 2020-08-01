import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import data from '../assets/books.json'
import HapaxAccordion from './HapaxAccordion'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4)
  },
  homeButtons: {
    marginBottom: theme.spacing(2),
  }
}));

export default function BooksPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="main">
        <div className={classes.homeButtons}>
          <Grid container alignItems="flex-start" justify="flex-end" direction="row">
            <Button variant="outlined" color="secondary" component={RouterLink} to="/alphabetical">
              Ordem alfabética
            </Button>
          </Grid>
        </div>
        {data.map((item) => (
          <HapaxAccordion key={item.id} hapaxData={item}/>
        ))}
      </Container>
    </div>
  );
}