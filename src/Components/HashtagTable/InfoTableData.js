import React from "react";
import InfoTableDataStyle from "./InfoTableDataStyle";

const InfoTableData = ({
    hashTag,
    togglePage,
    data: {
        lately_popular,
        top_remain,
        top_like,
        top_comment,
    }
}) => {
    if (togglePage === "lately_popular"){
        return (
            <InfoTableDataStyle 
                hashTag={hashTag}
                mapData={lately_popular}
                togglePage={togglePage}
            />
        );
    } else if (togglePage === "top_remain") {
        return (
            <InfoTableDataStyle 
                hashTag={hashTag}
                mapData={top_remain}
                togglePage={togglePage}
            />
        );
    } else if (togglePage === "top_like") {
        return (
            <InfoTableDataStyle 
                hashTag={hashTag}
                mapData={top_like}
                togglePage={togglePage}
            />
        );
    } else if (togglePage === "top_comment") {
        return (
            <InfoTableDataStyle 
                hashTag={hashTag}
                mapData={top_comment}
                togglePage={togglePage}
            />
        );
    }
};

export default InfoTableData;