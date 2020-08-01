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
import Container from '@material-ui/core/Container';

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

const data = [
  {
    title: 'οὐδαμῶς',
    lema: 'οὐδαμῶς',
    translation: 'de forma alguma',
    reference: 'Mateus 2:6'
  },
  {
    title: 'τελευτή',
    lema: 'τελευτῆς',
    translation: 'fim; morte',
    reference: 'Mateus 2:15'
  },
  {
    title: 'διετής',
    lema: 'διετοῦς',
    translation: 'dois anos de idade',
    reference: 'Mateus 2:16'
  },
  {
    title: 'θυμόω',
    lema: 'ἐθυμώθη',
    translation: 'enfurecer',
    reference: 'Mateus 2:16'
  }
];


const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
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
  root: {
    width: '100%',
    paddingTop: '1rem'
  },  
  ref:{
    float: 'right'
  }
}));
export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="main">
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Mateus</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Grid container spacing={5} alignItems="flex-end">
          {data.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={12} md={4} lg={3}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {tier.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {tier.lema}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {tier.translation}
                  </Typography>
                  <Typography className={classes.ref} variant="body2">
                    {tier.reference}
                  </Typography>
                </CardContent>             
              </Card>
            </Grid>
          ))}
        </Grid>
          
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Marcos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Lucas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
    </div>
  );
}