import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
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
function createData(name, id, gender, age, Date, Description, patientreportrequest) {
    return { name, id, gender, age, Date, Description, patientreportrequest };
}
const rows = [
    createData('Sai', "P1234", "Male", 48, "1/8/2022",
        <div>
            <input />
            <button  >Save</button>
        </div>,
        <select >
            <option value="mri">MRI</option>
            <option value="ct">CT</option>
            <option value="bloodtest">Bloodtest</option>
        </select>
    ),

];

const theme = createTheme();

export default function Album() {
    // const navigate = useNavigate();

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
                            Write Description
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Patient Name</StyledTableCell>
                                        <StyledTableCell align="left">ID</StyledTableCell>

                                        <StyledTableCell align="left">Gender</StyledTableCell>
                                        <StyledTableCell align="left">Age</StyledTableCell>
                                        <StyledTableCell align="left">Date</StyledTableCell>
                                        <StyledTableCell align="left">Description</StyledTableCell>
                                        <StyledTableCell align="left">Report Request</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                                            <StyledTableCell align="left">{row.id}</StyledTableCell>
                                            <StyledTableCell align="left">{row.gender}</StyledTableCell>
                                            <StyledTableCell align="left">{row.age}</StyledTableCell>
                                            <StyledTableCell align="left">{row.Date}</StyledTableCell>
                                            <StyledTableCell align="left">{row.Description}</StyledTableCell>
                                            <StyledTableCell align="left">{row.patientreportrequest}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Button type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }} > Send</Button>


                    </Container>
                </Box>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
               
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}