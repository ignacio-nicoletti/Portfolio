import {Container, Typography, Paper, Grid } from "@mui/material";


export const About = () => {
    return (
        <>
            <Grid
            >
                <Paper
                    elevation={10}
                    style={{
                        padding: 20,
                        marginTop: 10,
                        borderRadius: 15,
                        backgroundColor: '#2b2d42',
                        marginBottom: 15,
                        marginRight: "50%",
                        position: "absolute",
                        top: "5vh",
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
                                    color: '#fff',
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
                                    color: '#ffff',
                                    pb: 2,
                                    fontFamily: 'montserrat',
                                    alignItems: 'flex-start',
                                    flexDirection: 'column',
                                    fontWeight: 'bold',
                                }}
                            >
                                <Typography  sx={{
                                   
                                }}> 
                                Estudios:</Typography>
                                <Typography>- Primer año de licenciatura en sistemas.</Typography>
                                <Typography>- Diseño multimedial (en curso 4to año).</Typography>
                                <Typography>- Terceario de inyeccion electronica automotriz.</Typography>
                                <Typography>- Bootcamp en SoyHenry.</Typography>



                            </Typography>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    fontSize: 25,
                                    color: '#ffff',
                                    pb: 2,
                                    fontFamily: 'montserrat',
                                    fontWeight: 'bold',
                                    alignItems: 'flex-start',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography> Experiencia laboral:</Typography>
                                <Typography>- Taller de Car Detail.</Typography>
                                <Typography>- Taller mecanico.</Typography>
                                 
                            </Typography>
                        </Container>


                    </Container>

                </Paper>
            </Grid>

            <Grid
            >
                <Paper
                    elevation={10}
                    style={{
                        padding: 20,
                        marginTop: 5,
                        borderRadius: 15,
                        backgroundColor: '#2b2d42',
                        marginBottom: 15,
                        marginRight: "50%",
                        position: "absolute",
                        top: "70vh",
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
                                    color: '#fff',
                                    pb: 2,
                                    fontFamily: 'montserrat',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    fontWeight: 'bold',
                                }}
                            >
                                Tecnologias que he utilizado


                            </Typography>

                        </Container>


                    </Container>

                </Paper>
            </Grid>

        </>
    )


}