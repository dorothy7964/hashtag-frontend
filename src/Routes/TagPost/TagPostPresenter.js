import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RelatedHashTag from "../../Components/RelatedHashTag"
import TagPostSortType from "../../Components/TagPostTable/TagPostSortType"

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

const Header = styled.div`
`;

const Title = styled.div`
`;

const PostNum = styled.div`
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const ButtonBox = styled.div`
    &:first-child {
        margin-right: 10px;
    }
`;

const TableContainer = styled.div`
    margin: 0 auto;
    margin-bottom:50px;
    width: ${props => props.theme.tableWith};
`;

const TagPostPresenter = ({ 
    data, 
    loading,
    hashTag,
    togglePage, 
    sortAction, 
    handleTogglePage,
    handleSortAction,
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
            <React.Fragment>
                <CloseBox>
                    <LinkButton to={`/`}>
                        X
                    </LinkButton>
                </CloseBox>
                <Wrapper>
                    <Header>
                        <Title>{info.hashtag}</Title>
                        <PostNum>{`게시물 ${info.post_cnt}`}</PostNum>
                    </Header>
                    <RelatedHashTag 
                        data={data.selectHashTag}
                    />
                    <ButtonContainer>
                        <ButtonBox>
                            <button onClick={() => handleSortAction("lately_popular")}>
                                최신순
                            </button>
                            <button onClick={() => handleSortAction("top_remain")}>
                                유지순
                            </button>
                            <button onClick={() => handleSortAction("top_like")}>
                                좋아요순
                            </button>
                            <button onClick={() => handleSortAction("top_comment")}>
                                댓글순
                            </button>
                        </ButtonBox>
                        <ButtonBox>
                            <button onClick={() => handleTogglePage(true)}>
                                리스트형
                            </button>
                            <button onClick={() => handleTogglePage(false)}>
                                갤러리형
                            </button>
                        </ButtonBox>
                    </ButtonContainer>
                    <TableContainer>
                        {togglePage 
                            ?   <TagPostSortType 
                                    fileName="ListType"
                                    hashTag={hashTag}
                                    data={data.selectHashTag}
                                    sortAction={sortAction}
                                />
                            :   <TagPostSortType 
                                    fileName="GalleryType"
                                    hashTag={hashTag}
                                    data={data.selectHashTag}
                                    sortAction={sortAction}
                                />
                        }
                    </TableContainer>
                </Wrapper>
            </React.Fragment>
        );
    }
}

export default TagPostPresenter;