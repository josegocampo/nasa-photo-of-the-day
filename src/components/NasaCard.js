import React from "react";
import styled from "styled-components";

const Phototittle = styled.h1`
color: red;
width: 30vw;
margin: 0 auto;
font-weight: 750;
border-radius: 5px;
background: lightgrey;
margin-top: 20px;
`
const Picture = styled.img`
height: 20%;
width: 20%;
`

const Paragraph = styled.p`
width: 66%;
margin: 0 auto;
`

const NasaCard = props => {
    return (
        <div className = "nasa-list">
            <div className ="blabla">
                <Phototittle>{props.title}</Phototittle>
                <h2>by: {props.author}</h2>
                <h3>on: {props.date}</h3>
                <Picture src = {props.picture}  alt = "bla" />
                <Paragraph>{props.explanation}</Paragraph>
        
            </div>



        </div>
    );
};

export default NasaCard;