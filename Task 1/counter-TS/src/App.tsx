import React from "react";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import Counter from "./pages/Counter";
import "./styles/styles.scss";
function App() {
    return (
        <Box sx={{ flexGrow: 1 }} className="App">
            <Header />
            <Counter />
        </Box>
    );
}

export default App;
