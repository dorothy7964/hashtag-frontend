import React from "react";
import styled from "styled-components";
import SquarePost from "../SquarePost";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const TagPostGallery = ({
    hashTag,
    mapData,
    sortAction,
}) =>  (                                                                                                                  
    <Container>
        {mapData.map(post => (
            <SquarePost 
                key={post.url}
                hashTag={hashTag}
                sortAction={sortAction}
                url={post.url}
                likeCount={post.like_cnt}
                commentCount={post.comment_cnt}
                file={"https://cdn.pixabay.com/photo/2015/02/18/10/48/social-media-640543__340.png"}
                filesCount={post.pic_cnt}
                moviesCount={post.mov_cnt}
            />
        ))}
    </Container>
);

export default TagPostGallery;

    
