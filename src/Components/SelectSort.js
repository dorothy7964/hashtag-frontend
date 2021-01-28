import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
`;

const SelectSort = ({ 
    handleSortDate, 
    handleSortAction,
}) => (
    <Wrapper>
        <button onClick={() => handleSortDate(1)}>
            1일간 
        </button>
        <button onClick={() => handleSortDate(7)}>
            7일간 
        </button>
        <button onClick={() => handleSortDate(30)}>
            한 달간 
        </button>
        <button onClick={() => handleSortDate(60)}>
            두 달간 
        </button>
        <button onClick={() => handleSortAction("dayGap")}>
            증가량 
        </button>
        <button onClick={() => handleSortAction("dayRate")}>
            증가율
        </button>
    </Wrapper>
);

export default SelectSort;