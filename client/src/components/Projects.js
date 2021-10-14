import React from 'react'
import event_planner from '../images/event_planner.png'
import devplayground from '../images/dev_playground.png'
import bag from '../images/bag.png'
import dkOctoCat from '../images/GitHub-Mark-Dark.png'

const Projects = () => {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="projects-content">
                <div className="project-link">
                    <a href="https://github.com/johnmalbert/EventPlanner" target="_blank" rel='noreferrer noopener'><img className="img-link" src={event_planner} alt="JQZ Events project"/></a>
                    <div className="project-info">
                        <h3>JQZ Events</h3>
                        <p><span>Technologies:</span> HTML/CSS, C#, ASP.NET Core, MySQL, jQuery, Entity Framework Core, System.Net.Mail</p>
                        <div className="project-github">
                            <a href="https://github.com/johnmalbert/EventPlanner" target="_blank" rel='noreferrer noopener'><img src={dkOctoCat} alt="github octocat"/></a>
                        </div>
                    </div>
                </div>
                <div className="project-link">
                    <a href="https://github.com/johnmalbert/JQZ-Developer-Playground" target="_blank" rel='noreferrer noopener'><img className="img-link" src={devplayground} alt="JQZ Developer Playground project"/></a>
                    <div className="project-info">
                        <h3>JQZ Developer-Playground</h3>
                        <p><span>Technologies:</span> HTML/CSS, MongoDB, Express, React, Node.js, JavaScript</p>
                        <div className="project-github">
                            <a href="https://github.com/johnmalbert/JQZ-Developer-Playground" target="_blank" rel='noreferrer noopener'><img src={dkOctoCat} alt="github octocat"/></a>
                        </div>
                    </div>
                </div>
                <div className="project-link">
                    <a href="https://github.com/QLathe/BAG" target="_blank" rel='noreferrer noopener'><img className="img-link" src={bag} alt="board artist group front page"/></a>
                    <div className="project-info">
                        <h3>Board Artist Group</h3>
                        <p><span>Technologies:</span> HTML/CSS, C#, ASP.NET Core, MySQL, jQuery, Entity Framework Core, JavaScript, Sass</p>
                        <div className="project-github">
                            <a href="https://github.com/QLathe/BAG" target="_blank" rel='noreferrer noopener'><img src={dkOctoCat} alt="github octocat"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects