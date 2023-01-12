import React from "react";
import "./WorkCard.css"; 
import project3 from "../assets/project3.jpg";
import { NavLink } from "react-router-dom";

export default function WorkCard ({props}) {

    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="something" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to={props.code} className="btn">Code</NavLink>
                </div>
            </div>
        </div>
    );
}