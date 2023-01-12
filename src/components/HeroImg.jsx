import "./HeroImg.css";
import React from "react";
import BackGroundImg from "../assets/background.jpg";
import { Link } from "react-router-dom";


export default function HereImg() {
    return (
        <div className="hero">
            <div className="mask">
                <img className="background-img" src={BackGroundImg} alt="BackGroundimg" />
            </div>
            <div className="content">
                <p>Jonathan Pena Loa</p>
                <h1>React Developer</h1>
                <div>
                    <Link to="/project" className="btn">Projects
                    </Link>
                    <Link to="/contant" className="btn btn-light">Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}