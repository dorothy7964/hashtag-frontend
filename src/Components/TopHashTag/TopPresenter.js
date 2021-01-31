import React from "react";
import styled from "styled-components";
import Loader from "../Loader"
import SelectSort from "../SelectSort";
import MainSortType from "../MainTable/MainSortType";

const Wrapper = styled.div`
`;

const TopPresenter = ({ 
    data,
    loading,
    dataRate,
    loadingRate,
    sortDate,
    sortAction,
    handleSortDate,
    handleSortAction,
}) => {
    if (loading === true || loadingRate === true){
        return (
            <Loader />
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