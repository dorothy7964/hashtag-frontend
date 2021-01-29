import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
`;

const Header = styled.div`
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding:20px;
`;

const Text = styled.div`
`;

const LinkText =styled(Link)`
`;

const InfoTableDataStyle = ({ hashTag, mapData, togglePage }) => {
    if (togglePage === "top_remain") {
        return (
            <Wrapper>
                <Header>
                    <Text>아이디</Text>
                    <Text>유지 시간</Text>
                    <Text>누적 게시물</Text>
                    <Text>평균 좋아요 수</Text>
                    <Text>평균 댓글 수</Text>
                    <Text>평균 포스팅 시간</Text>
                </Header>
                {mapData.map(data => (
                    <Container key={data.url}>
                        <LinkText to={`/userPost/${hashTag}/${togglePage}/${data.url}`}>
                            <Text>{data.id_data.username}</Text>
                        </LinkText>
                        <Text>{`${data.id_data.remain}/sec`}</Text>
                        <Text>{data.id_data.post_cnt}</Text>
                        <Text>{data.id_data.average_like_cnt}</Text>
                        <Text>{data.id_data.average_comment_cnt}</Text>
                        <Text>{`${data.id_data.average_post_hour}/h`}</Text>
                    </Container>
                ))}
            </Wrapper>
        );
    } else {
        return (
            <Wrapper>
                <Header>
                    <Text>아이디</Text>
                    <Text>누적 게시물</Text>
                    <Text>평균 좋아요 수</Text>
                    <Text>평균 댓글 수</Text>
                    <Text>평균 포스팅 시간</Text>
                </Header>
                {mapData.map(data => (
                    <Container key={data.url}>
                        <LinkText to={`/userPost/${hashTag}/${togglePage}/${data.url}`}>
                            <Text>{data.id_data.username}</Text>
                        </LinkText>
                        <Text>{data.id_data.post_cnt}</Text>
                        <Text>{data.id_data.average_like_cnt}</Text>
                        <Text>{data.id_data.average_comment_cnt}</Text>
                        <Text>{`${data.id_data.average_post_hour}/h`}</Text>
                    </Container>
                ))}
            </Wrapper>
        );
        
    }
}

export default InfoTableDataStyle;