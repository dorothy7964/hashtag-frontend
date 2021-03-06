import React from "react";
import TagPostMaterialTable from "./TagPostMaterialTable";
import TagPostGallery from "./TagPostGallery";

const TagPostToggleType = ({ 
    fileName,
    hashTag, 
    mapData, 
    sortAction,
}) => {
    if (fileName === "ListType") {
        return (
            <TagPostMaterialTable
                hashTag={hashTag}
                mapData={mapData}
                sortAction={sortAction}
            />
        );
    } else if (fileName === "GalleryType") {
        return (
            <TagPostGallery
                hashTag={hashTag}
                mapData={mapData}
                sortAction={sortAction}
                />
        );
    }
}

export default TagPostToggleType;