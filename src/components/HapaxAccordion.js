import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      }
    },    
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);
  
  const useStyles = makeStyles((theme) => ({
    ref:{
      float: 'right'
    },
    accordionHeader: {
      flexWrap: 'wrap',
    },
    accordionTitle: {
      flexGrow: 1
    },    
  }));

export default function HapaxAccordion({hapaxData}){
    const classes = useStyles();
    
    return(
        <Accordion key={hapaxData.id} square>
            <AccordionSummary aria-controls="{hapaxData.id}-content" id="{hapaxData.id}-header" className={classes.accordionHeader}>
                <Typography className={classes.accordionTitle}>{hapaxData.title}</Typography>
                <Chip color="secondary" label={hapaxData.total}/>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={5} alignItems="flex-end">
                {hapaxData.hapax.map((term) => (
                    <Grid item key={term.word} xs={12} sm={12} md={4} lg={3}>
                    <Card>
                        <CardContent>
                        <Typography variant="h5" component="h2">
                            {term.word}
                        </Typography>
                        <Typography color="textSecondary">
                            {term.lemma}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {term.translation}
                        </Typography>
                        <Typography className={classes.ref} variant="body2">
                            {term.reference}
                        </Typography>
                        </CardContent>             
                    </Card>
                    </Grid>
                ))}
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
}