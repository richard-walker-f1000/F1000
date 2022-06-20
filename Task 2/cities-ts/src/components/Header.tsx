import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.svg";
const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <img src={logo} className="App-logo" alt="logo" />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="light">
                    Search Cities
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
export default Header;
