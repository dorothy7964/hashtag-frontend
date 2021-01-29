import React from "react";
import styled from "styled-components";
import Slick from "react-slick";
import "../CSS/Arrow.css"

const Wrapper = styled.div`
    margin-top: 50px;
`;

const Slider = styled(Slick)`
    padding-top: 30px;
    padding-bottom: 20px;
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
    margin-top: 15px;
    margin-bottom: 50px;
    margin-left: 30px;
    align-items: center;
    button {
        margin-top: 48px;
    }
`;

const SliderContainer = styled.div`
    div {
        &:first-child {
            font-weight: bold;
        }
    }
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

const Text = styled.div``;

const Arrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
};

const RelatedHashTag = ({
    data: { 
        top_relation,  
        top_autocomplete
    }
}) =>  {
    const settings = {
        arrows: false,       // 좌우 화살 버튼 노출 여부 ( false 시 안보임 )
        infinite: false,    // 양방향 무한 모션
        speed: 500,         // 모션 스피드
        slidesToShow: 5,    // 한 화면에 보여줄 아이템수
        slidesToScroll: 5,  // 한번에 슬라이드 시킬 아이템 개수
        prevArrow: <Arrow className="slick-prev" />, // Custom Arrows - 이전 버튼
        nextArrow: <Arrow className="slick-next" />  // Custom Arrows - 다음 버튼 
    };

    return (
        <Wrapper>
            <Slider className="Slider" {...settings}>
                {top_relation.map(data => (
                    <React.Fragment key={data.hashtag}>  
                        <SliderContainer>
                            <Text>#</Text>
                            <Text>{data.hashtag}&nbsp;</Text>
                            <Text>{data.post_cnt} </Text>
                        </SliderContainer>
                    </React.Fragment>
                ))}
                {top_autocomplete.map(data => (
                    <React.Fragment key={data.hashtag}> 
                        <SliderContainer> 
                            <Text>{data.hashtag}&nbsp;</Text>
                            <Text>{data.post_cnt} </Text>
                        </SliderContainer>
                    </React.Fragment>
                ))}
            </Slider>
        </Wrapper>
    );
}

export default RelatedHashTag;


