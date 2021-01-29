import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import { SELECT_HASHTAG } from "./TagPostQueries";
import TagPostPresenter from "./TagPostPresenter";

const TagPostContainer = ({ match: { params: { hashTag } }}) => {
    const { data, loading, refetch } = useQuery(SELECT_HASHTAG, {
        variables: { hashTag }
    });

    // 최근 인기 게시물 - lately_popular
    // 인기게시물에서 가장 오래 유지한 게시물- top_remain
    // 좋아요를 많이 받은 게시물 -top_like
    // 가장 댓글이 많이 달린 게시물 - top_comment
    const [togglePage, setTogglePage] = useState("lately_popular");     

    const handleTogglePage = (text) => {
        setTogglePage(text)
    };


    useEffect(() => {
        refetch();
    }, []);

    return (
        <TagPostPresenter 
            data={data}
            loading={loading}
            hashTag={hashTag}
            togglePage={togglePage}
            handleTogglePage={handleTogglePage}
        />
    );
};

export default TagPostContainer;