import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PagesImg from "../components/PagesImg";
import Form from "../components/Form";


export default function Contact() {
    return (
        <div>
            <NavBar/>
            <PagesImg heading="Contact" text="Lets talk"/>
            <Form />
            <Footer/>
        </div>
    );
}