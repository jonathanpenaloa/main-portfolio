
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PagesImg from "../components/PagesImg";

import Work from "../components/Work";

export default function Projects() {
    

    return (
        <div>
            <NavBar/>
            <PagesImg heading="PROJECTS." text="Some text" />
            <Work />
            <Footer/>
        </div>
    );
}