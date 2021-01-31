import React from "react";
import Loader from "../../Components/Loader"
import UserInfoBox from "../../Components/UserInfoBox"

const UserPostPresenter = ({ 
    data, 
    loading,
    hashTag,
    togglePage,
    url,
 }) => {
    if (loading === true){
        return (
            <Loader />
        );
    } else if (!loading && data && data.selectHashTag){
        const { selectHashTag: {
            lately_popular,
            top_remain,
            top_like,
            top_comment,
        }} = data;  

        if (togglePage === "lately_popular") {
            const filterData = lately_popular.filter(data => data.url === url);
            const userData = filterData[0].id_data;
            return (
                <UserInfoBox 
                    hashTag={hashTag}
                    userData={userData}
                />
            );
        } else if (togglePage === "top_remain") {
            const filterData = top_remain.filter(data => data.url === url);
            const userData = filterData[0].id_data;

            return (
                <UserInfoBox 
                    hashTag={hashTag}
                    userData={userData}
                />
            );
        } else if (togglePage === "top_like") {
            const filterData = top_like.filter(data => data.url === url);
            const userData = filterData[0].id_data;
            return (
                <UserInfoBox 
                    hashTag={hashTag}
                    userData={userData}
                />
            );
        } else if (togglePage === "top_comment") {
            const filterData = top_comment.filter(data => data.url === url);
            const userData = filterData[0].id_data;
            return (
                <UserInfoBox 
                    hashTag={hashTag}
                    userData={userData}
                />
            );
        }
    }
}

export default UserPostPresenter;