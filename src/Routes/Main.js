import React, { useState } from "react";
import styled from "styled-components";
import TopHashTag from "../Components/TopHashTag";
import RecentHashTag from "../Components/RecentHashTag";

const Wrapper = styled.div`
`;

const ButtonBox = styled.div`
`;

const TableContainer = styled.div`
    margin: 0 auto;
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