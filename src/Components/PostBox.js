import React from "react";
import styled from "styled-components";
import moment from "moment";
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

const Buttons = styled.div`
    ${Button} {
        &:first-child {
            margin-right: 10px;
        }
    }
    margin-bottom: 10px;
`;

const DetailButton = styled(Button)`
    display: block;
    margin-top: 10px;
    color: ${props => props.theme.darkGreyColor};
`;

const Caption = styled.div`
    margin: 10px 0px;
`;

const Comments = styled.ul`
    word-wrap: break-word;
    margin-top: 10px;
    line-height: 17px;
    height: 52px
    overflow: hidden;
`;

const Comment = styled.li`
    margin-bottom: 7px;
    span {
        margin-right: 5px;
    }
`;

const TimeForm = styled.div`
    display: inline-block;
    font-weight: 400;
    opacity: 0.5;
    font-size: 12px;
    padding-left: 5px;
`;

const Timestamp = styled.span`
    font-weight: 400;
    text-transform: uppercase;
    opacity: 0.5;
    display: block;
    font-size: 12px;
    margin: 10px 0px;
    padding-bottom: 10px;
    border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;


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
            <Caption>
                <FatText text={post.userName} />
            </Caption>
            <Timestamp>{ moment(post.post_time).format("YYYY.MM.DD HH:MM") }</Timestamp>
        </Meta>
    </Wrapper>
);

export default PostBox;