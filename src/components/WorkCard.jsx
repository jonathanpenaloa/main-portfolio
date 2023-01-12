import React from "react";
import "./WorkCard.css"; 
import project3 from "../assets/project3.jpg";
import { NavLink } from "react-router-dom";

export default function WorkCard () {
    return (
        <div className="project-card">
            <img src={project3} alt="something" />
            <h2 className="project-title">Project Title</h2>
            <div className="pro-details">
                <p>Simple text</p>
                <div className="pro-btns">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
    );
}