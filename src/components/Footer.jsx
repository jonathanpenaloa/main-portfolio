import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer () {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>123 House Info</p>
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
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/> mye@gmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>ABOUT THE COMPANY</h4>
                    <p>This is some story that I need to add after adding the component to the app</p>
                    <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}