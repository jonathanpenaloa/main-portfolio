import React from "react";
import "./WorkCard.css"; 
// import { NavLink } from "react-router-dom";

export default function WorkCard ({imgsrc, title, text, 
    view, 
    code}) {
    
    return (
        <div className="project-card">
            <img src={imgsrc} alt="something" />
            <h2 className="project-title">{title}</h2>
            <div className="pro-details">
                <p>{text}</p>
                <div className="pro-btns">
                    <a href={view} rel="noopener" target="_blank" className="btn">View</a>
                    {/* <a to={view} rel="noopener" target="_blank" className="btn">View</a> */}
                    <a href={code} rel="noopener" target="_blank" className="btn">Code</a>
                </div>
            </div>
        </div>
    );
}