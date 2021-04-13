import React from 'react'
import ReactLogo from '../images/logo192.png'

const About = () => {
    return (
        <div>
            <div className="about">
                <h2>About</h2>
                <img src="" alt=""/>
                <p>I love to learn. Not only do I like learning about new material but learning about better ways to do things. I am always looking for the best solution to any problem. I spent a good portion of my working career as an Electrician. I also had worked in many different trades and industries before hand. Gaining useful experience with each job. The pandemic brought me new oppurtunities to figure a better path for myself. And that's how I'm here now. With some knowledge, a portfolio and a few projects under my belt.</p>
                <div>
                    <h4>Python:</h4>
                    <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="icon for python coding language blue and yellow cross"/>
                    <img src="https://iconape.com/wp-content/png_logo_vector/django.png" alt="icon for django framework green letters d and j"/>
                    <img src="https://pythonforundergradengineers.com/posts/zappa/images/flask_icon.png" alt="icon for flask framwork"/>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/sqlite-282687.png" alt="icon for sqlite"/>
                </div>
                <div>
                    <h4>C#:</h4>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="C# logo in purple hexagon"/>
                    <img src="https://miro.medium.com/max/1806/1*JFlpGhBuP2u-OT2ZZu9IiA.png" alt=".net core in purple circle"/>
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png" alt="blue and orange mysql with dolphin"/>
                </div>
                <div>
                    <h4>MERN:</h4>
                    <img src="https://camo.githubusercontent.com/85cf7e1a8b85221e81ba91cbce29c917b91a7390bb3ca06aa31cfd1eadd7fe60/68747470733a2f2f7777772e337269746563686e6f6c6f676965732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f31312f4d45524e2d537461636b2d547261696e696e672d696e2d50756e652d65313537353032323432373234342e706e67" alt="green, pink, blue and light green icon for mern stack"/>
                    <img src={ReactLogo} alt="blue atom react symbol"/>
                    <img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="express wording with js in yellow box"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="node with green pentagon as the o"/>
                    <img src="http://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/f4a5b21d-66fa-4885-92bf-c4e81c06d916/Image/e5eee315a17de0d7f56117077eb71fa9/mongo.png" alt="green and brown shield shape with leaf mongodb"/>
                </div>
                <div>
                    <h4>Other Technologies:</h4>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png" alt="orange html shield"/>
                    <img src="https://icon-library.com/images/css3-icon/css3-icon-28.jpg" alt="blue css shield"/>
                    <img src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="yellow javascript shield"/>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/jquery-10-1175155.png" alt="blue jquery icon"/>
                </div>
            </div>
            <div className="chevron-overlay"></div>
        </div>
    )
}

export default About