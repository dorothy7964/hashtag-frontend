import React from "react";
import TagPostTableDataStyle from "./TagPostTableDataStyle";

const TagPostTableData = ({
    fileName,
    hashTag,
    sortAction,
    data: {
        lately_popular,
        top_remain,
        top_like,
        top_comment,
    }
}) => {
    if (sortAction === "lately_popular"){
        return (
            <TagPostTableDataStyle
                fileName={fileName}
                hashTag={hashTag}
                mapData={lately_popular}
                sortAction={sortAction}
            />
        );
    } else if (sortAction === "top_remain") {
        return (
            <TagPostTableDataStyle
                fileName={fileName}
                hashTag={hashTag}
                mapData={top_remain}
                sortAction={sortAction}
            />
        );
    } else if (sortAction === "top_like") {
        return (
            <TagPostTableDataStyle
                fileName={fileName}
                hashTag={hashTag}
                mapData={top_like}
                sortAction={sortAction}
            />
        );
    } else if (sortAction === "top_comment") {
        return (
            <TagPostTableDataStyle
                fileName={fileName}
                hashTag={hashTag}
                mapData={top_comment}
                sortAction={sortAction}
            />
        );
    }
};

export default TagPostTableData;