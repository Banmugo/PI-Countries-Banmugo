import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <div>
            <Link to={`/detail/${props.id}`}>
                <img src={props.imgFlag} alt="Flag" width='150' height='150' />
                <h3>{props.name}</h3>
                <h4>{props.ontinent}</h4>
                {/* <div>
                    <button>Details</button>
            </div> */}
            </Link>
        </div>
    )
};
