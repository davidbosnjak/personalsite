import "./topbar.scss"
import React from "react";


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar"}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="home">Home</a>
                </div>
                <div className="middle">
                    davidbosnjak2@gmail.com
                </div>
                <div className="right">
                    <div className="ham" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    )
}
