import React from 'react'
import Skills from './Skills'

const About = () => {
    return (
        <div>
            <div className="about">
                <h2>About</h2>
                <img src="" alt=""/>
                <p>I love to learn. Not only do I like learning about new material but learning about better ways to do things. I am always looking for the best solution to any problem. I spent a good portion of my working career as an Electrician. I also had worked in many different trades and industries before hand. Gaining useful experience with each job. The pandemic brought me new oppurtunities to figure a better path for myself. And that's how I'm here now. With some knowledge, a portfolio and a few projects under my belt.</p>
                <Skills />
            </div>
            <div className="chevron-overlay"></div>
        </div>
    )
}

export default About