import React from 'react'
import Skills from './Skills'
import Pdf from '../files/MyOfficialResume.pdf'
import resume from '../images/resume.png'

const About = () => {
    return (
        <div id="about">
            <div className="chevron">
                <div className="chevron-overlay"></div>
            </div>
            <div className="about">
                <h2>About</h2>
                <p>I am an inquisitive software engineer that has a labor intensive work history. I am always striving to find the best solutions to any task and was able to showcase that through my work as an Electrician. Now I am able to show that through the applications that I build. Given a chance to change course through the pandemic, I am proud to see the fruition of my hard work on an ever expanding platform.</p>
                <a href={Pdf} target="_blank" rel='noreferrer noopener'>
                    <img src={resume} alt="hands holding resume" />
                </a>
                <Skills />
            </div>
            <div className="chevron-overlay"></div>
        </div>
    )
}

export default About