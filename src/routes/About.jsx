import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PagesImg from "../components/PagesImg";
import AboutContent from "../components/AboutContent";

export default function About() {
    return (
        <div>
            <NavBar/>
            <PagesImg heading="About me" />
            <AboutContent />
            <Footer/>
        </div>
    );
}