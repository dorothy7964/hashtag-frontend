import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PostBox from "./PostBox"
import { Prev } from "./Icons";
import UserHeader from "./UserHeader";

const LinkButton = styled(Link)`
    display: flex;
    flex-direction:row-reverse;
    padding: 15px;
    margin: 10px 50px;
    font-size: 150pt;
    color: black;
`;

const UserBox = styled.div`
`;

const PostContainer = styled.div`
`;

const UserInfoBox = ({ 
    hashTag,
    userData
 }) => (
    <React.Fragment>
        <LinkButton to={`/tagPost/${hashTag}`}>
            <Prev />
        </LinkButton>
        <UserBox>
            <UserHeader 
                userId={userData.username}
                userName={userData.full_name}
                post_cnt={userData.post_cnt}
                followerCnt={userData.follower_cnt}
                followCnt={userData.follow_cnt}
                likeCnt={userData.average_like_cnt}
                commentCnt={userData.average_comment_cnt}
                postHour={userData.average_post_hour}
            />
        </UserBox>
        <PostContainer>
            {userData.post_list.map(post => (
                <React.Fragment key={post.url}>
                    <PostBox 
                        post={post} 
                        userId={userData.username}
                    />
                </React.Fragment>
            ))}
        </PostContainer>
    </React.Fragment>
);


export default UserInfoBox;