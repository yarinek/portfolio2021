import React from 'react'
import './Profile.css'
import avatar from '../images/avatar.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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

                <div className="profile__currentPage">
                    <h2>Current Level</h2>
                    <p>About</p>
                    <div className='returnToMenu'>
                        <p className='blink'>Return to Menu</p>
                    </div>
                </div>
            </div>

            <div className="profile__down">
                <div className="profile__menu">
                    <h2>Select Level</h2>
                    <nav className='menu__navbar'>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </nav>
                    <div className='restart'>Restart</div>
                </div>
            </div>

        </div>
    )
}

export default Profile
