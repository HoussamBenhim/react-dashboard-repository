import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';

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

const Theme = (color, colorSecteur) => createMuiTheme({
    
    palette: {
        primary: {
            main: color,
        },
        secondary: {
            main: colorSecteur,
        },
    },
});

export default function SimplePaper({ labelAactif, labelSecteur, handelClickActif, handelClickSecteur,colorActif, colorSecteur }) {
    const classes = useStyles();
    const handleDelete = () => {
        handelClickActif();
    };
    const handleDeleteSecteur = () => {
        handelClickSecteur();
    };
    return (

        <div className={classes.root}>
            <ThemeProvider theme={Theme(colorActif ? colorActif : 'rgb(182,197,18)', colorSecteur ? colorSecteur : 'rgb(182,197,18)' ) }>
                <Paper elevation={24} variant="outlined" className={classes.container} >

                    <Chip
                        className={classes.chip}
                        label={mapLabelActif[labelAactif].label}
                        disabled={labelAactif !== '' ? false : true}
                        color={labelAactif !== '' ? 'primary' : 'default'}
                        onDelete={handleDelete}
                    />

                    <Chip
                        className={classes.chip}
                        label={labelSecteur}
                        disabled={labelSecteur !== '' ? false : true}
                        color={labelSecteur !== '' ? 'primary' : 'default'}
                        onDelete={handleDeleteSecteur}
                    />
                </Paper>
            </ThemeProvider>
        </div>
    );
}