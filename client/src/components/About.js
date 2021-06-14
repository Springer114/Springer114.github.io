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
                <p>I am a full stack software engineer with a desire for building, fixing, and improving. From early on I knew my passion was centered around how things worked. Previously, I worked as an electrician which helped fulfill my desire for building. My wife works as a developer and after experiencing that second hand, I knew I had found the career that I was looking for. It is an opportunity to merge both my enthusiasm for building as well as my excitement for technology. Through all of my jobs I have brought a team player attitude and have a great understanding that two heads are better than one. This cooperative mindset has helped me collaborate with other developers to build great products in only a week’s time. My goal in the tech industry is to find a niche where I can utilize all of these skills. I am motivated by the end user’s experience and quality is my driving force.</p>
                <a href={Pdf} target="_blank" rel='noreferrer noopener'>
                    <button>
                        <img src={resume} alt="hands holding resume" />
                        <p>Resume</p>
                    </button>
                </a>
                <Skills />
            </div>
            <div className="chevron-overlay"></div>
        </div>
    )
}

export default About