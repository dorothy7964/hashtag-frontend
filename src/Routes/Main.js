import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import TopHashTag from "../Components/TopHashTag";
import RecentHashTag from "../Components/RecentHashTag";

const Wrapper = styled.div`
    min-height: 80vh;
    align-items: center;
`;

const ButtonBox = styled.div`
`;

const TableContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 50px;
    width: ${props => props.theme.tableWith};
`;

const Main = () => {
    // true : 인기 해시태그 / false : 최신 해시태그
    const [togglePage, setTogglePage] = useState(true);     

    const handleTogglePage = (bool) => {
        setTogglePage(bool)
    };

    return (
        <Wrapper>
            <Helmet>
                <title>HashTag</title>
            </Helmet>
            <ButtonBox>
                <button onClick={() => handleTogglePage(true)}>
                    인기 해시태그
                </button>
                <button onClick={() => handleTogglePage(false)}>
                    최신 해시태그
                </button>
            </ButtonBox>
            <TableContainer>
                {togglePage 
                    ?   <TopHashTag />
                    :   <RecentHashTag />
                }
            </TableContainer>
        </Wrapper>
    );
};

export default Main;