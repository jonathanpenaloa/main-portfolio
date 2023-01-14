import React from "react";
import NavBar from "../components/NavBar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import AboutContent from "../components/AboutContent";

export default function Home() {
    return (
        <>
            <NavBar/>
            <HeroImg />
            <AboutContent />
            <Work />
            <Footer />
        </>
    );
}