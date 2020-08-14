import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

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
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center'
    },
    chip: {
        marginLeft: 10,
    }
}));

const mapLabelActif = {
    'EQ': {
        label: 'Action',
    },
    'BD': {
        label: 'Obligation',
    },
    'MF': {
        label: 'Fonds',
    },
    'OP': {
        label: 'Option',
    },
    '': {
        label: '',
    }

}


export default function SimplePaper({ labelAactif , handelClickActif}) {
    const classes = useStyles();
    const handleDelete = () => {
        handelClickActif();
    };
    return (

        <div className={classes.root}>
            <Paper elevation={24} variant="outlined" className={classes.container} >
                
                <Chip
                    className={classes.chip}
                    label={mapLabelActif[labelAactif].label}
                    disabled = {labelAactif !== '' ? false :  true}
                    color ={labelAactif !== '' ? 'primary' : 'default'}
                    onDelete={handleDelete}
                />
                <Chip
                    className={classes.chip}
                    disabled
                    label=""
                    onDelete={handleDelete}
                />
            </Paper>
        </div>
    );
}