import React from 'react';
import styled from "styled-components";
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const Wrapper = styled.div`
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 10px;
`;

export default function SelectSort({ handleSortDate }) {
    const [alignment, setAlignment] = React.useState("left"); {
    
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
            <Wrapper>
                <Grid container spacing={2} direction="column" alignItems="flex-end">
                    <Grid item>
                        <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
                            <ToggleButton value="left">
                            <FormatAlignLeftIcon fontSize="small" />
                            </ToggleButton>
                            <ToggleButton value="center">
                                <FormatAlignCenterIcon fontSize="small" />
                            </ToggleButton>
                            <ToggleButton value="right">
                                <FormatAlignRightIcon fontSize="small" />
                            </ToggleButton>
                            <ToggleButton value="justify">
                            <FormatAlignJustifyIcon fontSize="small" />
                        </ToggleButton>
                    </ToggleButtonGroup>
                    </Grid>
            </Grid>
            </Wrapper>
        );
    }        
}