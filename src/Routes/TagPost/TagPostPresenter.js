import React from "react";
import styled from "styled-components";
import RelatedHashTag from "../../Components/RelatedHashTag"
import InfoTableData from "../../Components/HashtagTable/InfoTableData"

const Wrapper = styled.div`
`;

const Header = styled.div`
`;

const Title = styled.div`
`;

const PostNum = styled.div`
`;

const ButtonBox = styled.div`
`;

const TagPostPresenter = ({ 
    data, 
    loading,
    hashTag,
    togglePage, 
    handleTogglePage,
 }) => {
    if (loading === true){
        return (
            <React.Fragment>
                <div>로딩중</div>
            </React.Fragment>
        );
    } else if (!loading && data && data.selectHashTag){
        const { selectHashTag: {
            info
        }} = data;
        
       return (
        <Wrapper>
            <Header>
                <Title>{info.hashtag}</Title>
                <PostNum>{`게시물 ${info.post_cnt}`}</PostNum>
            </Header>
            <RelatedHashTag 
                data={data.selectHashTag}
            />
            <ButtonBox>
                <button onClick={() => handleTogglePage("lately_popular")}>
                    최신순
                </button>
                <button onClick={() => handleTogglePage("top_remain")}>
                    유지순
                </button>
                <button onClick={() => handleTogglePage("top_like")}>
                    좋아요순
                </button>
                <button onClick={() => handleTogglePage("top_comment")}>
                    댓글순
                </button>
            </ButtonBox>
            <InfoTableData
                hashTag={hashTag}
                data={data.selectHashTag}
                togglePage={togglePage}
            />
        </Wrapper>
        );
    }
}

export default TagPostPresenter;