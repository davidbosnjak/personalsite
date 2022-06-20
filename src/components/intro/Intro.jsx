import "./intro.scss"
import React from "react";

import Projects from "./../projects/Projects";
export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
            <div className="title">
            <h2>Hi, I'm David.</h2>
            </div>
            <div className="description">


            I'm a highschool student interested in programming and computer science. Here is my website showcasing my experience, projects and information about myself.
            </div>
            <div className="bottom">
                <a href="#projects" id="projects">Learn more</a>
            </div>
            </div>
            <div className="right">             
                
            </div>
            
        </div>
    )
}
