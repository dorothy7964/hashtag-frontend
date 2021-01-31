import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";

const Wrapper = styled.div`
    ${props => props.theme.whiteBox};
    width: 100%;
    max-width: 600px;
    user-select: none;
    margin: 0 auto;
    margin-bottom: 25px;
    a {
        color: inherit;
    }
`;

const Header = styled.header`
    padding: 15px;
    display: flex;
    align-items: center;
`;

const UserColumn = styled.div`
    margin-left: 10px;
`;

const Box = styled.div``;

const Files = styled.div`
    position: relative;
    padding-bottom: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-shrink: 0;
`;

// opacity: ${props => (props.showing? 1 : 0)};
const File = styled.div`
    max-width: 100%;
    width: 100%;
    height: 600px;
    position: absolute;
    top: 0;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s linear;
`;

const Meta = styled.div`
    padding: 15px;
`;

const Button = styled.span`
    cursor: pointer;
`;

const DetailButton = styled(Button)`
    display: block;
    margin-top: 10px;
    color: ${props => props.theme.darkGreyColor};
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    margin:10px;
    margin-left: 0;
    span {
        &:first-child {
            margin-right: 10px;
        } 
    }   
`;

const Text = styled.div``;

const PostBox = ({
    post,
    userId,
}) => (
    <Wrapper>
        <Header>
        <Avatar size="sm" url="https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649__340.jpg" />
            <UserColumn>
                <FatText text={userId} />
            </UserColumn>
        </Header>
        <Files>
            <File 
                src="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg"
            />
        </Files>
        <Meta>
            <FatText text={post.like_cnt === 1 ? "1 like" : `${post.like_cnt} likes`} />
            <DetailButton>
                <Box>
                    {post.comment_cnt > 0 ? `댓글 ${post.comment_cnt}개 모두 보기` : ""}
                </Box>
            </DetailButton>
            <Content>
                <FatText text={userId} />
                <Text>글이 들어갑니다.</Text>
            </Content>
        </Meta>
    </Wrapper>
);

export default PostBox;