import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <div>
            <div>
                <img src={props.imgFlag} alt="Flag" />
            </div>
            <div>
                <h3>{props.name}</h3>
                <h4>{props.continent}</h4>
            </div>
            <div>
                <Link to={`/detail/${props.id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    )
};
