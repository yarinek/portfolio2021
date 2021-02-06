import React, { createContext, useState } from 'react'

import spotifyImage from './images/projects/spotifyclone.png'
import amazonImage from './images/projects/amazonclone.png'
import twitterImage from './images/projects/twitterclone.png'
import instagramImage from './images/projects/instagramclone.png'
import teslaImage from './images/projects/teslahomepage.png'

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([
        {
            title: 'Spotify Clone',
            description: `Spotify Clone is a clone of Spotify's front-end web interface. This app was created using 
        React`,
            technologies: "React, JavaScript, HTML, CSS, Github, Firebase",
            image: { spotifyImage },
            date_created: "January 2021",
            github: "https://github.com/yarinek/spotify-clone"
        },
        {
            title: 'Instagram Clone',
            description: `InstagramClone is a clone of Instagram. This app was created using 
        React. It features posting, comment and upload images`,
            technologies: "React, JavaScript, HTML, CSS, Github, Firebase",
            image: { instagramImage },
            date_created: "January 2021",
            github: "https://github.com/yarinek/Instagram-Clone"
        },
        {
            title: 'Tesla',
            description: `Tesla is a clone of Tesla's home page.`,
            technologies: "React, HTML, CSS",
            image: { teslaImage },
            date_created: "January 2021",
            github: "https://github.com/yarinek/Instagram-Clone"
        }
    ])
    return (
        <ProjectContext.Provider value={[projects, setProjects]}>
            {children}
        </ProjectContext.Provider>
    )
}
