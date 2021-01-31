import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import moment from "moment";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// styled-components
const Timestamp = styled.span`
`;

// Customized Style
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        padding: 30,
        fontWeight: "bold",
        fontSize: 17,
    },
    body: {
        padding: 20,
        fontSize: 16,
    },
  }))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const MainMaterialTable = ({ mapData, fileName }) => {
    const classes = useStyles();
    const topHashTagTitle = ["# 해시태그", "누적 게시물", "증가량", "증가율"];
    const recentHashTagTitle = ["# 해시태그", "최초 발견 날짜", "현재 포스팅 수", "분석 시작 시간"];


    if (fileName === "TopHashTag") {
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {topHashTagTitle.map(title => (
                                <React.Fragment key={title}>
                                    <StyledTableCell align="center">{title}</StyledTableCell>
                                </React.Fragment>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mapData.map(data => (
                            <StyledTableRow key={data.hashtag}>
                                <StyledTableCell  align="center" component="th" scope="row">
                                    <Link to={`/tagPost/${data.hashtag}`}>
                                        {`# ${data.hashtag}`}
                                    </Link>    
                                </StyledTableCell>
                                <StyledTableCell align="center">{data.post_cnt.toLocaleString()}</StyledTableCell>
                                <StyledTableCell align="center">{data.post_gap.toLocaleString()}</StyledTableCell>
                                <StyledTableCell align="center">{data.post_rate.toLocaleString()}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    } else if (fileName === "RecentHashTag") {
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            {recentHashTagTitle.map(title => (
                                <React.Fragment key={title}>
                                    <StyledTableCell align="center">{title}</StyledTableCell>
                                </React.Fragment>
                            ))}
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {mapData.map(data => (
                            <StyledTableRow key={data.hashtag}>
                                <StyledTableCell  align="center" component="th" scope="row">
                                    <Link to={`/tagPost/${data.hashtag}`}>
                                        {`# ${data.hashtag}`}
                                    </Link>   
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Timestamp>{ moment(`${data.add_date}`).format("YYYY.MM.DD") }</Timestamp>
                                </StyledTableCell>
                                <StyledTableCell align="center">{data.post_cnt.toLocaleString()}</StyledTableCell>
                                <StyledTableCell align="center">{data.check_start_time}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default MainMaterialTable;
