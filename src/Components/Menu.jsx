import { Box, ListItem, Typography, FormControl, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import perfil from "../Assets/nacho.png"

export const Menu = () => {
    const navigate = useNavigate();

    const handlerabout = () => {
        navigate('/about');
    }
    const handlerProyect = () => {
        navigate('/projects');
    }



    return (
        <>

            <img src={perfil} alt="Foto de perfil"
                style={{
                    position: "fixed",
                    width: "300px",
                    height: "285px",
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
                    height: 'calc(100vh - 6px)',
                    color: "#272727",
                    background: '#2b2d42',
                    boxShadow: 1,
                    zIndex: 10001,
                    ml: '20px',
                    mb: '20px',
                    border: "solid 3px black"
                }}
            >
                <ListItem sx={{ position: "absolute", flexDirection: "column", top: "325px" }}>



                    <FormControl sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        fontFamily: 'montserrat',
                        fontWeight: 'bold',
                        mb: 1,
                        width: '100%',
                        // background:"black"
                    }}>
                        <Button
                            onClick={handlerabout}
                            // size="small"
                            variant="contained"
                            color="info"


                        >
                            Sobre Mi
                        </Button>
                    </FormControl>
                    <FormControl sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        fontFamily: 'montserrat',
                        fontWeight: 'bold',
                        mb: 1,
                        width: '100%'
                    }}>
                        <Button
                            onClick={handlerProyect}
                            size="small"
                            variant="contained"
                            color="info"

                        >
                            Proyectos
                        </Button>
                    </FormControl>
                    <Typography
                        sx={{
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            fontFamily: 'montserrat',
                            mb: 1,
                            width: '100%',
                            color: 'white',
                            borderRadius: '3px'
                        }}>

                        Contacto :
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

                        >
                            <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.linkedin.com/in/ignacio-nicoletti/" target="_blank" rel="noreferrer" >LinkedIn</a>
                        </Button>
                    </FormControl>
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

                        >
                            <a style={{ textDecoration: 'none', color: 'white' }} href="https://github.com/ignacio-nicoletti" target="_blank" rel="noreferrer">Github</a>
                        </Button>
                    </FormControl>


                    <Typography
                        sx={{
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            fontFamily: 'montserrat',
                            // fontWeight: 'bold',
                            mb: 1,
                            width: '100%',
                            color: 'white',
                            background: '#2b2d42',
                            borderRadius: '3px'
                        }}>
                        Telefono: +54 221-3195893
                    </Typography>

                    <Typography
                        sx={{
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            fontFamily: 'montserrat',
                            // fontWeight: 'bold',
                            mb: 1,
                            width: '100%',
                            color: 'white',
                            background: '#2b2d42',
                            borderRadius: '3px'
                        }}>
                       <a style={{ textDecoration: 'none', color: 'white' }} href="./Nicoletti-Ignacio-CV.pdf" download>Curriculum Vitae</a> 
                    </Typography>


                </ListItem>

            </Box>

        </>
    )


}