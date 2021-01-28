import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
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

const TableDataStyle = ({ mapData }) => (
    <Wrapper>
        {mapData.map(data => (
            <Container key={data.hashtag}>
                <LinkText to={`/tagPost/${data.hashtag}`}>
                    {data.hashtag}
                </LinkText>
                <Text>{data.post_cnt}</Text>
                <Text>{data.post_gap}</Text>
                <Text>{data.post_rate}</Text>
            </Container>
        ))}
    </Wrapper>
);

export default TableDataStyle;