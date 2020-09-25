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
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '1500px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  input: {
    background: 'white',

  },

}));

export default function Portefeuille() {

  const classes = useStyles();

  const [value, setValue] = React.useState(listPortefeuille[0]);
  const [listSelectPortefeuille, setList] = React.useState([]);
  const [selectedIndex, setSelectIndex] = React.useState(0);

  const addToListSelectPortefeuille = (event, newPortefeuille) => {
    for (let i = 0; i < listSelectPortefeuille.length; i++) {
      if (newPortefeuille === listSelectPortefeuille[i]) {
        return;
      }
    }
    setList(listSelectPortefeuille => listSelectPortefeuille.concat(newPortefeuille));
  }

  const deleteToListPortefeuille = (id) => {
    for (let i = 0; i < listSelectPortefeuille.length; i++) {
      if (id === listSelectPortefeuille[i].id && selectedIndex === i) {
        setSelectIndex(0);
      }
    }
    const newList = listSelectPortefeuille.filter((item) => item.id !== id);
    setList(newList);
  }

  const handleListPortefeuileClick = (event, indexPortefeuille) => {
    setSelectIndex(indexPortefeuille);
  }

  return (
    <div>
      <Grid className={classes.root} direction="row" justify="center" alignItems="center" container spacing={3}>

        <Grid item lg={12}>

          <Box Tittle={'Selection'} content={

            <Grid className={classes.root} direction="row" justify="center" alignItems="center" container spacing={1}>

              <Grid item lg={6}>
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
                  style={{ width: 700, color: 'black' }}
                  renderInput={(params) => <TextField color="primary" {...params} variant="outlined" />}
                />
              </Grid>

              <Grid item lg={6}>
                <Button variant="contained" color='primary' onClick={(event) => addToListSelectPortefeuille(event, value)} > Select </Button>
              </Grid>

            </Grid>

          } />

        </Grid>

        <Grid item lg={6}>

          <Box Tittle={'Portefeuilles selectionnés'} content={
            <List>
              {listSelectPortefeuille.length >= 1 ? listSelectPortefeuille.map((item, index) => (
                <ListItem
                  key={item.id}
                  button
                  selected={selectedIndex === index}
                  onClick={(event) => handleListPortefeuileClick(event, index)}
                >
                  <ListItemText primary={item.title} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={(event) => deleteToListPortefeuille(item.id)} >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )) : ''}
            </List>
          } />

        </Grid>

        <Grid item lg={6}>
          <Box Tittle={'information'} content={
            <p>
              Portefeuille Sélectionné : {(listSelectPortefeuille.length >= 1 && selectedIndex >= 0) ? listSelectPortefeuille[selectedIndex].title : 'none'}
              Pays : {(listSelectPortefeuille.length >= 1 && selectedIndex >= 0) ? listSelectPortefeuille[selectedIndex].pays : 'none'}
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

