import React from 'react'
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
                            <h3>Dossier</h3>
                            <p>Python - Django Rest Framework, JSON, HTML/CSS, Bootstrap, SQLite, jQuery, BCrypt</p>
                            <p>A site to get to know your family. Create a profile and start your family tree. Users will be able to add family members and find out information about them. From old recipes to photos and documents.</p>
                            <a href="https://github.com/Springer114/Dossier" target="_blank" rel='noreferrer noopener'><img className="project-github" src="https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/github-512.png" alt="github octocat"/></a>
                        </div>
                        <a href="/"><img className="img-link" src={gif2} alt=""/></a>
                    </div>
                    <div className="text-img">
                        <div className="text">
                            <h3>JQZ Events</h3>
                            <p>Technologies: C# - Asp.NET Core, HTML/CSS, Bootstrap, MySQL, jQuery, Microsoft Identity, Github, System.Net.Mail</p>
                            <p>A web calendar application allowing users to schedule and keep track of events. Features include, email reminders, event invitations, suggested best day and time when scheduling an event, map location of event and others that you would expect from a calendar.</p>
                            <p>Collaborators: <a href="https://johnmalbert.github.io/" target="_blank" rel='noreferrer noopener'>John Albert</a>, <a href="https://qlathe.github.io/#" target="_blank" rel='noreferrer noopener'>Quinn Lathe</a>, Zack Springer</p>
                            <a href="https://github.com/johnmalbert/EventPlanner" target="_blank" rel='noreferrer noopener'><img className="project-github" src="https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/github-512.png" alt="github octocat"/></a>
                        </div>
                        <a href="/"><img className="img-link" src={gif2} alt=""/></a>
                    </div>
                    <div className="text-img">
                        <div className="text">
                            <h3>JQZ Developer-Playground</h3>
                            <p>Technologies: MERN Full-stack - MongoDB, Express, React, Node.js, HTML/CSS, Bootstrap, MaterialU</p>
                            <p>A place for developers to show off their stuff. Read the latest tech news, view or share projects, create a portfolio, algorithm challenges, and some games.</p>
                            <p>Collaborators: <a href="https://johnmalbert.github.io/" target="_blank" rel='noreferrer noopener'>John Albert</a>, <a href="https://qlathe.github.io/#" target="_blank" rel='noreferrer noopener'>Quinn Lathe</a>, Zack Springer</p>
                            <a href="https://github.com/johnmalbert/JQZ-Developer-Playground" target="_blank" rel='noreferrer noopener'><img className="project-github" src="https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/github-512.png" alt="github octocat"/></a>
                        </div>
                        <a href="/"><img className="img-link" src={gif3} alt=""/></a>
                    </div>
                </div>
            </div>
            <div className="chevron-overlay"></div>
        </div>
    )
}

export default Projects