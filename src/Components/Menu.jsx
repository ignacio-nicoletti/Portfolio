import { Box, ListItem, Typography, FormControl, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import perfil from "../Assets/nacho.png"

export const Menu = () => {
    const navigate = useNavigate();

    const handlerabout = () => {
        navigate('/about');
    }
    const handlerProyect = () => {
        navigate('/Proyects');
    }



    return (
        <>

            <img src={perfil} alt="Foto de perfil"
                style={{
                    position: "fixed",
                    width: "300px",
                    top: 0,
                    left: 20,
                    zIndex: 10002,
                    border: "solid 3px black"
                }} />


            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "300px",
                    height: 'calc(100vh - 0px)',
                    color: "#272727",
                    background: '#2b2d42',
                    boxShadow: 1,
                    zIndex: 10001,
                    ml: '20px',
                    mb: '20px',
                    border: "solid 3px black"
                }}
            >
                <ListItem sx={{ position: "absolute", flexDirection: "column", top: "400px"}}>



                    <FormControl sx={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                fontFamily: 'montserrat',
                                fontWeight: 'bold',
                                mb: 1,
                                width:'100%'
                            }}>
                        <Button
                            onClick={handlerabout}
                            // size="small"
                            variant="contained"
                            // color="secondary"
                           
                            
                        >
                            Sobre Mi
                        </Button>
                    </FormControl>
                    <FormControl sx={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                fontFamily: 'montserrat',
                                fontWeight: 'bold',
                                mb: 1,
                                width:'100%'
                            }}>
                        <Button
                            // startIcon={<ArrowBackIosNewIcon />}
                            onClick={handlerProyect}
                            size="small"
                            variant="contained"
                            color="secondary"
                            
                        >
                            Proyectos
                        </Button>
                    </FormControl>
                    <Typography>Contacto</Typography>
                    <FormControl sx={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                fontFamily: 'montserrat',
                                fontWeight: 'bold',
                                mb: 1,
                                width:'100%'
                            }}>
                        <Button
                         
                            size="small"
                            variant="contained"
                            color="secondary"
                            
                        >
                            <a href="https://www.linkedin.com/in/ignacio-nicoletti/" target="_blank" >LinkedIn</a>
                        </Button>
                    </FormControl>
                    <FormControl sx={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                fontFamily: 'montserrat',
                                fontWeight: 'bold',
                                mb: 1,
                                width:'100%'
                            }}>
                        <Button
                            // startIcon={<ArrowBackIosNewIcon />}
                            // onClick={handlerProyect}
                            size="small"
                            variant="contained"
                            color="secondary"
                            
                        >
                            <a href="https://github.com/ignacio-nicoletti" target="_blank" >Github</a>
                        </Button>
                    </FormControl>


                    <Typography>Telefono: +54 221-3195893</Typography>



                </ListItem>

            </Box>

        </>
    )


}