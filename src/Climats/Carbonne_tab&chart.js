import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Doughnut, Bar, Line, Scatter } from 'react-chartjs-2';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { color } from 'd3';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '1500px',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    item: {
        minWidth: '300px',
    },
    table: {
        overflowY: 'scroll',
        width: '100%',

        //  margin: 'auto',
        // height: '100px',
    },

}));

export default function CarbonneGrid({IntensiteCarbonne}) {

    const classes = useStyles();

    const cellNone = {
        color: 'white',
        borderColor: '#B6C512',
        fontSize: 12,
    };

    return (
        <Grid className={classes.root} direction="row" justify="center" alignItems="center" container spacing={3}>
            <Grid item lg={11}>
                <TableContainer>
                    <Table className={classes.table} size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ backgroundColor: 'DarkGreen' }} >1</TableCell>
                                <TableCell style={{ backgroundColor: 'green' }} >2</TableCell>
                                <TableCell style={{ backgroundColor: 'Forestgreen' }} >3</TableCell>
                                <TableCell style={{ backgroundColor: 'oliveDrab' }} >4</TableCell>
                                <TableCell style={{ backgroundColor: 'yellowGreen' }} >5</TableCell>
                                <TableCell style={{ backgroundColor: 'yellow' }} >6</TableCell>
                                <TableCell style={{ backgroundColor: 'orange' }} >7</TableCell>
                                <TableCell style={{ backgroundColor: 'darkOrange' }} >8</TableCell>
                                <TableCell style={{ backgroundColor: 'red' }} >9</TableCell>
                                <TableCell style={cellNone} >10</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Grid>

            <Grid item lg={11}>
                <div>
                    Intensité : {IntensiteCarbonne} tCO2 / mil USD
                </div>
            </Grid>

            <Grid item lg={11}>
                <Scatter
                    style={{ position: 'relative', height: '95%', width: '100%' }}
                    data={{
                        datasets: [{
                            label: 'Universe',
                            fill: false,
                            showLine: true,
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            lineTension: 0.1,
                            borderColor: 'rgba(75,192,192,1)',
                            data: universeList,
                            /*[
                              universeList.map((item, index) => (
                            { x: index, y: item.nb }
                            ))  
                        ],*/
                        }],
                        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    }}

                    options={{
                        maintainAspectRatio: false,
                        legend: {
                            "display": false,
                        }
                    }}
                />
            </Grid>

        </Grid>
    );
}

const universeList = [
    { x: 0.01, y: 0 },
    { x: 0.02, y: 0 },

    { x: 0.03, y: 1 },
    { x: 0.04, y: 10 },
]