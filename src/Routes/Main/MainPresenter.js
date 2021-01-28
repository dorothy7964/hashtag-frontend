import React from "react";
import styled from "styled-components";
import SelectSort from "../../Components/SelectSort";
import TableData from "../../Components/Table/TableData";

const Wrapper = styled.div`
`;

const MainPresenter = ({ 
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
                    sortDate={sortDate}
                    sortAction={sortAction}
                />
            </Wrapper>
        );
    }
};

export default MainPresenter;