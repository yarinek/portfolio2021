import React from 'react'
import './Connect.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Connect() {
    return (
        <div className='connect'>
            <div className="connect__item">
                <div className="connect__itemIcon">
                    <h2>Github</h2>
                    <GitHubIcon />
                </div>
                <p>Check out the source code for some cool projects, including this portfolio!</p>
            </div>
            <div className="connect__item">
                <div className="connect__itemIcon">
                    <h2>Email</h2>
                    <EmailIcon />
                </div>
                <p>Interested in working together?
                Reach out and let's connect today.
                </p>
            </div>
            <div className="connect__item">
                <div className="connect__itemIcon">
                    <h2>LinkedIn</h2>
                    <LinkedInIcon />
                </div>
                <p>Reach out on LinkedIn.</p>
            </div>
        </div>
    )
}

export default Connect
