import React from 'react';
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TimeIapse from "../TimeIapse";

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

const TagPostMaterialTable = ({ 
    fileame,
    hashTag,
    mapData,
    sortAction,
}) => {
    const classes = useStyles();
    let listType = ["유저 ID", "누적 게시물", "평균 좋아요 수", "평균 댓글 수", "평균 포스팅 시간"];
    let listType_remain = ["유저 ID", "유지 시간/ 초", "누적 게시물", "평균 좋아요 수", "평균 댓글 수", "평균 포스팅 시간"];

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    {sortAction === "top_remain" 
                        ?   <TableRow>
                                {listType_remain.map(title => (
                                    <React.Fragment key={title}>
                                        <StyledTableCell align="center">{title}</StyledTableCell>
                                    </React.Fragment>
                                ))}
                            </TableRow>
                        :   <TableRow>
                                {listType.map(title => (
                                    <React.Fragment key={title}>
                                        <StyledTableCell align="center">{title}</StyledTableCell>
                                    </React.Fragment>
                                ))}
                            </TableRow>
                    }
                </TableHead>
                <TableBody>
                    {mapData.map(data => (
                        <StyledTableRow key={data.url}>
                            <StyledTableCell  align="center" component="th" scope="row">
                                <Link to={`/userPost/${hashTag}/${sortAction}/${data.url}`}>
                                    {data.id_data.username}
                                </Link>    
                            </StyledTableCell>
                            {sortAction === "top_remain" && 
                            <StyledTableCell align="center">
                                <TimeIapse createAt={data.remain} />
                            </StyledTableCell>}
                            <StyledTableCell align="center">{data.id_data.post_cnt}</StyledTableCell>
                            <StyledTableCell align="center">{data.id_data.average_like_cnt}</StyledTableCell>
                            <StyledTableCell align="center">{data.id_data.average_comment_cnt}</StyledTableCell>
                            <StyledTableCell align="center">{`${data.id_data.average_post_hour} / h`}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TagPostMaterialTable;
