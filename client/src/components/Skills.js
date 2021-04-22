import React, { useState, useEffect, useRef } from "react"
import Isotope from "isotope-layout"
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/js.png"
import jquery from "../images/jquery.webp"
import python from "../images/python.webp"
import django from "../images/django.png"
import flask from "../images/flask_icon.png"
import sqlite from "../images/sqlite.webp"
import csharp from "../images/csharp.png"
import dotnet from "../images/asp.netcore.png"
import mysqlLogo from "../images/mysql.webp"
import logo from "../logo.svg"
import express from "../images/ExpressJS.png"
import node from "../images/nodejs.png"
import mongo from "../images/mongo.png"

const Skills = () => {

    const isotope = useRef();
	const [filterKey, setFilterKey] = useState("*");

	useEffect(() => {
		isotope.current = new Isotope(".filter-container", {
			itemSelector: ".filter-item",
			layoutMode: "fitRows"
		});
		return () => isotope.current.destroy();
	}, []);

	useEffect(() => {
		filterKey === "*"
			? isotope.current.arrange({ filter: `*` })
			: isotope.current.arrange({ filter: `.${filterKey}` });
	}, [filterKey]);

	const filterKeyChangeHandler = (key) => () => setFilterKey(key);


	return (
		<div className="skills-container">
			<h3>Skills:</h3>
			<div className="button-group filter-button-group">
				<button onClick={filterKeyChangeHandler("*")}>Show All</button>
				<button onClick={filterKeyChangeHandler("language")}>Languages</button>
				<button onClick={filterKeyChangeHandler("framework")}>Frameworks</button>
				<button onClick={filterKeyChangeHandler("library")}>Libraries</button>
				<button onClick={filterKeyChangeHandler("database")}>Databases</button>
				<button onClick={filterKeyChangeHandler("python")}>Python</button>
				<button onClick={filterKeyChangeHandler("c-sharp")}>C#</button>
				<button onClick={filterKeyChangeHandler("mern")}>MERN</button>
			</div>
			<div className="filter-container">
				<div className="filter-item markup language">
					<img
						src={html}
						alt="orange html shield"
					/>
				</div>
				<div className="filter-item stylesheet language">
					<img
						src={css}
						alt="blue css shield"
					/>
				</div>
				<div className="filter-item javascript programming language">
					<img
						src={js}
						alt="yellow javascript shield"
					/>
				</div>
				<div className="filter-item javascript library">
					<img
						src={jquery}
						alt="blue jquery icon"
					/>
				</div>
				<div className="filter-item python programming language">
					<img
						src={python}
						alt="icon for python coding language blue and yellow snakes"
					/>
				</div>
				<div className="filter-item python framework">
					<img
						src={django}
						alt="icon for django framework green letters d and j"
					/>
				</div>
				<div className="filter-item python framework">
					<img
						src={flask}
						alt="icon for flask framwork"
					/>
				</div>
				<div className="filter-item python database">
					<img
						src={sqlite}
						alt="icon for sqlite"
					/>
				</div>
				<div className="filter-item c-sharp programming language">
					<img
						src={csharp}
						alt="C# logo in purple hexagon"
					/>
				</div>
				<div className="filter-item c-sharp framework">
					<img
						src={dotnet}
						alt=".net core in purple circle"
					/>
				</div>
				<div className="filter-item c-sharp database">
					<img
						src={mysqlLogo}
						alt="blue and orange mysql with dolphin"
					/>
				</div>
				<div className="filter-item mern javascript library">
					<img src={logo} alt="blue atom react symbol" />
				</div>
				<div className="filter-item mern framework">
					<img
						src={express}
						alt="express wording with js in yellow box"
					/>
				</div>
				<div className="filter-item mern javascript runtime environment">
					<img
						src={node}
						alt="node with green pentagon as the o"
					/>
				</div>
				<div className="filter-item mern database">
					<img
						src={mongo}
						alt="green and brown shield shape with leaf mongodb"
					/>
				</div>
			</div>
		</div>
	);
};

export default Skills;
