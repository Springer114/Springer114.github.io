import React, { useState, useEffect, useRef } from 'react'
import Isotope from 'isotope-layout'
import ReactLogo from '../images/logo192.png'

const Skills = () => {

    const isotope = useRef()
    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        isotope.current = new Isotope('.filter-container', {
                itemSelector: '.filter-item',
                layoutMode: 'fitRows',
            })
            return () => isotope.current.destroy()
    }, []);

    useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` });
    }, [filterKey]);

    const filterKeyChangeHandler = key => () => setFilterKey(key)

    return (
        <div>
            <div class="button-group filter-button-group">
                <button onClick={filterKeyChangeHandler('*')}>Show All</button>
                <button onClick={filterKeyChangeHandler('language')}>Languages</button>
                <button onClick={filterKeyChangeHandler('framework')}>Frameworks</button>
                <button onClick={filterKeyChangeHandler('library')}>Libraries</button>
                <button onClick={filterKeyChangeHandler('database')}>Databases</button>
                <button onClick={filterKeyChangeHandler('python')}>Python</button>
                <button onClick={filterKeyChangeHandler('c-sharp')}>C#</button>
                <button onClick={filterKeyChangeHandler('mern')}>MERN</button>
            </div>
            <div className="filter-container">
                <div className="filter-item python programming language">
                    <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="icon for python coding language blue and yellow snakes"/>
                </div>
                <div className="filter-item python framework">
                    <img src="https://iconape.com/wp-content/png_logo_vector/django.png" alt="icon for django framework green letters d and j"/>
                </div>
                <div className="filter-item python framework">
                    <img src="https://pythonforundergradengineers.com/posts/zappa/images/flask_icon.png" alt="icon for flask framwork"/>
                </div>
                <div className="filter-item python database">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/sqlite-282687.png" alt="icon for sqlite"/>
                </div>
                <div className="filter-item c-sharp programming language">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="C# logo in purple hexagon"/>
                </div>
                <div className="filter-item c-sharp framework">
                    <img src="https://miro.medium.com/max/1806/1*JFlpGhBuP2u-OT2ZZu9IiA.png" alt=".net core in purple circle"/>
                </div>
                <div className="filter-item c-sharp database">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png" alt="blue and orange mysql with dolphin"/>
                </div>
                <div className="filter-item mern javascript library">
                    <img src={ReactLogo} alt="blue atom react symbol"/>
                </div>
                <div className="filter-item mern framework">
                    <img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="express wording with js in yellow box"/>
                </div>
                <div className="filter-item mern javascript runtime environment">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="node with green pentagon as the o"/>
                </div>
                <div className="filter-item mern database">
                    <img src="http://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/f4a5b21d-66fa-4885-92bf-c4e81c06d916/Image/e5eee315a17de0d7f56117077eb71fa9/mongo.png" alt="green and brown shield shape with leaf mongodb"/>
                </div>
                <div className="filter-item markup language">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png" alt="orange html shield"/>
                </div>
                <div className="filter-item stylesheet language">
                    <img src="https://icon-library.com/images/css3-icon/css3-icon-28.jpg" alt="blue css shield"/>
                </div>
                <div className="filter-item javascript programming language">
                    <img src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="yellow javascript shield"/>
                </div>
                <div className="filter-item javascript library">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/jquery-10-1175155.png" alt="blue jquery icon"/>
                </div>
            </div>
        </div>
    )
}

export default Skills