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

const TableDataStyle = ({ mapData, fileName }) => {
    if (fileName === "TopHashTag") {
        return (
            <Wrapper>
                <Header>
                    <Text>해시태그</Text>
                    <Text>누적 게시물</Text>
                    <Text>증가량</Text>
                    <Text>증가율</Text>
                </Header>
                {mapData.map(data => (
                    <Container key={data.hashtag}>
                        <LinkText to={`/tagPost/${data.hashtag}`}>
                            <Text>{data.hashtag}</Text>
                        </LinkText>
                        <Text>{data.post_cnt}</Text>
                        <Text>{data.post_gap}</Text>
                        <Text>{data.post_rate}</Text>
                    </Container>
                ))}
            </Wrapper>
        );
    } else if (fileName === "RecentHashTag") {
        return (
            <Wrapper>
                <Header>
                    <Text>해시태그</Text>
                    <Text>최초 발견 날짜</Text>
                    <Text>현재 포스팅 수</Text>
                    <Text>분석 시작 시간</Text>
                </Header>
                {mapData.map(data => (
                    <Container key={data.hashtag}>
                        <LinkText to={`/tagPost/${data.hashtag}`}>
                            <Text>{data.hashtag}</Text>
                        </LinkText>
                        <Text>{data.add_date}</Text>
                        <Text>{data.post_cnt}</Text>
                        <Text>{data.check_start_time}</Text>
                    </Container>
                ))}
            </Wrapper>
        );
    } 
}

export default TableDataStyle;