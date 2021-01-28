import React from "react";
import TableDataStyle from "./TableDataStyle";

const TableData = ({ data, dataRate, sortDate, sortAction }) => {
    if (sortAction === "dayGap") {
        const { gap } = data;

        if (sortDate === 1 ) {
            return (
                <TableDataStyle 
                    mapData={gap.day1_gap}
                />
            );
        } else if (sortDate === 7) {
            return (
                <TableDataStyle 
                    mapData={gap.day7_gap}
                />
            );
        } else if (sortDate === 30) {
            return (
                <TableDataStyle 
                    mapData={gap.day30_gap}
                />
            );
        } else if (sortDate === 60) {
            return (
                <TableDataStyle 
                    mapData={gap.day60_gap}
                />
            );
        }
    } else if (sortAction === "dayRate") {
        const { rate } = dataRate;

        if (sortDate === 1 ) {
            return (
                <TableDataStyle 
                    mapData={rate.day1_rate}
                />
            );
        } else if (sortDate === 7) {
            return (
                <TableDataStyle 
                    mapData={rate.day7_rate}
                />
            );
        } else if (sortDate === 30) {
            return (
                <TableDataStyle 
                    mapData={rate.day30_rate}
                />
            );
        } else if (sortDate === 60) {
            return (
                <TableDataStyle 
                    mapData={rate.day60_rate}
                />
            );
        }
    }
};

export default TableData;