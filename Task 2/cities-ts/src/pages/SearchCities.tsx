import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import NotFound from "../assets/notfound.png";

function SearchCities() {
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
    const [citiesValidationString, setCitiesValidationString] = useState("");

    return (
        <div className="container">
            {/* Validation Text */}
            <TextField
                variant="standard"
                label="Search Cities"
                value={citiesValidationString}
                style={{ width: "80vw" }}
                id="cities-validation-textfield"
                onChange={(event) => setCitiesValidationString(event.target.value)}
                inputProps={{ "data-testid": "cities-validation-textfield" }}
            />

            {/* Display counter */}
            {citiesDataSet.filter(
                (city) =>
                    city.toLowerCase().startsWith(citiesValidationString.toLowerCase()) ||
                    citiesValidationString.toLowerCase() === ""
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
                        .filter(
                            (city) =>
                                city.toLowerCase().startsWith(citiesValidationString.toLowerCase()) ||
                                citiesValidationString.toLowerCase() === ""
                        )
                        .map((city) => (
                            <Paper elevation={3} className="city-card" key={city} data-testid="city-card-item">
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
    );
}

export default SearchCities;
