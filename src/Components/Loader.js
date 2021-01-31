import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import slack from "../Icons/slack.png";

const Animation = keyframes`
    0% { opacity: 0 }
    50% { opacity: 1 }
    100% { opacity: 0 }
`;

const Wrapper = styled.div`
    margin-top: 150px;
`;

const Container = styled.div`
    animation: ${Animation} 1s linear infinite;
    width: 100%;
    text-align: center;
    img {
        width: 50px;
    }
`;

const LoaderSmall = styled.div`
    animation: ${Animation} 1s linear infinite;
    width: 100%;
    text-align: center;
    img {
        width: 20px;
    }
`;

const Loader = ({ type = "default" }) => {
    const [action] = useState(type);

    if (action === "default"){
        return (
            <Wrapper>
                <Container>
                    <img alt="loading" src={slack} />
                </Container>
            </Wrapper>
        );
    } else if (action === "small") {
        return (
            <LoaderSmall>
                <img alt="loading" src={slack} />
            </LoaderSmall>
        );
    }
};

export default Loader;
