import React from "react";

import { Link } from "react-router-dom";

import aboutme1 from "../assets/aboutme1.jpg";
import meimg from "../assets/meimg.jpg";

import "./AboutContent.css";

export default function AboutContent () {
    return (
        <div className="about" >
            <div className="left">
                <p>Hello, I'm Jonathan Pena-Loa, a Seattle-based software engineer with a passion for making a positive impact and helping others. As a father and someone with roots in Mexico City 🇲🇽, I firmly believe in harnessing the power of technology to benefit society.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>


            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img className="img" src={meimg} alt="img" />
                    </div>
                    <div className="img-stack bottom">
                        <img className="img" src={aboutme1} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
}