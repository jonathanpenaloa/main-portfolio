import React from "react";
import "./WorkCard.css"; 
import { NavLink } from "react-router-dom";

export default function WorkCard ({imgsrc, title, text, view, code}) {
    
    return (
        <div className="project-card">
            <img src={imgsrc} alt="something" />
            <h2 className="project-title">{title}</h2>
            <div className="pro-details">
                <p>{text}</p>
                <div className="pro-btns">
                    <NavLink to={view} className="btn">View</NavLink>
                    <NavLink to={code} className="btn">Code</NavLink>
                </div>
            </div>
        </div>
    );
}