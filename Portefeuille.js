import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Grid, ListItemText } from '@material-ui/core';
import Box from './Composition/Box/Box';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
/*   Tittle: {
    fontSize: 20,
    margin: 'auto',
    padding: 0,
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    color: 'rgb(204, 255, 51)',
    paddingRight: '40px',

  }, */
   root: {
    '& > *': {
      flexGrow: 1,
      maxWidth: '1500px',
      marginRight: 'auto',
      marginLeft: 'auto',

      margin: theme.spacing(1),
      color: "red",
      bordertop: '1px green solid',
      background: 'rgb(32,42, 59)',
      Overflow: 'scroll',
      padding: '0px',
    },
  },
 
  input: {
    background: 'white',
    color: 'red',
    WebkitTextFillColor: 'green',

  },

}));

/* const Theme = () => createMuiTheme({

  palette: {
    primary: {
      main: 'rgb(32,42, 59)',
    },

  },
}); */

export default function Portefeuille() {

  const classes = useStyles();

  const [value, setValue] = React.useState(listPortefeuille[0]);
  const [listSelectPortefeuille, setList] = React.useState(Array);
  const [selectedIndex, setSelectIndex] = React.useState('');

  const addToListSelectPortefeuille = (event, newPortefeuille) => {
    for (let i = 0; i < listSelectPortefeuille.length; i++) {
      if (newPortefeuille === listSelectPortefeuille[i]) {
        return;
      }
    }
    listSelectPortefeuille.push(newPortefeuille);
  }

  const deleteToListPortefeuille= (index) => {
    listSelectPortefeuille.splice(index, 1);
  }

  const handleListPortefeuileClick = (event, indexPortefeuille) => {
    setSelectIndex(indexPortefeuille);
  }

  return (
    <div>

      <h1>Portefeuille Tifaine</h1>

      <Grid className={classes.root} direction="row" justify="center" alignItems="center" container spacing={1}>

        <Grid item >

          <Grid className={classes.root} direction="row" justify="space-around" alignItems="center" container spacing={1}>

            <Grid item>
              <Autocomplete
                className={classes.input}

                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}

                id="barre-de-recherche"
                options={listPortefeuille}
                getOptionLabel={(option) => option.title}
                defaultValue={[Portefeuille[0]]}
                style={{ width: 300, color: 'rgb(32,42, 59)' }}
                renderInput={(params) => <TextField color="primary" {...params} label="Combo box" variant="outlined" />}
              />
            </Grid>

            <Grid item>
              <Button variant="contained" color="primary" onClick={(event) => addToListSelectPortefeuille(event, value)}  >
                Select
              </Button>
            </Grid>

          </Grid>

          <Box Tittle={'Portefeuilles selectionnés'} content={
              <List>
                {listSelectPortefeuille.map((item, index) => (
                  <ListItem
                    button
                    selected={selectedIndex === index}
                    onClick={(event) => handleListPortefeuileClick(event, index)}
                  > 
                    <ListItemText primary={listSelectPortefeuille[index].title} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end">
                        <DeleteIcon onClick={() => deleteToListPortefeuille(index)} />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
          } /> 

        </Grid>

        <Grid item>
          <Box Tittle={'information'} content={
            <p>
              Portefeuille Sélectionné : {selectedIndex ? listSelectPortefeuille[selectedIndex].title : 'none'} 

              Pays : {selectedIndex ? listSelectPortefeuille[selectedIndex].pays : 'none'}

            </p>
          } />
        </Grid>

      </Grid>
    </div>


  );

}


const listPortefeuille = [
  { title: 'Portefeuille 1', id: 1, pays: 'USA' },
  { title: 'Portefeuille 2', id: 2, pays: 'Chine' },
  { title: 'Portefeuille 3', id: 3, pays: 'France' },
  { title: 'Portefeuille 4', id: 4, pays: 'Chine' },
  { title: 'Portefeuille 5', id: 5, pays: 'Angleterre' },
];

