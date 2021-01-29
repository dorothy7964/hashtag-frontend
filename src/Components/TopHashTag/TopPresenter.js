import React from "react";
import styled from "styled-components";
import SelectSort from "../SelectSort";
import MainSortType from "../MainTable/MainSortType";

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
                <MainSortType 
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