import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import deepPurple from '@material-ui/core/colors/deepPurple';
import {ptBR} from '@material-ui/core/locale';

const theme = createMuiTheme({
    palette: {
      primary: teal,
      secondary: deepPurple,
    },
}, ptBR);

function App() {
  return (
    <ThemeProvider theme={theme}>
        <AppRouter />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));