import React from "react";

import { Link } from "react-router-dom";

import aboutme1 from "../assets/aboutme1.jpg";

import "./AboutContent.css";

export default function AboutContent () {
    return (
        <div className="about" >
            <div className="left">
                <h1>Who Am I?</h1>
                <p>imformation about me for something</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>


            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img className="img" src={aboutme1} alt="img" />
                    </div>
                    <div className="img-stack bottom">
                        <img className="img" src={aboutme1} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
}