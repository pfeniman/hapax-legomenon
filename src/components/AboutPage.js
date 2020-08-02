import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4)
  },
  cap:{
    float: 'right',
    marginLeft: theme.spacing(2),
  },
  ref:{
    float: 'right',
    marginTop: theme.spacing(2)
  },
  aboutAuthor:{
    marginTop: theme.spacing(2)
  }
}));

export default  function AboutPage(){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="main">
        <Typography variant="h4" color="textPrimary" gutterBottom>
          Sobre o site
        </Typography>
        <Typography variant="body1" color="textPrimary" align="justify" gutterBottom>
          Hapax legomenon é o nome usado para designar uma palavra que aparece uma única vez dentro de um determinado corpo linguístico. 
          O termo é uma transliteração das palavras gregas ἅπαξ λεγόμενον, que podem ser traduzidas como "dito uma só vez".
        </Typography>
        <Typography variant="body1" color="textPrimary" align="justify" gutterBottom>
          Esse site busca reunir todos os hapax legomenon do Novo Testamento em grego. O texto usado como base para o levantamento dos termos foi a 28ª edição do Nestle-Aland (NA28). É importante frisar que quando se diz que um termo "aparece uma única vez" o que é levado em consideração não é a palavra como está escrita propriamente no texto e sim a sua forma lexical, ou seja, a maneira como ela se encontra em um dicionário. Além disso, substantivos próprios também não foram considerados como hapax legomenon.
        </Typography>
        <Typography variant="body1" color="textPrimary" align="justify" gutterBottom>
          Os hapax legomenon estão apresentados da seguinte forma:
        </Typography>
        <Grid container spacing={5} direction="column" alignItems="center">
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  παρεπίκραναν
                  <Typography className={classes.cap} variant="caption">
                    (termo)
                  </Typography>
                </Typography>
                <Typography color="textSecondary" component="h2">
                  παραπικραίνω
                  <Typography className={classes.cap} variant="caption">
                    (forma lexical)
                  </Typography>
                </Typography>
                <Typography variant="body2">
                  rebelar-se
                  <Typography className={classes.cap} variant="caption">
                    (tradução)
                  </Typography>
                </Typography>
                <Typography className={classes.ref} variant="body2">
                  Hebreus 3:16
                </Typography>
              </CardContent>             
            </Card>
          </Grid>
        </Grid>
        <div className={classes.aboutAuthor}>
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Sobre o autor
          </Typography>
          <Typography variant="body1" color="textPrimary" align="justify" gutterBottom>
            Meu nome é Pedro Feniman e sou um estudante de teologia e programador.
          </Typography>
          <Typography variant="body1" color="textPrimary" align="justify" gutterBottom>          
            Encontrou algum erro, notou a ausência de algum termo, tem alguma sugestão, dúvida ou crítica? Entre em contato! :)
          </Typography>
          <Typography variant="body1" color="textPrimary" align="justify" gutterBottom>
            E-mail: pfeniman@gmail.com
          </Typography>
        </div>
      </Container>
    </div>
  );
}