import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import "./Footer.css";


export default function Footer () {

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>Seattle Washington</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/> 425-791-8171
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/><a href="mailto:jonpenaloa@gmail.com" target="_blank">jonpenaloa@gmail.com</a>
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>Lets Connect</h4>
                    <div className="social">
                    <a href="https://www.linkedin.com/in/jonathan-pena-loa/" target="_blank"><FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} /></a>
                    <a href="https://github.com/jonathanpenaloa" target="_blank"><FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/></a>
                    <a href="/resume.pdf" download target="_blank"><FaFileAlt size={30} style={{color: "#fff", marginRight: "1rem"}}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}