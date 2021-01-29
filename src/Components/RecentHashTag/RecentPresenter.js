import React from "react";
import MainMaterialTable from "../MainTable/MainMaterialTable";

const TopPresenter = ({ 
    data,
    loading,
}) => {
    if (loading === true){
        return (
            <React.Fragment>
                <div>로딩중</div>
            </React.Fragment>
        );
    } else if (!loading && data && data.trendList){
        const { trendList: { recent_list } } = data;

        return (
            <MainMaterialTable 
                mapData={recent_list}
                fileName="RecentHashTag"
            />
        );
    }
};

export default TopPresenter;