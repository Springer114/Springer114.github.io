import React from 'react'
import githubImg from '../images/github-11-xxl.png'

const Footer = () => {
    return (
        <div>
            <div className="chevron2">
                <div className="chevron-overlay2"></div>
            </div>
            <div className="footer-container">
                <a href="https://www.linkedin.com/in/zackary-springer-427a96202" target="_blank" rel='noreferrer noopener'><img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="LinkedIn"/></a>
                <a href="https://github.com/Springer114" target="_blank" rel='noreferrer noopener'><img src={githubImg} alt="GitHub"/></a>
                <a href="https://teamtreehouse.com/zackspringer" target="_blank" rel='noreferrer noopener'><img src="https://symbols.getvecta.com/stencil_98/50_treehouse-icon.c220738d10.png" alt="Treehouse"/></a>
                <a href="mailto:springerzack04@yahoo.com"><img src="https://www.pngkit.com/png/full/222-2226274_white-email-icon-png-download-mail-symbol-png.png" alt="Email"/></a>
                <p>&copy;{(new Date().getFullYear())} Zackary Springer</p>
            </div>
        </div>
    )
}

export default Footer