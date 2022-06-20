import "./portfolioList.scss"
import React from "react";

export default function PortfolioList({title, active, setSelected, id, language}) {
    return (
        <li className ={active ? "portfolioList active" : "portfolioList"} onClick ={()=>setSelected(id)}>
            <ul>
            
            <li className="t">{title}</li>
            <li className="language">{language}</li>
            </ul>
        </li>
    )
}
