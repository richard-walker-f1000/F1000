import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import logo from "./logo.svg";
import NotFound from "./notfound.png";
import "./App.scss";

const ValidationTextField = styled(TextField)({
    label: {
        color: "white",
    },
    input: {
        color: "white",
        borderColor: "white",
    },
    "& label.Mui-focused": {
        color: "white",
    },
    "& .MuiInput-underline:hover": {
        borderBottomColor: "white",
        color: "white",
    },
    "& .MuiInput-underline:focus": {
        borderBottomColor: "white",
        color: "white",
    },
    "& .MuiInput-underline:before": {
        borderBottomColor: "white",
        color: "white",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "white",
        color: "white",
    },
    "& .MuiOutlinedInput-root": {
        color: "white",
        "& fieldset": {
            borderColor: "white",
        },
        "&:hover fieldset": {
            borderColor: "white",
        },
        "&.Mui-focused fieldset": {
            borderColor: "white",
        },
    },
    "& .MuiInput-underline": {
        borderBottomColor: "white",
        color: "white",
    },
});
function App() {
    const [citiesValidationString, setCitiesValidationString] = useState("");
    const citiesDataSet = [
        "Amsterdam",
        "Athens",
        "Atlantic City",
        "Beijing",
        "Chicago",
        "Damascus",
        "Delhi",
        "Dubai",
        "Dublin",
        "Hong Kong",
        "Kansas City",
        "Madrid",
        "Manila",
        "Melbourne",
        "Mexico City",
        "Moscow",
        "Mumbai",
        "Munich",
        "Tokyo",
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Header with F1000 svg Logo */}
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Main content */}

            <div className="container">
                {/* Validation Text */}
                <ValidationTextField
                    label="Search Cities"
                    required
                    variant="standard"
                    value={citiesValidationString}
                    style={{ width: "80vw" }}
                    id="cities-validation-textfield"
                    onChange={(event) => setCitiesValidationString(event.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" color>
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                />
                {/* Display counter */}
                {citiesDataSet.filter(
                    (city) => city.startsWith(citiesValidationString) || citiesValidationString === ""
                ).length > 0 ? (
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            marginTop: 5,
                            "& > :not(style)": {
                                m: 1,
                                width: "32vw",
                                height: 61,
                            },
                        }}
                    >
                        {citiesDataSet
                            .filter((city) => city.startsWith(citiesValidationString) || citiesValidationString === "")
                            .map((city) => (
                                <Paper elevation={3} className="city-card">
                                    {city}
                                </Paper>
                            ))}
                    </Box>
                ) : (
                    <div className="not-found">
                        <img src={NotFound} alt="logo" />
                        <h3>No Cities found</h3>
                    </div>
                )}
            </div>
        </Box>
    );
}

export default App;
