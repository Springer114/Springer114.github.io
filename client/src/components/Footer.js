import React from 'react'

const Footer = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/zackary-springer-427a96202"><img src="" alt="LinkedIn"/></a>
                </li>
                <li>
                    <a href="https://github.com/Springer114"><img src="" alt="GitHub"/></a>
                </li>
                <li>
                    <a href="https://teamtreehouse.com/zackspringer"><img src="" alt="Treehouse"/></a>
                </li>
                <li>
                    <a href="mailto:springerzack04@yahoo.com"><img src="" alt="Email"/></a>
                </li>
                <p>&copy;{(new Date().getFullYear())} Zackary Springer</p>
            </ul>
        </div>
    )
}

export default Footer