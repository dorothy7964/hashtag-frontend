import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import React, { useState } from "react";

// material-style
const useStyles = makeStyles({
    root: {
        marginBottom: 10
    }
});

export default function SelectSort({ handleSortDate }) {
    const classes = useStyles();
    const [alignment, setAlignment] = useState("left"); 

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        if (newAlignment === "left") {
            handleSortDate(1);
        } else if (newAlignment === "center"){
            handleSortDate(7);
        } else if (newAlignment === "right"){
            handleSortDate(30);
        } else if (newAlignment === "justify") {
            handleSortDate(60);
        }
    };
    
    return (
        <Grid item>
            <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
                <ToggleButton value="left">
                    <RestoreIcon fontSize="small" />
                    1일 간
                </ToggleButton>
                <ToggleButton value="center">
                    <RestoreIcon fontSize="small" />
                    7일 간
                </ToggleButton>
                <ToggleButton value="right">
                    <RestoreIcon fontSize="small" />
                    30일 간
                    </ToggleButton>
                <ToggleButton value="justify">
                    <RestoreIcon fontSize="small" />
                    60일 간
                </ToggleButton>
            </ToggleButtonGroup>
        </Grid>
    );
}




