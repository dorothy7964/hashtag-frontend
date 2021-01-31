import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import TimeIapse from "./TimeIapse";

const Header = styled.header`
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 60px;
    justify-content: center;
    background-color: #eee;
    padding: 30px;
`;

const HeaderColumn = styled.div`
    position:relative;
`;

const UserNameRow = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserName = styled.span`
    font-size: 26px;
    display: block;
    margin-right: 10px;
`;

const Counts = styled.ul`
    display: flex;
    margin: 15px 0px;
`;

const Count = styled.li`
    font-size: 16px;
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

const CountContainer= styled.div`
    display: flex;
    flex-direction: row;
`;

const CountBox= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    &:not(:last-child) {
        margin-right: 30px;
    }
`;

const CountTitle= styled.div`
    font-size: 25px;
    margin-bottom: 10px;
`;

const FullName = styled(FatText)`
    font-size: 16px;
`;

const NumBox = styled.div`
    align-items: center;
    span {
        font-size: 32px;
    }
`;


const UserHeader = ({ 
    userId,
    userName,
    post_cnt,
    followerCnt,
    followCnt,
    likeCnt,
    commentCnt,
    postHour,
 }) => (
    <Header>
        <HeaderColumn>
            <Avatar size="lg" url="https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649__340.jpg" />
        </HeaderColumn>
        <HeaderColumn style={{  marginLeft: 30}}>
            <UserNameRow>
                <UserName>{userId}</UserName>
                <FullName text={userName} />
            </UserNameRow>
            <Counts>
                <Count>
                    게시물 <FatText text={post_cnt.toLocaleString()} />
                </Count>
                <Count>
                    팔로워 <FatText text={followerCnt.toLocaleString()} />
                </Count>
                <Count>
                    팔로우 <FatText text={followCnt.toLocaleString()} />
                </Count>
            </Counts>
            <CountContainer>
                <CountBox>
                    <CountTitle>평균 좋아요 수</CountTitle>
                    <NumBox>
                        <FatText text={likeCnt.toLocaleString()} />
                    </NumBox>
                </CountBox>
                <CountBox>
                    <CountTitle>평균 댓글 수</CountTitle>
                    <NumBox>
                        <FatText text={commentCnt.toLocaleString()} />
                    </NumBox>
                </CountBox>
                <CountBox>
                    <CountTitle>평균 포스팅 시간</CountTitle>
                    <NumBox>
                        <FatText 
                            text={
                                <TimeIapse secTime={0} hourTime={postHour} />
                            } 
                        />
                    </NumBox>
                </CountBox>
            </CountContainer>
        </HeaderColumn>
    </Header>
 );

export default UserHeader;