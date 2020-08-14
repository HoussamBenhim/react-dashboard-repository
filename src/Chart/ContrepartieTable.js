import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        width: '100%',
        height: '10px',
        overflowY: 'scroll',

    },
    container: {
        maxHeight: 230,
    },
});
const StyledTable = withStyles((theme) => ({
    root: {
        width: '95%',
        margin: 'auto',
        height: '100px',
        overflowY: 'scroll',
    },
}))(Table);

const StyledTableRow = withStyles((theme) => ({
    root: {
        backgroundColor: 'rgb(32,42,59)',

    },
}))(TableRow);

const StyledTabCell = withStyles((theme) => ({
    root: {
        borderColor: '#B6C512',
        color: 'white',

    },
    stickyHeader: {
        backgroundColor: 'rgb(32,42,59)',
    }
}))(TableCell);

const StyledTybody = withStyles((theme) => ({
    root: {
        height: '10px',
        overflowY: 'hidden',

    },
}))(TableBody);

/*------------------------- Data---------------------------------------- */
/* ---------------------------------------------------------------------- */
export default function CountrepartieTable({ data, datas }) {
    const classes = useStyles();
    const [donnee, setData] = useState();

    const count = 0

    useEffect(() => {
        setData(datas);
    }, datas)



    return (
        <TableContainer className={classes.container}>
            <StyledTable stickyHeader size="small" aria-label="sticky table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTabCell>Entreprise</StyledTabCell>
                        <StyledTabCell align="left">Exposition</StyledTabCell>
                        <StyledTabCell align="left">Secteur activité</StyledTabCell>
                    </StyledTableRow>
                </TableHead>
                <StyledTybody>
                    {(donnee && donnee.length > 0) ?
                        donnee[0].map((row, index) => (
                            <StyledTableRow key={index} >
                                <StyledTabCell component="th" scope="row">
                                    {row}
                                </StyledTabCell>
                                <StyledTabCell align="left">{donnee[1][index][0]}</StyledTabCell>
                                <StyledTabCell align="left">{donnee[1][index][1]}</StyledTabCell>
                            </StyledTableRow>
                        )
                        )
                        : <StyledTableRow key={0} >
                            <StyledTabCell component="th" scope="row">
                                {''}
                            </StyledTabCell>
                            <StyledTabCell align="left">{''}</StyledTabCell>
                            <StyledTabCell align="left">{''}</StyledTabCell>
                        </StyledTableRow>
                    }
                </StyledTybody>
            </StyledTable>
        </TableContainer>
    );
}