import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {

    return (
        <div>
            <div className="header">
                <h1>Hi! I'm Zack Springer.</h1>
                <p>Full Stack Software Engineer</p>
                <Link to="about" smooth={true}>
                    <div className="mini-link">
                        <div className="mini-chevron"></div>
                        <div className="mini-chevron"></div>
                        <div className="mini-chevron"></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header