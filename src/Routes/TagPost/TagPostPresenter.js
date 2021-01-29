import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RelatedHashTag from "../../Components/RelatedHashTag"
import TagPostSortType from "../../Components/TagPostTable/TagPostSortType"
import { Prev } from "../../Components/Icons";
import slack_Icon from "../../Icons/slack.png";


const LinkButton = styled(Link)`
    display: flex;
    flex-direction:row-reverse;
    padding: 15px;
    margin: 10px 50px;
    font-size: 150pt;
    color: black;
`;

const Wrapper = styled.div`
    min-height: 80vh;
    align-items: center;
    margin: 0 auto;
    width: ${props => props.theme.tableWith};
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Header = styled.div`
    margin: 10px;
    img{
        width: 50px;
    }
`;

const Title = styled.div`
    font-size: 38px;
    margin-bottom: 10px;
`;

const PostNum = styled.div`
    font-size: 17px;
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
    margin-bottom:50px;
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
                    <LinkButton to={`/`}>
                        <Prev />
                    </LinkButton>
                <Wrapper>
                    <HeaderContainer>
                        <Header>
                            <img alt="slack_Icon" src={slack_Icon} />
                        </Header>
                        <Header>
                            <Title>{info.hashtag}</Title>
                            <PostNum>{`게시물 ${info.post_cnt}`}</PostNum>
                        </Header>
                    </HeaderContainer>
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