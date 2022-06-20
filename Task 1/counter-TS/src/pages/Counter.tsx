import * as React from "react";
import useStore from "../store/useStore";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const Counter = () => {
    const store = useStore((state) => state);
    return (
        <div className="container">
            {/* Display counter */}
            <h1 data-testid="counter-value">{store.count}</h1>
            <Stack spacing={8} direction="row" style={{ marginTop: 20 }}>
                {/* Decrease button */}
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={store.decrementCount}
                    startIcon={<RemoveCircleOutlineIcon />}
                >
                    Decrement
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={store.resetCounter}
                    startIcon={<RestartAltIcon />}
                >
                    Reset
                </Button>
                {/* Increase button */}
                <Button variant="contained" onClick={store.incrementCount} startIcon={<AddCircleOutlineIcon />}>
                    Increment
                </Button>
            </Stack>
        </div>
    );
};

export default Counter;
