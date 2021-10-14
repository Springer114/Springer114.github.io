import React from 'react'
import githubImg from '../images/GitHub-Mark-Light.png'
import linkedin from '../images/linkedin.png'
import treehouse from '../images/treehouse.png'
import mail from '../images/mail.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/zackary-springer-427a96202" target="_blank" rel='noreferrer noopener'><img src={linkedin} alt="LinkedIn"/></a>
                <a href="https://github.com/Springer114" target="_blank" rel='noreferrer noopener'><img src={githubImg} alt="GitHub"/></a>
                <a href="https://teamtreehouse.com/zackspringer" target="_blank" rel='noreferrer noopener'><img src={treehouse} alt="Treehouse"/></a>
                <a href="mailto:springerzack04@yahoo.com"><img src={mail} alt="Email"/></a>
            </div>
            <p>&copy;{(new Date().getFullYear())} Zackary Springer</p>
        </div>
    )
}

export default Footer