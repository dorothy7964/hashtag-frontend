import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TopHashTag from "../Components/TopHashTag";
import RecentHashTag from "../Components/RecentHashTag";

// material-style
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: "50%",
        margin: "0 auto",
        marginBottom: 50,
    }
});

// styled-components
const Wrapper = styled.div`
    margin: 80px auto;
    min-height: 80vh;
    align-items: center;
    width: ${props => props.theme.tableWith};
`;

const ButtonBox = styled.div`
    margin-top: 20px;
`;

const TableContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 50px;
`;

const Main = () => {
    const classes = useStyles();
    // true : 인기 해시태그 / false : 최신 해시태그
    const [togglePage, setTogglePage] = useState(0);     

    const handleTogglePage = (e, int) => {
        setTogglePage(int);
    };

    return (
        <Wrapper>
            <Helmet>
                <title>HashTag</title>
            </Helmet>
            <ButtonBox>
                <Paper className={classes.root}>
                    <Tabs
                        value={togglePage}
                        onChange={handleTogglePage}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                        label
                    >
                        <Tab label="인기 해시태그" />
                        <Tab label="최근 해시태그" />
                    </Tabs>
                </Paper>
            </ButtonBox>
            <TableContainer>
                {togglePage === 0
                    ?   <TopHashTag />
                    :   <RecentHashTag />
                }
            </TableContainer>
        </Wrapper>
    );
};

export default Main;