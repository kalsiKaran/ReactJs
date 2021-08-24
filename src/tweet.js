import React from "react";
import './index.css'

function Tweet(props){
    return(
    <div className="tweet">
        <h3>{props.name}</h3>
        <p>{props.message}</p>
    </div>
    )
}

export default Tweet;