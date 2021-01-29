import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Conatiner = styled.div`
    display: flex;
    flex-direction: column;
    padding:20px;
`;

const Text = styled.div`
`;

const RelatedHashTag = ({
    data: { 
        top_relation,  
        top_autocomplete
    }
}) =>  (
    <Wrapper>
        {top_relation.map(data => (
            <Conatiner key={data.hashtag}>  
                <Text>{`#${data.hashtag}`}</Text>
                <Text>{`(${data.post_cnt})`} </Text>
            </Conatiner>
        ))}
        {top_autocomplete.map(data => (
            <Conatiner key={data.hashtag}>  
                <Text>{`#${data.hashtag}`}</Text>
                <Text>{`(${data.post_cnt})`} </Text>
            </Conatiner>
        ))}
    </Wrapper>
);

export default RelatedHashTag;