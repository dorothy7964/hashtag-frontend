import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";

const Header = styled.header`
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 100px;
    justify-content: center;
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

const FullName = styled(FatText)`
    font-size: 16px;
`;

const Text = styled.div`
    font-size: 27px;
`;


const NumBox = styled.div`
    align-items: center;
    span {
        font-size: 35px;
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
                    <FatText text={String(post_cnt)} /> 게시물
                </Count>
                <Count>
                    <FatText text={String(followerCnt)} /> 팔로워
                </Count>
                <Count>
                    <FatText text={String(followCnt)} /> 팔로우
                </Count>
            </Counts>
            <CountContainer>
                <CountBox>
                    <Text>평균 좋아요 수</Text>
                    <NumBox>
                        <FatText text={String(likeCnt)} />
                    </NumBox>
                </CountBox>
                <CountBox>
                    <Text>평균 댓글 수</Text>
                    <NumBox>
                        <FatText text={String(commentCnt)} />
                    </NumBox>
                </CountBox>
                <CountBox>
                    <Text>평균 포스팅 시간</Text>
                    <NumBox>
                        <FatText text={String(`${postHour}/h`)} />
                    </NumBox>
                </CountBox>
            </CountContainer>
        </HeaderColumn>
    </Header>
 );

export default UserHeader;