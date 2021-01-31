import React from "react";
import Loader from "../Loader"
import MainMaterialTable from "../MainTable/MainMaterialTable";

const TopPresenter = ({ 
    data,
    loading,
}) => {
    if (loading === true){
        return (
            <Loader />
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