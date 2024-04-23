import React, {useState, useEffect} from "react"

import "../../styles/reset.css"
import "../../styles/global.scss"
import "./headerHome.scss"
import { Link } from "react-router-dom";

function HeaderHome() {
    const active = true;
  

  return (
    <div className="headerHome">
        <div className="sec1">
          <h1>Vitor Albuquerque</h1>
          <h2>I'm Fullstack Developer</h2>
        </div>

        <nav>
        <hr/>
          <div className="nav-info">
            <span className="material-symbols-outlined">navigate_next</span>

            <ul>
              <Link to={'/teste'}><a><li>Home</li></a></Link>
              <Link to={'/about'}><a href="#"><li>About</li></a></Link>
              <Link to={'/'}><a href="#"><li>Education</li></a></Link>
              <Link to={'/'}><a href="#"><li>Experience</li></a></Link>
              <Link to={'/'}><a href="#"><li>Projects</li></a></Link>
              <Link to={'/'}><a href="#"><li>Skills</li></a></Link>
              <Link to={'/'}><a href="#"><li>Resume</li></a></Link>
              <Link to={'/'}><a href="#"><li>Links</li></a></Link>
            </ul>
          </div> 
        </nav>
    </div>
  )
}

export default HeaderHome
