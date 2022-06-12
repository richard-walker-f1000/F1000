import React, { Component } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import logo from "./logo.svg";
import "./App.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    render() {
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
                    {/* Display counter */}
                    <h1>{this.state.counter}</h1>
                    <Stack spacing={8} direction="row" style={{ marginTop: 20 }}>
                        {/* Decrease button */}
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                console.log("Decrement");
                                this.setState({ counter: this.state.counter - 1 });
                            }}
                            startIcon={<RemoveCircleOutlineIcon />}
                        >
                            Decrease
                        </Button>
                        {/* Increase button */}
                        <Button
                            variant="contained"
                            onClick={() => {
                                console.log("Increase");
                                this.setState({ counter: this.state.counter + 1 });
                            }}
                            startIcon={<AddCircleOutlineIcon />}
                        >
                            Increase
                        </Button>
                    </Stack>
                </div>
            </Box>
        );
    }
}

export default App;
