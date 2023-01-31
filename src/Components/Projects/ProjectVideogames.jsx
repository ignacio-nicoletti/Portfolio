import { Container, Typography, Paper, Grid, Button, FormControl, CardMedia } from "@mui/material";
import nabijash from '../../Assets/nabijash.png'
export const ProjectVideogames = () => {
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
                        left: "65%",
                        width: "400px",
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

                        <CardMedia
                            sx={{width: '100%' ,height:150}}
                            image={nabijash}
                            title="NabijashPhoto"
                        />
                        <Container>
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
                                Videogames


                            </Typography>


                            <Typography
                                sx={{
                                    display: 'flex',
                                    fontSize: 25,
                                    color: '#ffff',
                                    fontFamily: 'montserrat',
                                    alignItems: 'flex-start',
                                    flexDirection: 'column',
                                     justifyContent: 'left',
                                }}
                                >

                                <Typography>Proyecto individual</Typography>
                                <Typography>Participantes: 1</Typography>

                            </Typography>
                               
                            <FormControl sx={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                fontFamily: 'montserrat',
                                fontWeight: 'bold',
                                mb: 1,
                                width: '100%'
                            }}>
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="info"
                                    disabled={true}

                                >
                                    <a style={{ textDecoration: 'none', color: 'white' }} href="https://nabijash.vercel.app/" target="_blank" rel="noreferrer">Link al proyecto</a>
                                </Button>
                            </FormControl>
                        </Container>


                    </Container>

                </Paper>
            </Grid>


        </>


    )
}