import PortfolioList from "../portfolioList/PortfolioList";
import "./projects.scss"
import {useEffect, useState} from 'react';
import React from "react";

import {fullPortfolio, enginePortfolio, csvPortfolio, webPortfolio, battlePortfolio, covidPortfolio} from "./../../data";
export default function Projects() {
    const [selected, setSelected] = useState("all");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "all",
            title: "All Projects",
            language: "",
        },
        {
            id: "engine",
            title: "Ascii motion simulation",
            language: "C++",
        },
        {
            id: "csv",
            title: "Comma Seperated values regular expression parsing",
            language: "Python",
        },
        {
            id: "website",
            title: "This website",
            language: "Javascript, HTML, CSS",

        },
       
        {
            id: "battleship",
            title: "Ascii battleship program",
            language: "C++",

        },
        {
            id: "covid",
            title: "Basic Worldwide Covid Tracker",
            language: "Javascript, HTML, CSS",
        },
        

    ];
    useEffect(()=>{
        switch(selected){
            case "all":
                setData(fullPortfolio);
                break;
            case "engine":
                setData(enginePortfolio);
                break;
            case "csv":
                setData(csvPortfolio);
                break;
            case "website":
                setData(webPortfolio);
                break;
            case "battleship":
                setData(battlePortfolio);
                break;
            case "covid":
                setData(covidPortfolio);
                break;
            default:
                setData(fullPortfolio);
        }
        

    },[selected])
    return (
        <div className="Project"id="projects">
            <div className="wrapper">
            <div className="title">
                <h1>My Projects
                </h1>


            </div>
            <ul>
                {list.map((item)=> (
                    <PortfolioList title ={item.title} active = {selected === item.id} setSelected = {setSelected} id={item.id} language={item.language}/>
                ))}
            </ul>
           

            <div className="container">

            {data.map((d) =>(
                <div className="itemandtext">
                    <h4>{d.basicInfo}</h4>

                    <div className="item">

                    <img src={d.img}></img>
                    <h3>{d.title}</h3>
                    
                </div>
                <div className="info">

                    <ul>
                    <li>
                    <a href={d.oneLink} target="_blank">{d.tryOne}</a>
                    </li>
                    <li>
                    <a href={d.twoLink} target="_blank">{d.tryTwo} </a>
                    </li>
                    </ul>
                    
                </div>
                <p>
                {d.addInfo}
                </p>
                </div>
                ))}
            </div>
                       

            
        </div>
        </div>
    )
}
