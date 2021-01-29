import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
`;

const Container = styled.div`
`;

const LinkButton = styled(Link)`
    display: flex;
    flex-direction:row-reverse;
    padding: 15px;
    margin: 0 20px;
    font-size: 30pt;
    color: black;
`;

const TagPostGallery = ({
    hashTag,
    mapData,
    sortAction,
}) => {
    
    return (                                                                                                                  
        
        <Wrapper>
            {mapData.map(data => (
                <Container key={data.url}>
                    {data.url}
                </Container>
            ))}
        </Wrapper>
    );
};

export default TagPostGallery;

    
