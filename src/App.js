import React from 'react';
import Header from './Header/Header'
import AppStyle from './App.css';
import Paper from './Filtres/FIltre'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from './Box/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '1500px',
    marginRight:'auto',
    marginLeft:'auto',
  },
  item:{
    minWidth:'300px',
  }
}));
export default function App() {

  const classes = useStyles();

  return (
    <div>
      <Header />
     
        <Grid className={classes.root} direction="row" justify="center" alignItems="center" container spacing={1}>
          <Grid item xs={12} className={classes.item}  >
            <Paper/>
          </Grid>
           <Grid item xs={12} sm={10} md={5} lg={3} >
            <Box/>
          </Grid>
          <Grid item xs={12} sm={10} md={5} lg={6} >
            <Box/>
          </Grid>
          <Grid item xs={12} sm={10} md={5} lg={3} >
            <Box/>
          </Grid>
          {/* 2eme ligne*/}
          
           <Grid item xs={12} sm={10} md={5} lg={3} >
            <Box/>
          </Grid>
          <Grid item xs={12} sm={10} md={5} lg={6} >
            <Box/>
          </Grid>
          <Grid item xs={12} sm={10}  md={5} lg={3} >
            <Box/>
          </Grid>
          {/* 2eme ligne*/}

          <Grid item xs={12} sm={10} md={5} lg={3} >
            <Box/>
          </Grid>
          <Grid item xs={12} sm={10} md={5} lg={6} >
            <Box/>
          </Grid>
          <Grid item xs={12} sm={10} md={5} lg={3} >
            <Box/>
          </Grid>
        </Grid>
      

    </div>
  );

}

