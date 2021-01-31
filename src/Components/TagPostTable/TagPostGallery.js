import React from "react";
import styled from "styled-components";
import SquarePost from "../SquarePost";

const Posts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 330px);
    grid-template-rows: 330px;
    grid-auto-rows: 330px;
    grid-gap: 28px;;
`;

const TagPostGallery = ({
    hashTag,
    mapData,
    sortAction,
}) =>  (                                                                                                                  
    <Posts>
        {mapData.map(post => (
            <SquarePost 
                key={post.url}
                hashTag={hashTag}
                sortAction={sortAction}
                url={post.url}
                likeCount={post.like_cnt}
                commentCount={post.comment_cnt}
                file={"https://cdn.pixabay.com/photo/2021/01/02/23/55/dog-5883275__340.jpg"}
                filesCount={post.pic_cnt}
                moviesCount={post.mov_cnt}
            />
        ))}
    </Posts>
);

export default TagPostGallery;

    
