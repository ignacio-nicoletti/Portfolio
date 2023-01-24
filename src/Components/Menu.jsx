

import { Box, ListItem, ListItemButton, ListItemText, ListItemIcon, MenuItem } from "@mui/material";
import { Outlet } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";



export const Menu = () => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    // height: "100vh",
                    // background: `url(${bgDetailCompany})`,
                    backgroundRepeat: "repeat",
                }}
            >
                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "350px",
                        minHeight: "100vh",
                        color: "#272727",
                        boxShadow: 1,
                        zIndex: 10001,
                        ml: '20px',
                        mb: '20px'
                    }}
                >
                    <Box
                        display="flex"
                        sx={{
                            width: "100%",
                            height: "68px",
                            backgroundColor: "rgba(0,0,0,0)",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            // src={logoWhiteNav}
                            alt="Logo"
                            style={{
                                background: "black",
                                width: "auto",
                                maxHeight: "50px",
                            }}
                        />
                    </Box>
                    <Box sx={{ background: '#fff', height: 'calc(100vh - 90px)', borderRadius: '4px' }}>
                        {/* <UserItemsList /> */}
                        <ListItem sx={{ position: "absolute", bottom: "30px" }}>
                            <ListItemButton>
                                <ExitToAppIcon />
                                <ListItemText primary="Cerrar sesion" sx={{ pl: 2 }} />
                            </ListItemButton>
                        </ListItem>
                    </Box>
                </Box>
                <Box
                    sx={{
                        ml: "370px",
                        p: "2em",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        minHeight: "100vh",
                    }}
                >
                    <Outlet />
                </Box>
            </Box>

        </>
    )


}