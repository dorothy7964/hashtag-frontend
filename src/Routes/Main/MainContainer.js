import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { TREND_GAP, TREND_RATE } from "./MainQueries";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
    const { data, loading, refetch } = useQuery(TREND_GAP);
    const { data: dataRate, loading: loadingRate } = useQuery(TREND_RATE);
    const [sortDate, setSortDate] = useState(1);     // 1일간, 7일간, 한 달간, 두 달간
    const [sortAction, setSortAction] = useState("dayGap"); // 증가량(gap), 증가율(rate)
    
    // 날짜 정렬 변경
    const handleSortDate = (date) => {
        setSortDate(date);
    };

    // 증가량 / 증가율 변경
    const handleSortAction = (action) => {
        setSortAction(action);
    };

    useEffect(() => {
        refetch();
    }, []);
    
    return (
        <MainPresenter 
            data={data}
            loading={loading}
            dataRate={dataRate}
            loadingRate={loadingRate}
            sortDate={sortDate}
            sortAction={sortAction}
            handleSortDate={handleSortDate}
            handleSortAction={handleSortAction}
        />
    );
};

export default MainContainer;

    
