import React from "react";
import styled from "styled-components";
import SelectSort from "../SelectSort";
import TableData from "../HashtagTable/TableData";

const Wrapper = styled.div`
`;

const TopPresenter = ({ 
    data,
    loading,
    dataRate,
    loadingRate,
    dataRecent,
    loadingRecent,
    sortDate,
    sortAction,
    togglePage,
    handleSortDate,
    handleSortAction,
    handleTogglePage
}) => {
    if (loading === true || loadingRate === true){
        return (
            <React.Fragment>
                <div>로딩중</div>
            </React.Fragment>
        );
    } else if (
        !loading && data && data.gap &&
        !loadingRate && dataRate && dataRate.rate
    ){
        return (
            <Wrapper>
                <SelectSort
                    handleSortDate={handleSortDate}
                    handleSortAction={handleSortAction}
                />
                <TableData 
                    data={data}
                    dataRate={dataRate}
                    fileName="TopHashTag"
                    sortDate={sortDate}
                    sortAction={sortAction}
                />
            </Wrapper>
        );
    }
};

export default TopPresenter;