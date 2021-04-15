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
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nesciunt officia, delectus ipsum quaerat est atque sint. Ipsa totam ipsum est, placeat odio at.</p>
                            <a href="https://github.com/Springer114/Dossier" target="_blank" rel='noreferrer noopener'><img className="project-github" src="https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/github-512.png" alt="github octocat"/></a>
                        </div>
                        <a href="/"><img className="img-link" src={gif2} alt=""/></a>
                    </div>
                    <div className="text-img">
                        <div className="text">
                            <h3>JQZ Events</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nesciunt officia, delectus ipsum quaerat est atque sint. Ipsa totam ipsum est, placeat odio at.</p>
                            <a href="https://github.com/johnmalbert/EventPlanner" target="_blank" rel='noreferrer noopener'><img className="project-github" src="https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/github-512.png" alt="github octocat"/></a>
                        </div>
                        <a href="/"><img className="img-link" src={gif2} alt=""/></a>
                    </div>
                    <div className="text-img">
                        <div className="text">
                            <h3>JQZ Developer-Playground</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nesciunt officia, delectus ipsum quaerat est atque sint. Ipsa totam ipsum est, placeat odio at.</p>
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