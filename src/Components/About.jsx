
import { Box, ListItem, ListItemButton, ListItemText, ListItemIcon, MenuItem, Card, CardHeader, Avatar, IconButton, Container, Typography, Paper, Grid } from "@mui/material";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";


const handlerabout = () => {
    Navigate('/about')
}


export const About = () => {
    return (
        <>
            <Grid
                // container
                // direction='column'
                // justifyContent='center'
                // alignItems='center'
                // position='relative'
                
                
                    sx={{
                     
                    }}

            >
                <Paper
                    elevation={10}
                    style={{
                        padding: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        backgroundColor: 'black',
                        marginBottom: 15,
                        marginRight:"50%",
                        position: "absolute",
                        top: "25vh",
                        left: "45%",
                        width: "500px",
                        boxShadow: 1,
                        zIndex: 10002,
                        ml: '20px',
                        mb: '20px',
                        border: "solid 3px black"
                    }}
                >

                    <Container
                        sx={{
                            alignContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >

                        <Container
                            sx={{
                                alignContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography
                                sx={{
                                    display: 'flex',
                                    fontSize: 25,
                                    color: '#ffff01',
                                    pb: 2,
                                    fontFamily: 'montserrat',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    fontWeight: 'bold',
                                }}
                            >
                             Programador Full Stack Developer con +800 horas
                             

                            </Typography>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    fontSize: 25,
                                    color: '#ffff01',
                                    pb: 2,
                                    fontFamily: 'montserrat',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    fontWeight: 'bold',
                                }}
                            >
                             Estudios: 
                             - Primer año de licenciatura en sistemas 
                             - Diseño multimedial (en curso 4to año)
                             - terceario de inyeccion electronica automotriz
                             - Bootcamp en SoyHenry
                             

                            </Typography>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    fontSize: 25,
                                    color: '#ffff01',
                                    pb: 2,
                                    fontFamily: 'montserrat',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    fontWeight: 'bold',
                                }}
                            >
                            Experiencia laboral: 
                            Taller de car Detail 
                            Taller mecanico 
                             

                            </Typography>
                        </Container>
                     

                    </Container>

                </Paper>
            </Grid>

        </>
    )


}