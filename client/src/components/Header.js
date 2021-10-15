import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {

    return (
        <div className="header">
            <nav>
                <div className="myName">
                    <h1>Zackary Springer</h1>
                </div>
                <div className="links">
                    <Link to="scroll-link" smooth={true}>About</Link>
                    <Link to="projects" smooth={true}>Projects</Link>
                    <Link to="skills" smooth={true}>Skills</Link>
                    <Link to="contact" smooth={true}>Contact</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header