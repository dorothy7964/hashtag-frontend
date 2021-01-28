import React, { useState } from "react";
import styled from "styled-components";
import TopHashTag from "../Components/TopHashTag";
import RecentHashTag from "../Components/RecentHashTag";

const Wrapper = styled.div`
`;

const Main = () => {
    // true : 인기 해시태그 / false : 최신 해시태그
    const [togglePage, setTogglePage] = useState(true);     

    const handleTogglePage = (bool) => {
        setTogglePage(bool)
    };

    return (
        <Wrapper>
            <button onClick={() => handleTogglePage(true)}>
                인기 해시태그
            </button>
            <button onClick={() => handleTogglePage(false)}>
                최신 해시태그
            </button>
            {togglePage 
                ?   <TopHashTag />
                :   <RecentHashTag />
            }
        </Wrapper>
    );
};

export default Main;