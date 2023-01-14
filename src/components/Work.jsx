import React from "react";
import "./WorkCard.css"; 

import WorkCard from "./WorkCard";

import WorkCardData from "./WorkCardData";

export default function Work () {
    return (
        <div className="work-container">
            {/* <h1 className="project-heading">Projects</h1> */}
            <div className="project-container">
                {WorkCardData.map((val, idx) => {
                    return(
                        <WorkCard 
                        key={idx}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        code={val.code}
                        />
                    );
                })}
            </div>
        </div>
    );
}