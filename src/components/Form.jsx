import React from "react";

import "./Form.css";

export default function Form() {
    return (
        <div className="form" >
            <form action="">
                <label>Your Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Messege</label>
                <textarea row="6" placeholder="Type your message here" />
                <button className="btn">Submit</button>
            </form>
        </div>
    );
}