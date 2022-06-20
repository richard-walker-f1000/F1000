import React from "react";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import SearchCities from "./pages/SearchCities";
import "./styles/styles.scss";
function App() {
    return (
        <Box sx={{ flexGrow: 1 }} className="App">
            <Header />
            <SearchCities />
        </Box>
    );
}

export default App;
