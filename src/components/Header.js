import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({    
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
      '&:hover': {
        textDecoration: 'none'
      }
    },    
    link: {
      margin: theme.spacing(1, 1.5),
    }
  }));

export default function Header() {
    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link variant="h6" color="inherit" component={RouterLink} to="/" className={classes.toolbarTitle}>
              Hapax Legomenon
          </Link>
          <nav>
            <Link variant="button" color="inherit" component={RouterLink} to="/about" className={classes.link}>
              Sobre
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}