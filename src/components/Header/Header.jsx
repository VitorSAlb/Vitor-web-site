import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./header.scss"

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        setActiveLink(location.pathname)
    }, [location]);


    return(
        <header>
            <div className="section-logo">
                <h1>VA</h1>
            </div>
            <nav>
                <ul>
                    <Link to={'/Vitor-web-site'}><a><li className={activeLink === "/" ? "active" : ""}>Home</li></a></Link>
                    <Link to={'/Vitor-web-site/about'}><a href="#"><li className={activeLink === "/about" ? "active" : ""}>About</li></a></Link>
                    <Link to={'/Vitor-web-site/education'}><a href="#"><li className={activeLink === "/education" ? "active" : ""}>Education</li></a></Link>
                    <Link to={'/Vitor-web-site/experience'}><a href="#"><li className={activeLink === "/experience" ? "active" : ""}>Experience</li></a></Link>
                    <Link to={'/Vitor-web-site/projects'}><a href="#"><li className={activeLink === "/projects" ? "active" : ""}>Projects</li></a></Link>
                    <Link to={'/Vitor-web-site/skills'}><a href="#"><li className={activeLink === "/skills" ? "active" : ""}>Skills</li></a></Link>
                    <Link to={'/Vitor-web-site/resume'}><a href="#"><li className={activeLink === "/resume" ? "active" : ""}>Resume</li></a></Link>
                    <Link to={'/Vitor-web-site/links'}><a href="#"><li className={activeLink === "/links" ? "active" : ""}>Links</li></a></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;