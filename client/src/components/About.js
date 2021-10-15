import React from 'react'
import Pdf from '../files/MyOfficialResume.pdf'
import resume from '../images/resume.png'
import myPhoto from '../images/Zack-Ray-NoBG.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-quote">
                <blockquote cite="https://www.forbes.com/sites/erikaandersen/2013/05/31/21-quotes-from-henry-ford-on-business-leadership-and-life/#:~:text=Quality%20means%20doing%20it%20right,for%20you%20%E2%80%93%20that%20is%20success.">"Quality means doing it right when no one is looking. To do more for the world than the world does for you - that is success."</blockquote>
                <figcaption className="scroll-link">- Henry Ford</figcaption>
            </div>
            <h2>About</h2>
            <div className="about-me">
                <div className="my-photo">
                    <img src={myPhoto} alt="my german shepherd Rayleigh and I" />
                </div>
                <div>
                    <div className="about-description">
                        <p>I am a full stack software engineer with a desire for building, fixing, and improving. Previously, I worked as an electrician which helped fulfill my desire for building. My wife works as a developer and after experiencing that second hand, I knew I had found the career that I was looking for. It is an opportunity to merge both my enthusiasm for building as well as my excitement for technology. My goal in the tech industry is to find a niche where I can utilize all of these skills. I am motivated by the end user’s experience and quality is my driving force.</p>
                    </div>
                    <div className="resume">
                        <a href={Pdf} target="_blank" rel='noreferrer noopener'>
                            <button>
                                <img src={resume} alt="hands holding resume" />
                                <p>Resume</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About