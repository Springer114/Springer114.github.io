import React from "react"
import reactLogo from '../images/react-logo.png'
import htmlLogo from '../images/html-logo.png'
import cssLogo from '../images/css-logo.png'
import javascriptLogo from '../images/javascript-logo.png'
import csharpLogo from '../images/csharp-logo.png'
import pythonLogo from '../images/python-logo.png'
import nodejsLogo from '../images/nodejs-logo.png'
import aspdotnetcoreLogo from '../images/aspdotnetcore-logo.png'
import bootstrapLogo from '../images/bootstrap-logo.png'
import jqueryLogo from '../images/jquery-logo.png'
import sassLogo from '../images/sass-logo.png'
import mysqlLogo from '../images/mysql-logo.png'
import sqliteLogo from '../images/sqlite-logo.png'
import mongodbLogo from '../images/mongodb-logo.png'
import mongooseLogo from '../images/mongoose-logo.png'
import gitLogo from '../images/git-logo.png'
import githubLogo from '../images/GitHub-Mark-Dark.png'
import vscodeLogo from '../images/vscode-logo.png'

const Skills = () => {

	return (
		<div className="skills">
			<h2>Skills</h2>
			<div className="skill-list">
				<h4>Here's what I know how to use</h4>
				<div className="skill-cards">
					<div className="">
						<a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={htmlLogo} alt="html logo" />
								<p>HTML</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={cssLogo} alt="css logo" />
								<p>CSS</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={javascriptLogo} alt="javascript logo" />
								<p>JavaScript</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={csharpLogo} alt="c sharp logo" />
								<p>C#</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://docs.python.org/3/" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={pythonLogo} alt="python logo" />
								<p>Python</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={reactLogo} alt="react logo" />
								<p>React</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://nodejs.org/en/docs/" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={nodejsLogo} alt="node.js logo" />
								<p>Node.js</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={aspdotnetcoreLogo} alt="asp.net core logo" />
								<p>ASP.NET Core</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={bootstrapLogo} alt="bootstrap logo" />
								<p>Bootstrap</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://api.jquery.com/" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={jqueryLogo} alt="jquery logo" />
								<p>JQuery</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://sass-lang.com/documentation" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={sassLogo} alt="sass logo" />
								<p>Sass</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://dev.mysql.com/doc/" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={mysqlLogo} alt="mysql logo" />
								<p>MySQL</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://www.sqlite.org/docs.html" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={sqliteLogo} alt="sqlite logo" />
								<p>SQLite</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://docs.mongodb.com/" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={mongodbLogo} alt="mongodb logo" />
								<p>MongoDB</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://mongoosejs.com/docs/" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={mongooseLogo} alt="mongoose logo" />
								<p>Mongoose</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://git-scm.com/doc" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={gitLogo} alt="git logo" />
								<p>Git</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://docs.github.com/en" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={githubLogo} alt="github logo" />
								<p>GitHub</p>
							</button>
						</a>
					</div>
					<div className="">
						<a href="https://code.visualstudio.com/docs" target="_blank" rel='noreferrer noopener'>
							<button>
								<img src={vscodeLogo} alt="vs code logo" />
								<p>VS Code</p>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;