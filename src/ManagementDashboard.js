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

import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';



function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {/* {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'} */}
        </Typography>
    );
}


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
                            Healthcare Management System
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                          Management Dashboard
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button onClick={() => navigate("/adddoctor")}
                                color="success" variant="contained">Add Doctor</Button>
                            <Button onClick={() => navigate("/respondrequest")} color="error" variant="contained">Respond Request</Button>

                        </Stack>
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