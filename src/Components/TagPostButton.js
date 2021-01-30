import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

// material-style
const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        border: `1px solid ${theme.palette.divider}`,
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    divider: {
        margin: theme.spacing(1, 0.5),
    },
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
        margin: theme.spacing(0.5),
        border: 'none',
        '&:not(:first-child)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-child': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}))(ToggleButtonGroup);

export default function TagPostButton({ 
    handleSortAction,
    handleTogglePage
 }) {
    const classes = useStyles();
    const [alignment, setAlignment] = useState("left");
    const [type, setType] = useState(true);

    const handleChange = (event, newFormats) => {
        setAlignment(newFormats);

        if (newFormats === "left") {
            handleSortAction("lately_popular");

        } else if (newFormats === "center"){
            handleSortAction("top_remain");

        } else if (newFormats === "right"){
            handleSortAction("top_like");

        } else if (newFormats === "justify") {
            handleSortAction("top_comment");

        }
    };

    const handleType = (event, newType) => {
        setType(newType);

        if (newType === true) {
            handleTogglePage(newType);

        } else if (newType === false){
            handleTogglePage(newType);

        }
    };
    
    return (
        <React.Fragment>
            <Paper elevation={0} className={classes.paper}>
                <StyledToggleButtonGroup
                    size="small"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="text alignment"
                >
                    <ToggleButton value="left" aria-label="최신순">
                        <RestoreIcon />
                        &nbsp;최신순
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="유지순">
                        <AccessTimeIcon />
                        &nbsp;유지순
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="좋아요 순">
                        <FavoriteIcon />
                        &nbsp;좋아요 순
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="댓글 순">
                        <MessageIcon />
                        &nbsp;댓글 순
                    </ToggleButton>
                </StyledToggleButtonGroup>
                <Divider flexItem orientation="vertical" className={classes.divider} />
                <StyledToggleButtonGroup
                    size="small"
                    value={type}
                    exclusive
                    onChange={handleType}
                    aria-label="text alignment"
                >
                    <ToggleButton value={true} aria-label="lise">
                        <ViewListIcon />
                    </ToggleButton>
                    <ToggleButton value={false} aria-label="gallery">
                        <ViewModuleIcon />
                    </ToggleButton>
                </StyledToggleButtonGroup>
            </Paper>
        </React.Fragment>
    );
}