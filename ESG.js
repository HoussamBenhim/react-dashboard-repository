import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from './Composition/Box/Box';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

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
        width: '95%',
        margin: 'auto',
        // height: '100px',
    },

}));

export default function ESG() {

    const [colorActif, setColorActif] = useState('');
    const [filtreActif, setFiltreActif] = useState('')
    const [donneeAlloc, setDataAlloc] = useState([]);
    const [libllesAlloc, setLabelsAlloc] = useState([]);
    const [donneeContro, setData] = useState([]);
    const [libllesContro, setLabels] = useState([]);
    const [selectedIndex, setSelectIndex] = React.useState(0);
    const [selectedFactor, setSelectedFactor] = React.useState(0);

    var ESG, E, S, G;
    E = 0;
    S = 0;
    G = 0;

    for (let index = 0; index < data.length; index++) {
        E = E + data[index][0];
        S = S + data[index][1];
        G = G + data[index][2];
    }

    E = E / data.length;
    S = S / data.length;
    G = G / data.length;
    ESG = E + S + G;

    E = E.toFixed(2);
    S = S.toFixed(2)
    G = G.toFixed(2);
    ESG = ESG.toFixed(2);

    let labelsAlloc = ['Couvert', 'Non couvert', 'Reste'];
    let dataAlloc = [54, 31, 75];

    useEffect(() => {
        setDataAlloc(dataAlloc);
        setLabelsAlloc(labelsAlloc)
    }, dataAlloc, labelsAlloc)

    let dataContro = [15, 53, 237, 504, 276, 469];
    let labelsContro = ['Niveau 5', 'Niveau 4', 'Niveau 3', 'Niveau 2', 'Niveau 1', 'Aucune implication'];

    useEffect(() => {
        setData(dataContro);
        setLabels(labelsContro)
    }, dataContro, labelsContro)

    var totalSelectedImpli;

    totalSelectedImpli = 0;
    for (let i = 0; i < ImpliData[selectedIndex].length; i++) {
        var test = ImpliData[selectedIndex][i].Contrib;
        totalSelectedImpli = totalSelectedImpli + test;
    }

    const handleListImplicationsClick = (event, index) => {
        setSelectIndex(index);
    }

    const handleListFactorClick = (event, index) => {
        setSelectedFactor(index);
    }

    const classes = useStyles();

    const cellGrey = {
        borderColor: '#B6C512',
        background: 'grey',
    };

    const cellYellow = {
        borderColor: '#B6C512',
        background: 'yellow'
    };

    const cellOrange = {
        borderColor: '#B6C512',
        background: 'orange'
    };

    const cellRed = {
        borderColor: '#B6C512',
        background: 'red'
    };

    const cellDarkRed = {
        borderColor: '#B6C512',
        background: 'darkRed'
    };

    const cellNone = {
        color: 'white',
        borderColor: '#B6C512',
        fontSize: 12,
    };

    return (
        /*         <div>
         */
        <Grid className={classes.root} direction="row" justify="center" alignItems="center" container spacing={1}>

            <Grid item xs={12} className={classes.item}  >
            </Grid>

            <Grid item xs={12} sm={10} md={5} lg={7} >
                <Box Tittle={'Notation du risque ESG'} content={
                    <TableContainer style={{ position: 'relative', height: '95%', width: '100%' }}>
                        <Table className={classes.table} size="small" spacing={1}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={cellNone} >ESG</TableCell>
                                    <TableCell style={cellNone} >{ESG}</TableCell>
                                    <TableCell style={cellGrey} >Négligable</TableCell>
                                    <TableCell style={ESG > 10 ? cellYellow : cellNone} >Basse</TableCell>
                                    <TableCell style={ESG > 20 ? cellOrange : cellNone} >Modérée</TableCell>
                                    <TableCell style={ESG > 30 ? cellRed : cellNone} >Elevée</TableCell>
                                    <TableCell style={ESG > 40 ? cellDarkRed : cellNone} >Aigue</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                } />
            </Grid>

            <Grid item xs={12} sm={10} md={5} lg={5} >
                <Box Tittle={'Allocation du portefeuille'} content={
                    <Doughnut
                        style={{ position: 'relative', height: '95%', width: '100%' }}
                        data={{
                            datasets: [{
                                data: donneeAlloc,
                                backgroundColor: [
                                    'rgb(182,197,18)',
                                    'rgb(65,161,51)',
                                    'rgb(61,106,154)',
                                ],
                                borderWidth: 0
                            }],
                            labels: libllesAlloc,
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
                        }}
                    />
                } />
            </Grid>

            <Grid item xs={12} sm={10} md={5} lg={12} >
                <Box Tittle={"Analyse Factorielle"} content={

                    <Grid direction="row" justify="center" alignItems="center" container spacing={1}>

                        <Grid item xs={3} sm={3} md={3}  lg={4} >

                            <TableContainer style={{ position: 'relative', height: '95%', width: '100%' }}>
                                <Table className={classes.table} size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={cellNone} ></TableCell>
                                            <TableCell style={cellNone} ></TableCell>
                                            <TableCell style={cellNone} >0 - 10</TableCell>
                                            <TableCell style={cellNone} >10 - 20</TableCell>
                                            <TableCell style={cellNone} >20 - 30</TableCell>
                                            <TableCell style={cellNone} >30 - 40</TableCell>
                                            <TableCell style={cellNone} > {'>'} 40</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow onClick={(event) => handleListFactorClick(event, 0)}>
                                            <TableCell style={cellNone} >Environment</TableCell>
                                            <TableCell style={cellNone} > {E} </TableCell>
                                            <TableCell style={cellGrey} ></TableCell>
                                            <TableCell style={E > 10 ? cellYellow : cellNone} ></TableCell>
                                            <TableCell style={E > 20 ? cellOrange : cellNone} ></TableCell>
                                            <TableCell style={E > 30 ? cellRed : cellNone} ></TableCell>
                                            <TableCell style={E > 40 ? cellDarkRed : cellNone} ></TableCell>
                                        </TableRow>
                                        <TableRow onClick={(event) => handleListFactorClick(event, 1)}>
                                            <TableCell style={cellNone} >Social</TableCell>
                                            <TableCell style={cellNone} > {S} </TableCell>
                                            <TableCell style={cellGrey} ></TableCell>
                                            <TableCell style={S > 10 ? cellYellow : cellNone} ></TableCell>
                                            <TableCell style={S > 20 ? cellOrange : cellNone} ></TableCell>
                                            <TableCell style={S > 30 ? cellRed : cellNone} ></TableCell>
                                            <TableCell style={S > 40 ? cellDarkRed : cellNone} ></TableCell>
                                        </TableRow>
                                        <TableRow onClick={(event) => handleListFactorClick(event, 2)}>
                                            <TableCell style={cellNone} >Governanace</TableCell>
                                            <TableCell style={cellNone} > {G} </TableCell>
                                            <TableCell style={cellGrey} ></TableCell>
                                            <TableCell style={G > 10 ? cellYellow : cellNone} ></TableCell>
                                            <TableCell style={G > 20 ? cellOrange : cellNone} ></TableCell>
                                            <TableCell style={G > 30 ? cellRed : cellNone} ></TableCell>
                                            <TableCell style={G > 40 ? cellDarkRed : cellNone} ></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Grid>

                        <Grid item xs={9} sm={9} md={9}  lg={8} >

                            <TableContainer style={{ position: 'relative', height: '95%', width: '100%' }}>
                                <Table className={classes.table} size='small' >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={cellNone} >Facteur</TableCell>
                                            <TableCell style={cellNone} >Notation</TableCell>
                                            <TableCell style={cellNone} >Négligable</TableCell>
                                            <TableCell style={cellNone} >Basse</TableCell>
                                            <TableCell style={cellNone} >Modérée</TableCell>
                                            <TableCell style={cellNone} >Elevée</TableCell>
                                            <TableCell style={cellNone} >Aigue</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={cellNone} ></TableCell>
                                            <TableCell style={cellNone} ></TableCell>
                                            <TableCell style={cellNone} >0 - 2</TableCell>
                                            <TableCell style={cellNone} >2 - 4</TableCell>
                                            <TableCell style={cellNone} >4 - 6</TableCell>
                                            <TableCell style={cellNone} >6 - 8</TableCell>
                                            <TableCell style={cellNone} > {">"} 8</TableCell>
                                        </TableRow>
                                    </TableHead>


                                    <TableBody>
                                        {FactorData[selectedFactor].map((item, index) => (
                                            <TableRow>
                                                <TableCell style={cellNone} >{item.Name}</TableCell>
                                                <TableCell style={cellNone} >{item.Notation}</TableCell>
                                                <TableCell style={cellGrey} ></TableCell>
                                                <TableCell style={item.Notation > 2 ? cellYellow : cellNone}></TableCell>
                                                <TableCell style={item.Notation > 4 ? cellOrange : cellNone}></TableCell>
                                                <TableCell style={item.Notation > 6 ? cellRed : cellNone}></TableCell>
                                                <TableCell style={item.Notation > 8 ? cellDarkRed : cellNone}></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>

                                </Table>
                            </TableContainer>

                        </Grid>
                    </Grid>

                } />
            </Grid>

            <Grid item xs={12} sm={10} md={5} lg={4} >
                <Box Tittle={"Controverses"} content={

                    <Bar
                        style={{ position: 'relative', height: '100%', width: '100%' }}
                        data={{
                            datasets: [{
                                barPercentage: 1,
                                minBarLength: 2,
                                data: donneeContro,
                                backgroundColor: [
                                    '#B6C512',
                                    '#B6C512',
                                    '#B6C512',
                                    '#B6C512',
                                    '#B6C512',
                                    '#B6C512',
                                ],
                                borderWidth: 0
                            }],
                            labels: libllesContro,
                        }}
                        width={70}
                        height={35}
                        options={{
                            maintainAspectRatio: false,
                            legend: {
                                display: false,
                                labels: {
                                    // This more specific font property overrides the global property
                                    fontColor: 'red',
                                    boxWidth: 10,
                                    padding: 20,
                                    fontFamily: 'Helvetica Neue',
                                }
                            },
                            layout: {
                                padding: {
                                    left: 10,
                                    right: 10,
                                    top: 20,
                                    bottom: 40
                                }
                            },
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        display: false,
                                    },
                                    ticks: {
                                        fontColor: '#edf0f1',
                                        fontSize: 12,
                                        fontFamily: 'Helvetica Neue',
                                        stepSize: 10,
                                        beginAtZero: true
                                    }
                                }],
                                yAxes: [{
                                    gridLines: {
                                        display: true,
                                        color: 'rgb(217,217,217)',
                                        lineWidth: 0.5,
                                        zeroLineWidth: 0,
                                        zeroLineColor: 'rgb(30,72,125)',
                                        drawBorder: false,
                                        borderDash: [5, 5]
                                    },
                                    ticks: {
                                        fontColor: '#edf0f1',
                                        fontSize: 15,
                                        fontFamily: 'Helvetica Neue',
                                        stepSize: 100,
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                        }
                    />
                } />
            </Grid>

            <Grid item xs={12} sm={10} md={5} lg={8} >
                <Box Tittle={"Implications"} content={

                    <Grid className={classes.root} direction="row" justify="center" alignItems="center" container spacing={1}>

                        <Grid item xs={6} sm={3} md={6} lg={6}>

                            <List
                                style={{ height: '10%', rowGap: 1, fontSize: 12 }}
                            >
                                <ListItem
                                    key={1}
                                    button
                                    selected={selectedIndex === 0}
                                    onClick={(event) => handleListImplicationsClick(event, 0)}
                                >
                                    <ListItemText primary='Energie' size='small' />
                                    <ArrowRightAltIcon color={selectedIndex === 0 ? 'primary' : 'disabled'} style={{ fontSize: 40 }} />
                                </ListItem>
                                <ListItem
                                    key={2}
                                    button
                                    selected={selectedIndex === 1}
                                    onClick={(event) => handleListImplicationsClick(event, 1)}
                                >
                                    <ListItemText primary='Armes' />
                                    <ArrowRightAltIcon color={selectedIndex === 1 ? 'primary' : 'disabled'} style={{ fontSize: 40 }} />

                                </ListItem>
                                <ListItem
                                    key={3}
                                    button
                                    selected={selectedIndex === 2}
                                    onClick={(event) => handleListImplicationsClick(event, 2)}
                                >
                                    <ListItemText primary='Humans' />
                                    <ArrowRightAltIcon color={selectedIndex === 2 ? 'primary' : 'disabled'} style={{ fontSize: 40 }} />

                                </ListItem>
                                <ListItem
                                    key={4}
                                    button
                                    selected={selectedIndex === 3}
                                    onClick={(event) => handleListImplicationsClick(event, 3)}
                                >
                                    <ListItemText primary='Nature' />
                                    <ArrowRightAltIcon color={selectedIndex === 3 ? 'primary' : 'disabled'} style={{ fontSize: 40 }} />

                                </ListItem>
                                <ListItem
                                    key={5}
                                    button
                                    selected={selectedIndex === 4}
                                    onClick={(event) => handleListImplicationsClick(event, 4)}
                                >
                                    <ListItemText primary='Vices' />
                                    <ArrowRightAltIcon color={selectedIndex === 4 ? 'primary' : 'disabled'} style={{ fontSize: 40 }} />

                                </ListItem>
                            </List>
                        </Grid>

                        <Grid item xs={6} sm={9} md={6} lg={6}>
                            <TableContainer style={{ position: 'relative', height: '95%', width: '100%' }}>
                                <Table className={classes.table} size='small'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={cellNone} >Catégorie</TableCell>
                                            <TableCell style={cellNone} >Contribution</TableCell>
                                            <TableCell style={cellNone} >Niveau</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {ImpliData[selectedIndex].map((item, index) => (
                                            <TableRow key={index} >
                                                <TableCell style={cellNone} align="left">{item.Name}</TableCell>
                                                <TableCell style={cellNone} >{item.Contrib} %</TableCell>
                                                <TableCell style={cellNone} >{item.Niveau}</TableCell>
                                            </TableRow>
                                        ))}
                                        <TableRow>
                                            <TableCell style={cellNone} >Total</TableCell>
                                            <TableCell style={cellNone} >{totalSelectedImpli}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                } />
            </Grid>
        </Grid>
    );
}

function createData(EData, SData, GData, couvert, facteurs, constroverses, implications) {
    return [EData, SData, GData, couvert, facteurs, constroverses, implications]
}

const EFactorData = [
    { Name: 'Carbone - Opérations propres', Notation: 0.61 },
    { Name: 'Carbone - Produits et Services', Notation: 0.59 },
]

const SFactorData = [
    { Name: 'Accès aux services', Notation: 0.13 },
    { Name: 'relation avec les communautés', Notation: 0.20 },
]

const GFactorData = [
    { Name: 'Gouvernance Corporate', Notation: 3.28 },
    { Name: 'Corruption', Notation: 0.26 },
]

const FactorData = [
    EFactorData,
    SFactorData,
    GFactorData,
]

const EnergieImpliData = [
    { Name: 'Artic Oil Gas', Contrib: 0.2, Niveau: 0.01 },
    { Name: 'Nuclear', Contrib: 0.4, Niveau: 0.03 },
    { Name: 'Oil Gas', Contrib: 2.4, Niveau: 0.16 },
    { Name: 'Oil Sand', Contrib: 0.2, Niveau: 0.01 },
]

const ArmesImpliData = [
    { Name: 'Controversial Weapons', Contrib: 1.2, Niveau: 0.00 },
]

const HumanImpliData = [
    { Name: 'Abortion', Contrib: 0.3, Niveau: 0.14 },

]

const NatureImpliData = [
    { Name: 'Animal Testing Score', Contrib: 5.5, Niveau: 0.00 },
]

const VicesImpliData = [
    { Name: 'Alcoholic Beveraes', Contrib: 2.4, Niveau: 0.00 },
]

const ImpliData = [
    EnergieImpliData,
    ArmesImpliData,
    HumanImpliData,
    NatureImpliData,
    VicesImpliData,
]

const data = [
    createData(2, 4, 15, 'Y', 0, 4, 0),
    createData(1, 5, 15, 'Y', 0, 3, 0),
    createData(3, 4, 15, 'N', 0, 4, 0),
]

