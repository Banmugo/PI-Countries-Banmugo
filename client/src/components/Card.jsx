import React from "react";
import './styles/Card.css'


export default function Card(props) {
    return (
        <div className="Card">
            <img className="img" src={props.imgFlag} alt="Flag" width='130' height='100' />
            <h4 className=".h4">{props.name}</h4>
            <h5 className=".h5">{props.continent}</h5>
        </div>
    )
};
