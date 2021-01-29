import React from "react";
import TagPostToggleType from "./TagPostToggleType";

const TagPostSortType = ({
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
            <TagPostToggleType
                fileName={fileName}
                hashTag={hashTag}
                mapData={lately_popular}
                sortAction={sortAction}
            />
        );
    } else if (sortAction === "top_remain") {
        return (
            <TagPostToggleType
                fileName={fileName}
                hashTag={hashTag}
                mapData={top_remain}
                sortAction={sortAction}
            />
        );
    } else if (sortAction === "top_like") {
        return (
            <TagPostToggleType
                fileName={fileName}
                hashTag={hashTag}
                mapData={top_like}
                sortAction={sortAction}
            />
        );
    } else if (sortAction === "top_comment") {
        return (
            <TagPostToggleType
                fileName={fileName}
                hashTag={hashTag}
                mapData={top_comment}
                sortAction={sortAction}
            />
        );
    }
};

export default TagPostSortType;