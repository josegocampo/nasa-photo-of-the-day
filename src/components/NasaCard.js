import React from "react";

const NasaCard = props => {
    return (
        <div className = "nasa-list">
            <div className ="blabla">
                <h2>Author: {props.tittle}</h2>
                <img src = {props.picture}  alt = "bla" />
                <p>Explanation: {props.explanation}</p>
                <p>date: {props.date}</p>
            </div>



        </div>
    );
};

export default NasaCard;