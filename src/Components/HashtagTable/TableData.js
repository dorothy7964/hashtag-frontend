import React from "react";
import TableDataStyle from "./TableDataStyle";

const TableData = ({ data, dataRate, fileName, sortDate, sortAction }) => {
    if (sortAction === "dayGap") {
        const { gap } = data;

        if (sortDate === 1 ) {
            return (
                <TableDataStyle 
                    mapData={gap.day1_gap}
                    fileName={fileName}
                />
            );
        } else if (sortDate === 7) {
            return (
                <TableDataStyle 
                    mapData={gap.day7_gap}
                    fileName={fileName}
                />
            );
        } else if (sortDate === 30) {
            return (
                <TableDataStyle 
                    mapData={gap.day30_gap}
                    fileName={fileName}
                />
            );
        } else if (sortDate === 60) {
            return (
                <TableDataStyle 
                    mapData={gap.day60_gap}
                    fileName={fileName}
                />
            );
        }
    } else if (sortAction === "dayRate") {
        const { rate } = dataRate;

        if (sortDate === 1 ) {
            return (
                <TableDataStyle 
                    mapData={rate.day1_rate}
                    fileName={fileName}
                />
            );
        } else if (sortDate === 7) {
            return (
                <TableDataStyle 
                    mapData={rate.day7_rate}
                    fileName={fileName}
                />
            );
        } else if (sortDate === 30) {
            return (
                <TableDataStyle 
                    mapData={rate.day30_rate}
                    fileName={fileName}
                />
            );
        } else if (sortDate === 60) {
            return (
                <TableDataStyle 
                    mapData={rate.day60_rate}
                    fileName={fileName}
                />
            );
        }
    }
};

export default TableData;