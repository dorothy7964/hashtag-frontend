import React from "react";
import MainMaterialTable from "./MainMaterialTable";

const MainSortType = ({ data, dataRate, fileName, sortDate, sortAction }) => {
    if (sortAction === "dayGap") {
        const { gap } = data;

        if (sortDate === 1 ) {
            return (
                <MainMaterialTable 
                    mapData={gap.day1_gap}
                    fileName={fileName}
                />
            );
        } else if (sortDate === 7) {
            return (
                <MainMaterialTable 
                    mapData={gap.day7_gap}
                    fileName={fileName}
                />
            );
        } else if (sortDate === 30) {
            return (
                <MainMaterialTable 
                    mapData={gap.day30_gap}
                    fileName={fileName}
                />
            );
        } else if (sortDate === 60) {
            return (
                <MainMaterialTable 
                    mapData={gap.day60_gap}
                    fileName={fileName}
                />
            );
        }
    } else if (sortAction === "dayRate") {
        const { rate } = dataRate;

        if (sortDate === 1 ) {
            return (
                <MainMaterialTable 
                    mapData={rate.day1_rate}
                    fileName={fileName}
                />
            );
        } else if (sortDate === 7) {
            return (
                <MainMaterialTable 
                    mapData={rate.day7_rate}
                    fileName={fileName}
                />
            );
        } else if (sortDate === 30) {
            return (
                <MainMaterialTable 
                    mapData={rate.day30_rate}
                    fileName={fileName}
                />
            );
        } else if (sortDate === 60) {
            return (
                <MainMaterialTable 
                    mapData={rate.day60_rate}
                    fileName={fileName}
                />
            );
        }
    }
};

export default MainSortType;