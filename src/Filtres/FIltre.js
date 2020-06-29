import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100vw',
            color: 'white',
            bordertop: '1px white solid',
            background: 'rgb(32,42, 59)',
            height: theme.spacing(10),
            color: 'white',
            padding: '0px',
        },
    },
}));



export default function SimplePaper(props) {
    const classes = useStyles();
    console.log(props);
    return (

        <div className={classes.root}>
            <Paper elevation={24} variant="outlined"  >
                <h5>Filtres</h5>
            </Paper>
        </div>
    );
}