import { Container, Typography, Paper, Grid } from "@mui/material";
import axiosimg from '../Assets/tecnologias/axios.png'
import cssimg from '../Assets/tecnologias/css.png'
import gitimg from '../Assets/tecnologias/git.png'
import htmlimg from '../Assets/tecnologias/html.png'
import jsimg from '../Assets/tecnologias/javas.png'
import mongooseimg from '../Assets/tecnologias/moongose.png'
import sqlimg from '../Assets/tecnologias/sql.png'
import reduximg from '../Assets/tecnologias/redux.png'
import typeimg from '../Assets/tecnologias/type.png'
import reactimg from '../Assets/tecnologias/react.png'
import pgimg from '../Assets/tecnologias/pg.png'


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
                        width: "40%",
                        boxShadow: 1,
                        zIndex: 10001,
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
                            Programador Full Stack Developer


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
                            <Typography sx={{

                            }}>
                                Cuento con mas de 800 horas de pr??ctica, desde chico siempre me gusto la programaci??n
                                lo cual siempre tengo motivaci??n para perfeccionar mis habilidades y aprender nuevas tecnolog??as.
                                Me egres?? del Bootcamp SoyHenry obteniendo como logro que el proyecto grupal sea considerado uno de los mejores entre las dos cohortes.
                            </Typography>
                        </Typography>
                    </Container>

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
                                color: '#ffff',
                                pb: 2,
                                fontFamily: 'montserrat',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                                fontWeight: 'bold',
                            }}
                        >
                            <Typography sx={{
                                fontWeight: 'bold',

                            }}>
                                Estudios:</Typography>
                            <Typography>- Primer a??o de licenciatura en sistemas.</Typography>
                            <Typography>- Dise??o multimedial (en curso 4to a??o).</Typography>
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
                            <Typography sx={{
                                fontWeight: 'bold',

                            }}> Experiencia laboral:</Typography>
                            <Typography>- Taller de Car Detail.</Typography>
                            <Typography>- Taller mecanico.</Typography>
                            <Typography>- Nabijash Proyecto Final.</Typography>

                        </Typography>

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
                        top: "90vh",
                        left: "40%",
                        width: "50%",
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
                            <img style={{ width: 50, heigth: 50, backgroundColor: "none", borderRadius: "5px" }} src={axiosimg} alt="" />
                            <img style={{ width: 50, heigth: 50, backgroundColor: "none", borderRadius: "40px" }} src={cssimg} alt="" />
                            <img style={{ width: 50, heigth: 50, backgroundColor: "none", borderRadius: "40px" }} src={gitimg} alt="" />
                            <img style={{ width: 50, heigth: 50, backgroundColor: "none", borderRadius: "40px" }} src={htmlimg} alt="" />
                            <img style={{ width: 50, heigth: 50, backgroundColor: "none", borderRadius: "40px" }} src={mongooseimg} alt="" />
                            <img style={{ width: 50, heigth: 50, backgroundColor: "none", borderRadius: "5px" }} src={reactimg} alt="" />
                            <img style={{ width: 50, heigth: 50, backgroundColor: "none", borderRadius: "40px" }} src={reduximg} alt="" />
                            <img style={{ width: 50, heigth: 50, backgroundColor: "none", borderRadius: "40px" }} src={jsimg} alt="" />
                            <img style={{ width: 50, heigth: 50, backgroundColor: "none", borderRadius: "40px" }} src={typeimg} alt="" />
                            <img style={{ width: 50, heigth: 50, backgroundColor: "none", borderRadius: "40px" }} src={sqlimg} alt="" />
                            <img style={{ width: 50, heigth: 50, backgroundColor: "none", borderRadius: "40px" }} src={pgimg} alt="" />
                        </Container>


                    </Container>

                </Paper>
            </Grid>

        </>
    )


}