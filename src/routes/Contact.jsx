import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PagesImg from "../components/PagesImg";


export default function Contact() {
    return (
        <div>
            <NavBar/>
            <PagesImg heading="Contact" text="Lets talk"/>
            <Footer/>
        </div>
    );
}