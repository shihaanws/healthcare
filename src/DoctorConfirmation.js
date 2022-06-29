import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">

        </Typography>
    );
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function createData(name, email, gender, doctortype, age, appoinmentdate, doctor, status) {
    return { name, email, gender, doctortype, age, appoinmentdate, doctor, status };
}
const rows = [
    createData('Sai', "sai@mail.com", "Male", "Paedia", 48, "1/8/2022", "Dr.Ramesh", <Button variant="contained" color="secondary" >Forward</Button>),
    // createData('Hany', "hany@mail.com", "Female", "Neuro", 29, "8/5/2022", "Dr.Sharan", <Button variant="contained" color="secondary" >Forward</Button>),
    // createData('Gokul', "gokul.f@mail.com", "male", "Cardio", 36, "7/7/2022", "Dr.Saikumar", <Button variant="contained" color="secondary" >Forward</Button>),

];

const theme = createTheme();

export default function Album() {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <HealthAndSafetyIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Healthcare Management System

                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Doctor Confirmation
                        </Typography>


                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Patient Name</StyledTableCell>
                                        <StyledTableCell align="left">Patient Email</StyledTableCell>
                                        <StyledTableCell align="left">Gender</StyledTableCell>
                                        <StyledTableCell align="left">Doctor Type</StyledTableCell>
                                        <StyledTableCell align="left">Age</StyledTableCell>
                                        <StyledTableCell align="left">Appoinment Date</StyledTableCell>
                                        <StyledTableCell align="left">Doctor</StyledTableCell>
                                        <StyledTableCell align="left">Status</StyledTableCell>


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="left">{row.email}</StyledTableCell>
                                            <StyledTableCell align="left">{row.gender}</StyledTableCell>
                                            <StyledTableCell align="left">{row.doctortype}</StyledTableCell>
                                            <StyledTableCell align="left">{row.age}</StyledTableCell>
                                            <StyledTableCell align="left">{row.appoinmentdate}</StyledTableCell>
                                            <StyledTableCell align="left">{row.doctor}</StyledTableCell>
                                            <StyledTableCell align="left">{row.status}</StyledTableCell>

                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>


                    </Container>
                </Box>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                {/* <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography> */}
                {/* <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography> */}
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}