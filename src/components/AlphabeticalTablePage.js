import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import dataJson from '../assets/alpha.json'
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

function createData(word, lemma, translation, reference) {
  return { word, lemma, translation, reference};
}

const rows = dataJson.map((data) => { return createData(data.word, data.lemma, data.translation, data.reference) })

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(10)
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  homeButtons: {
    marginBottom: theme.spacing(2),
  }
}));

export default function AlphabeticalTablePage() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.homeButtons}>
          <Grid container alignItems="flex-start" justify="flex-end" direction="row">
            <Button variant="outlined" color="secondary" component={RouterLink} to="/books">
              Por livro
            </Button>
          </Grid>
        </div>         
        <Paper className={classes.paper}>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              aria-label="enhanced table"
            >
             <TableHead>
                <TableRow>
                  <TableCell>Termo</TableCell>
                  <TableCell>Forma Lexical</TableCell>
                  <TableCell>Tradução</TableCell>
                  <TableCell>Referência</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        hover
                        tabIndex={-1}
                        key={row.word}                      
                      >
                        <TableCell component="th" id={labelId} scope="row">{row.word}</TableCell>
                        <TableCell>{row.lemma}</TableCell>
                        <TableCell>{row.translation}</TableCell>
                        <TableCell>{row.reference}</TableCell>                      
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50, 100, 500, 1671]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </div>
  );
}