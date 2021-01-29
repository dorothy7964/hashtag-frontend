import React, { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { SELECT_HASHTAG } from "./UserPostQueries";
import UserPostPresenter from "./UserPostPresenter";

const UserPostContainer = ({ match: { params: { hashTag, togglePage, url }} }) => {
    const { data, loading, refetch } = useQuery(SELECT_HASHTAG, {
        variables: { hashTag }
    });

    useEffect(() => {
        refetch();
    }, []);

    return (
        <UserPostPresenter 
            data={data}
            loading={loading}
            togglePage={togglePage}
            url={url}
        />
    );
};

export default UserPostContainer;