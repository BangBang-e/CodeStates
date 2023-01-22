import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: inline-block;
    display: flex;
    margin: 0;
    margin-bottom: 15px;
    padding: 6px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    img{
        width:100%;
        border-radius: 20px;
        align-items: center;
    }
    &.flip-vertical-fwd:hover {
	-webkit-animation: flip-vertical-fwd 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
            animation: flip-vertical-fwd 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
    }

@-webkit-keyframes flip-vertical-fwd {
    0% {
        -webkit-transform: translateZ(0) rotateY(0);
                transform: translateZ(0) rotateY(0);
    }
    100% {
        -webkit-transform: translateZ(160px) rotateY(180deg);
                transform: translateZ(160px) rotateY(180deg);
    }
    
    }
    @keyframes flip-vertical-fwd {
    0% {
        -webkit-transform: translateZ(0) rotateY(0);
                transform: translateZ(0) rotateY(0);
    }
    100% {
        -webkit-transform: translateZ(160px) rotateY(180deg);
                transform: translateZ(160px) rotateY(180deg);
    }
    }
`

const Cat = ({ catObj }) => {
    return (
        <Container src={catObj} className="flip-vertical-fwd">
            <img src={catObj.cat} alt={catObj.caption} />
        </Container>
    );
};

export default Cat;