import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    Paper:{
        borderTopColor: 'rgb(175,171, 171)',
        borderTopWidth: '15px',
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            color: 'white',
            bordertop: '1px white solid',
            background: 'rgb(32,42, 59)',
            height: '300px',
            
            color: 'white',
            padding: '0px',
        },
    },
}));



export default function Box(props) {
    const classes = useStyles();
    console.log(props);
    return (

        <div className={classes.root}>
            <Paper className={classes.Paper} elevation={24} variant="outlined" square >
                <h5>Box1</h5>
            </Paper>
        </div>
    );
}