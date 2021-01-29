import React from "react";
import styled from "styled-components";
import RelatedHashTag from "../../Components/RelatedHashTag"
import InfoTableData from "../../Components/HashtagTable/InfoTableData"
import PostBox from "../../Components/PostBox"

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

const UserPostPresenter = ({ 
    data, 
    loading,
    togglePage,
    url
 }) => {
    if (loading === true){
        return (
            <React.Fragment>
                <div>로딩중</div>
            </React.Fragment>
        );
    } else if (!loading && data && data.selectHashTag){
        const { selectHashTag: {
            lately_popular,
            top_remain,
            top_like,
            top_comment,
        }} = data;


        
        if (togglePage === "lately_popular") {
            const filterData = lately_popular.filter(data => data.url === url);
            const userData = filterData[0].id_data;
            
            return(
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
            );
        }
    }
}

export default UserPostPresenter;