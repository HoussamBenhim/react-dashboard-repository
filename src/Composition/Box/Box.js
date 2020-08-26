import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    Paper: {
        borderTopColor: 'rgb(175,171, 171)',
        borderTopWidth: '15px',
    },
    Tittle: {
        fontSize: 20,
        margin: 'auto',
        padding: 0,
        fontFamily: 'Helvetica Neue',
        textAlign: 'center',
        color: '#edf0f1',
        paddingRight: '40px',

    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            color: 'white',
            bordertop: '1px white solid',
            background: 'rgb(32,42, 59)',
            height: '300px',
            Overflow: 'scroll',
            color: 'white',
            padding: '0px',
        },

    },
    // small: {
    //     width: theme.spacing(3),
    //     height: theme.spacing(3),
    //     margin: 4,
    //     backgroundColor: 'rgb(182,197,18)',
    //     flex: '0 1 auto'
    //   },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        flex: '1 1 auto'
    }
}));



export default function Box(props) {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Paper className={classes.Paper} elevation={24} variant="outlined" square >

                <div className={classes.container}><div className={classes.Tittle}>{props.Tittle}</div></div>
                {props.content}
            </Paper>
        </div >
    );
}