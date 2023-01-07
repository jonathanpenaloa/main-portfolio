import { Link } from "react-router-dom";

import React from "react";

import "./NavBar.css"


export default function NavBar() {
    return (
        <div className="header">
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}