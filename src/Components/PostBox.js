import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 20px;
`;

const Text = styled.div`
`;

const BoldText = styled.div`
`;

const GreyText = styled.div`
`;

const ImgBox = styled.div`
`;

const PostInfoContainer = styled.div`
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContentBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
`;

const TimeBox = styled.div`
`;


const PostBox = ({ post, userId }) => (
    <Wrapper>
        <Text>{userId}</Text>
        <ImgBox>
            이미지가 들어갑니다
        </ImgBox>
        <PostInfoContainer>
            <BoldText>{`좋아요 ${post.like_cnt}개`}</BoldText>
            <RowContainer>
                <ContentBox>
                    <BoldText>{userId}</BoldText>
                    <Text>{post.contents}</Text>
                </ContentBox>
                <TimeBox>
                    <GreyText>{post.post_time}</GreyText>
                </TimeBox>
            </RowContainer>
        </PostInfoContainer>
    </Wrapper>
);


export default PostBox;