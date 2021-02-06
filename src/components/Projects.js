import React, { useContext } from 'react'
import { ProjectContext } from '../ProjectContext'
import './Projects.css'
import teslaImage from '../images/projects/teslahomepage.png'

function Projects() {
    const [projects, setProjects] = useContext(ProjectContext)
    return (
        <div className='projects'>
            <div className="projects__select">
                <h3>Mission Select</h3>
                {projects.map((project) => (
                    <div className="projects__item">
                        {project.title}
                    </div>
                ))}
            </div>
            <div className="projects__mission">
                <div className="projects__missionUp">
                    <h2>{'Instagram Clone'}</h2>
                </div>

                <div className="projects__missionDown">

                    <div className="projects__missionLeft">
                        <div className="projects__missionPhoto">
                            <img src={teslaImage} alt='' />
                        </div>
                        <button>Source Code</button>
                    </div>

                    <div className="projects__missionRight">
                        <h4>Mission Brief: </h4>
                        <p>Flixer is a clone of Netflix's front-end web interface. This app was created using React functional components, axios for async/await requests, and deployed on Google Firebase. It features movie data pulls from The Movie Database (TMDB) for current trends and movie posters. It also integrates a movie trailer from YouTube if one is successfully found</p>
                        <h4>Technologies: </h4>
                        <p>React, Axios, JavaScript, HTML, CSS, Github, Firebase</p>
                        <h4>Created: </h4>
                        <p>January 2021</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
