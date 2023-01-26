
import { Box, ListItem, ListItemButton, ListItemText, ListItemIcon, MenuItem, Card, CardHeader, Avatar, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import perfil from "../Assets/nacho.png"

const handlerabout=()=>{ 
    Navigate('/about')
}


export const Menu = () => {
    return (
        <>

            <img src={perfil} alt=""
                style={{
                    position: "fixed",
                    width: "300px",
                    top: 0,
                    left: 20,
                    zIndex: 10002,
                    // ml: '20px',
                    // mb: '20px',
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
                <ListItem sx={{ position: "absolute", flexDirection: "column", bottom: 150, color: "red" }}>

                    <ListItemButton sx={{}}>

                        
                            <ListItemText primary="Sobre Mi" 
                            sx={{ background: "black", }} 
                            onClick={handlerabout}
                            />
                        


                    </ListItemButton>

                    <ListItemButton >
                        <ListItemText primary="Proyectos" sx={{ background: "black", }} />
                    </ListItemButton>

                </ListItem>

            </Box>

        </>
    )


}