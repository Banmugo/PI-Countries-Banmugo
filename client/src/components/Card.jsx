import React from "react";


export default function Card(props) {    
    return (
        <div>
            <img src={props.imgFlag} alt="Flag" width='150' height='150' />
            <h3>{props.name}</h3>
            <h4>{props.ontinent}</h4>
            {/* <div>
                    <button>Details</button>
            </div> */}
        </div>
    )
};
