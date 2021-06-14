import React from 'react'
import img from '../images/dossier.png'
import img2 from '../images/under-construction.png'
import gif2 from '../images/event_planner.gif'
import gif3 from '../images/dev_playground.gif'

const Projects = () => {
    return (
        <div>
            <div className="projects">
                <h2>Projects</h2>
                <div className="alternate-sections">
                    <div className="text-img">
                        <div className="text">
                            <h3>JQZ Events</h3>
                            <p className="project-tech"><span>Technologies:</span> C# - Asp.NET Core, HTML/CSS, Bootstrap, MySQL, jQuery, Microsoft Identity, Github, System.Net.Mail</p>
                            <p>A web calendar application allowing users to schedule and keep track of events. Features include, email reminders, event invitations, suggested best day and time when scheduling an event, map location of event and others that you would expect from a calendar.</p>
                            <p><span>Collaborators:</span> <a href="https://johnmalbert.github.io/" target="_blank" rel='noreferrer noopener'>John Albert</a>, <a href="https://qlathe.github.io/#" target="_blank" rel='noreferrer noopener'>Quinn Lathe</a>, Zack Springer</p>
                            <a href="https://github.com/johnmalbert/EventPlanner" target="_blank" rel='noreferrer noopener'><img className="project-github" src="https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/github-512.png" alt="github octocat"/></a>
                        </div>
                        <a className="project-link" href="https://github.com/johnmalbert/EventPlanner" target="_blank" rel='noreferrer noopener'><img className="img-link" src={gif2} alt="gif of my JQZ Events project"/></a>
                    </div>
                    <div className="text-img">
                        <div className="text">
                            <h3>JQZ Developer-Playground</h3>
                            <p className="project-tech"><span>Technologies:</span> MERN Full-stack - MongoDB, Express, React, Node.js, HTML/CSS, Bootstrap, MaterialU</p>
                            <p>A place for developers to show off their stuff. Read the latest tech news, view or share projects, create a portfolio, try your knowledge at some algorithm challenges, or play some games.</p>
                            <p><span>Collaborators:</span> <a href="https://johnmalbert.github.io/" target="_blank" rel='noreferrer noopener'>John Albert</a>, <a href="https://qlathe.github.io/#" target="_blank" rel='noreferrer noopener'>Quinn Lathe</a>, Zack Springer</p>
                            <a href="https://github.com/johnmalbert/JQZ-Developer-Playground" target="_blank" rel='noreferrer noopener'><img className="project-github" src="https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/github-512.png" alt="github octocat"/></a>
                        </div>
                        <a className="project-link" href="https://github.com/johnmalbert/JQZ-Developer-Playground" target="_blank" rel='noreferrer noopener'><img className="img-link" src={gif3} alt="gif of my JQZ Developer Playground project"/></a>
                    </div>
                    <div className="text-img">
                        <div className="text">
                            <h3>Shepherd (In progress...)</h3>
                            <p className="project-tech"><span>Technologies:</span>: C# - Asp.NET Core, HTML/CSS, MySQL</p>
                            <p>A bug tracking web application.</p>
                            <a href="https://github.com/Springer114/Shepherd" target="_blank" rel='noreferrer noopener'><img className="project-github" src="https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/github-512.png" alt="github octocat"/></a>
                        </div>
                        <a className="project-link" href="https://github.com/Springer114/Shepherd" target="_blank" rel='noreferrer noopener'><img className="img-link" src={img2} alt="gif of my shepherd project"/></a>
                    </div>
                    <div className="text-img">
                        <div className="text">
                            <h3>Dossier (In progress...)</h3>
                            <p className="project-tech"><span>Technologies:</span>: Python - Django Rest Framework, JSON, HTML/CSS, Bootstrap, SQLite, jQuery, BCrypt</p>
                            <p>A social media site with a noir theme. Users can upload media files, add friends, chat with each other in comments and in real time, as well as other features one can expect from a social media site.</p>
                            <a href="https://github.com/Springer114/Dossier" target="_blank" rel='noreferrer noopener'><img className="project-github" src="https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/github-512.png" alt="github octocat"/></a>
                        </div>
                        <a className="project-link" href="https://github.com/Springer114/Dossier" target="_blank" rel='noreferrer noopener'><img className="img-link" src={img} alt="gif of my Dossier project"/></a>
                    </div>
                </div>
            </div>
            <div className="chevron-overlay"></div>
        </div>
    )
}

export default Projects