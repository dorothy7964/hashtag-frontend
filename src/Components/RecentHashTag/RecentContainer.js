import React, { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { TREND_LIST } from "./RecentQueries";
import RecentPresenter from "./RecentPresenter";

const RecentContainer = () => {
    const { data, loading, refetch } = useQuery(TREND_LIST);
   
    useEffect(() => {
        refetch();
    }, []);
    
    return (
        <RecentPresenter 
            data={data}
            loading={loading}
        />
    );
};

export default RecentContainer;

    
