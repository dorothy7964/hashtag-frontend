import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Photos, HeartFull, CommentFull } from "./Icons";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s linear;
    svg {
        fill: white;
    }
`;

const Container = styled(Link)`
    position: relative;
    user-select: none;
    background-image: url(${props => props.bg});
    background-size: cover;
    cursor: pointer;
    &:hover {
      ${Overlay} {
        opacity: 1;
      }
    }
`;

const PhotoIcon = styled.span`
    position: absolute;
    top: 10px;
    right: 5px;
`;

const Number = styled.div`
    color: white;
    display: flex;
    align-items: center;
    &:first-child {
        margin-right: 30px;
    }
`;

const NumberText = styled.span`
    margin-left: 10px;
    font-size: 10px;
`;

const SquarePost = ({ 
    hashTag,
    sortAction,
    url,
    likeCount,
    commentCount,
    file,
    filesCount,
    moviesCount,
 }) => {
    return (
        <Container to={`/userPost/${hashTag}/${sortAction}/${url}`} bg={file} >
            {filesCount.length === 1 ? "" : (
                <PhotoIcon>
                    <Photos />
                </PhotoIcon>
            )}
            <Overlay>
                <Number>
                    <HeartFull />
                    <NumberText>{likeCount}</NumberText>
                </Number>
                <Number>
                    <CommentFull  />
                    <NumberText>{commentCount}</NumberText>
                </Number>
            </Overlay>
        </Container>
    );
};

export default SquarePost;