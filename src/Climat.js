import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from './Composition/Box/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Doughnut, Bar, Line, Scatter } from 'react-chartjs-2';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { color } from 'd3';
import CarbonneGrid from './Climats/Carbonne_tab&chart';


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

export default function Climat() {

    const [donneeCouv, setDataCouv] = useState([]);
    const [libllesCouv, setLabelsCouv] = useState([]);
    const [donneeAlloc, setDataAlloc] = useState([]);
    const [libllesAlloc, setLabelsAlloc] = useState([]);
    const [donneeTemp, setDataTemp] = useState([]);
    const [libllesTemp, setLabelsTemp] = useState([]);

    let labelsCouv = ['Couvert', 'Non couvert'];
    let dataCouv = [99, 1];

    useEffect(() => {
        setDataCouv(dataCouv);
        setLabelsCouv(labelsCouv)
    }, dataCouv, labelsCouv)

    let labelsAlloc = ['Vert', 'Marron', 'Gris'];
    let dataAlloc = [2.5, 31.2, 66.3];

    useEffect(() => {
        setDataAlloc(dataAlloc);
        setLabelsAlloc(labelsAlloc);
    }, dataAlloc, labelsAlloc)

    var Température = 1.5;

    let labelsTemp = ['Température'];
    let dataTemp = [Température, (5 - Température)]

    let colorTemp = 'green';
    if (dataTemp[0] > 3.5) {
        colorTemp = 'red';
    } else if (dataTemp[0] > 2.5) {
        colorTemp = 'orange';
    } else if (dataTemp[0] > 1.5) {
        colorTemp = 'yellow';
    }

    useEffect(() => {
        setDataTemp(dataTemp);
        setLabelsTemp(labelsTemp);
    }, dataTemp, labelsTemp)

    var Intensité = 425.8;


    // var thermoLink = 'http://www.jlion.com:80//tools/Thermometer.aspx?MIN=0&MAX=5&VT=2&T= &IV=' + Température + '&M=1&SC=2&CS=' + colorTemp + '&CI=en-US&TH=0';

    const classes = useStyles();

    const cellNone = {
        color: 'white',
        borderColor: '#B6C512',
        fontSize: 12,
    };

    const primary_image_node_overlay = {
        background: 'rgb(0, 0, 0, 0.08)',
        // filter: alpha(opacity = 8)
        // !important,
    }

    return (

        <div>
            <meta charset="utf-8"></meta>
            <script src="js/chart.min.js"></script>
            <script type="text/javascript" src="/Path/To/Chart.bundle.min.js"></script>

            <Grid className={classes.root} direction="row" justify="center" alignItems="center" container spacing={1}>
                <Grid item xs={12} sm={10} md={5} lg={3} >
                    <Box Tittle={'Température du globe +'} content={

                        <Doughnut
                            style={{ position: 'relative', height: '95%', width: '100%' }}
                            data={{
                                datasets: [{
                                    data: dataTemp,
                                    backgroundColor: [
                                        colorTemp,
                                        'grey',
                                    ],
                                    borderWidth: 0
                                }],
                            }}
                            options={{

                                maintainAspectRatio: false,
                                cutoutPercentage: 60,
                                circumference: Math.PI,
                                rotation: -Math.PI,
                                title: {
                                    display: true,
                                    text: dataTemp[0],
                                    fontColor: '#edf0f1',
                                    fontSize: 15,
                                    fontFamily: 'Helvetica Neue',
                                },
                                legend: {
                                    labels: {
                                        fontColor: '#edf0f1',
                                        boxWidth: 10,
                                        padding: 20,
                                        fontSize: 15,
                                        fontFamily: 'Helvetica Neue',
                                    },
                                    position: 'right',
                                },
                                layout: {
                                    padding: {
                                        left: 20,
                                        right: 20,
                                        top: 20,
                                        bottom: 26
                                    }
                                }
                            }} />

                        // <img src={thermoLink} style={primary_image_node_overlay} alt="+" title="+" width="100%" height="100%" margin='20' />
                    } />
                </Grid>

                <Grid item xs={12} sm={10} md={5} lg={6} >
                    <Box Tittle={'Intensité carbone'} content={
                        <CarbonneGrid IntensiteCarbonne={Intensité} />
                    } />
                </Grid>

                <Grid item xs={12} sm={10} md={5} lg={3} >
                    <Box Tittle={'Couverture'} content={
                        <Doughnut
                            style={{ position: 'relative', height: '95%', width: '100%' }}
                            data={{
                                datasets: [{
                                    data: donneeCouv,
                                    backgroundColor: [
                                        'rgb(65,161,51)',
                                        'rgb(182,197,18)',
                                        'rgb(61,106,154)',
                                    ],
                                    borderWidth: 0
                                }],
                                labels: libllesCouv,
                            }}
                            options={{

                                maintainAspectRatio: false,
                                cutoutPercentage: 70,
                                legend: {
                                    labels: {
                                        fontColor: '#edf0f1',
                                        boxWidth: 10,
                                        padding: 20,
                                        fontSize: 15,
                                        fontFamily: 'Helvetica Neue',

                                    },
                                    position: 'right',
                                },
                                layout: {
                                    padding: {
                                        left: 20,
                                        right: 20,
                                        top: 20,
                                        bottom: 26
                                    }
                                }
                            }} />
                    } />
                </Grid>

                <Grid item xs={12} sm={10} md={5} lg={3} >
                    <Box Tittle={'Allocation du portefeuille'} content={
                        <Doughnut
                            style={{ position: 'relative', height: '95%', width: '100%' }}
                            data={{
                                datasets: [{
                                    data: donneeAlloc,
                                    backgroundColor: [
                                        'rgb(65,161,51)',
                                        'brown',
                                        'grey',
                                    ],
                                    borderWidth: 0
                                }],
                                labels: libllesAlloc,
                            }}
                            options={{

                                maintainAspectRatio: false,
                                cutoutPercentage: 0,
                                legend: {
                                    labels: {
                                        fontColor: '#edf0f1',
                                        boxWidth: 10,
                                        padding: 20,
                                        fontSize: 15,
                                        fontFamily: 'Helvetica Neue',

                                    },
                                    position: 'right',
                                },
                                layout: {
                                    padding: {
                                        left: 20,
                                        right: 20,
                                        top: 20,
                                        bottom: 26
                                    }
                                }
                            }} />
                    } />
                </Grid>

                <Grid item xs={12} sm={10} md={5} lg={9} >
                    <Box Tittle={'Secteurs d\'allocation'} content={
                        <Grid className={classes.root} direction="row" justify="center" alignItems="center" container spacing={1}>

                            <Grid item xs={6} sm={6} md={6} lg={6} >
                                <TableContainer style={{ position: 'relative', height: '95%', width: '100%' }}>
                                    <Table className={classes.table} size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell style={cellNone} >Taxonomie verte</TableCell>
                                                <TableCell style={cellNone} >Poids</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {taxonomieVerteList.map((item, index) => (
                                                <TableRow>
                                                    <TableCell style={cellNone} >{item.Name}</TableCell>
                                                    <TableCell style={cellNone} >{item.poids}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>

                            <Grid item xs={6} sm={6} md={6} lg={6} >
                                <TableContainer style={{ position: 'relative', height: '95%', width: '100%' }}>
                                    <Table className={classes.table} size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell style={cellNone} >Stress Test Climatique</TableCell>
                                                <TableCell style={cellNone} >Poids</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {stressTestClimatiqueList.map((item, index) => (
                                                <TableRow>
                                                    <TableCell style={cellNone} >{item.Name}</TableCell>
                                                    <TableCell style={cellNone} >{item.poids}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    } />
                </Grid>
            </Grid>

        </div>

    );
}

const taxonomieVerteList = [
    { Name: 'Fabrication fer et acier', poids: 1.14 },
    { Name: 'Manufacture of low carbon technologies', poids: 0.27 },
    { Name: 'Serveur automobile électrique', poids: 0.02 },
    { Name: 'Production d\'électricité solaire', poids: 0.01 },
    { Name: 'Production d\'électricité éolienne', poids: 0.01 },
    { Name: 'Secteur industrique lourdes extractives', poids: 0.98 },
]

const stressTestClimatiqueList = [
    { Name: 'Secteur aéronautique', poids: 2.62 }
]

const universeList = [
    { x: 0.01, y: 0 },
    { x: 0.02, y: 0 },

    { x: 0.03, y: 1 },
    { x: 0.04, y: 10 },
]