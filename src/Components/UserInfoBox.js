import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PostBox from "./PostBox"

const CloseBox = styled.div`
`;

const LinkButton = styled(Link)`
    display: flex;
    flex-direction:row-reverse;
    padding: 15px;
    margin: 0 20px;
    font-size: 30pt;
    color: black;
`;

const Wrapper = styled.div`
`;

const UserBox = styled.div`
`;

const UserIdText = styled.div`
`;

const UserNameText = styled.div`
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const FigureBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const PostNumBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const IconBox = styled.div`
`;

const Text = styled.div`
`;

const BoldText = styled.div`
`;

const PostContainer = styled.div`
`;

const UserInfoBox = ({ 
    hashTag,
    userData
 }) => (
    <React.Fragment>
        <CloseBox>
            <LinkButton to={`/tagPost/${hashTag}`}>
                X
            </LinkButton>
        </CloseBox>
        <Wrapper>
            <UserBox>
                <UserIdText>{userData.username}</UserIdText>
                <UserNameText>{userData.full_name}</UserNameText>
                <RowContainer>
                    <PostNumBox>
                        <Text>게시물</Text>
                        <BoldText>{userData.post_cnt}</BoldText>
                        <Text>팔로워</Text>
                        <BoldText>{userData.follower_cnt}</BoldText>
                        <Text>팔로우</Text>
                        <BoldText>{userData.follow_cnt}</BoldText>
                    </PostNumBox>
                    <IconContainer>
                        <IconBox>{userData.is_business ? "O" : "X"}</IconBox>
                        <IconBox>{userData.is_verified ? "O" : "X"}</IconBox>
                    </IconContainer>
                </RowContainer>
                <RowContainer>
                    <FigureBox>
                        <Text>평균 좋아요 수</Text>
                        <BoldText>{userData.average_like_cnt}</BoldText>
                    </FigureBox>
                    <FigureBox>
                        <Text>평균 댓글 수</Text>
                        <BoldText>{userData.average_comment_cnt}</BoldText>
                    </FigureBox>
                    <FigureBox>
                        <Text>평균 포스팅 시간</Text>
                        <BoldText>{`${userData.average_post_hour}/h`}</BoldText>
                    </FigureBox>
                </RowContainer>
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
        </Wrapper>
    </React.Fragment>
);


export default UserInfoBox;