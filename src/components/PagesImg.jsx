import React from "react";

import "./PagesImg.css"

export default function PagesImg ( {heading, text} ) {
    return (
        <div className="pages-img">
            <div className="heading">
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
    ) 
};