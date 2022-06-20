import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Information from "./components/information/Information";
import "./app.scss"
import {useState} from "react";
import React from "react";
import Menu from "./components/menu/Menu";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        
        <Intro></Intro>
        <Projects></Projects>
        <Information></Information>
      </div>
    </div>
  );
}

export default App;
