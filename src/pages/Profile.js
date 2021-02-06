import React from 'react'
import './Profile.css'
import avatar from '../images/avatar.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CurrentPage from '../components/CurrentPage';
import Menu from '../components/Menu';
import About from '../components/About';
import Connect from '../components/Connect';
import Projects from '../components/Projects';

function Profile() {
    return (
        <div className='profile'>
            <div className='profile__up'>
                <div className="profile__info">
                    <div className="profile__infoLeft">
                        <h1 className='profile__name'>Marek Sarnecki</h1>
                        <div className="profile__description">
                            Web Developer
                    </div>
                    </div>

                    <div className="profile__infoRight">
                        <img className='profile__photo' src={avatar} alt='avatar' />
                        <div className="profile__icons">
                            <GitHubIcon />
                            <EmailIcon />
                            <LinkedInIcon />
                        </div>
                    </div>
                </div>

                <CurrentPage />
            </div>

            <div className="profile__down">
                <Projects />
            </div>

        </div>
    )
}

export default Profile
