import React from 'react'
import './Menu.css'

function Menu() {
    return (
        <div className="profile__menu">
            <h2>Select Level</h2>
            <nav className='menu__navbar'>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </nav>
            <div className='restart'>Restart</div>
        </div>
    )
}

export default Menu

