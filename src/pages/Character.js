import React from 'react'
import avatar from '../images/avatar.png'
import './Character.css'

function Character() {
    return (
        <div className='character'>
            <p className='character__text'>Player Select</p>
            <div className="character__choose">
                <img src={avatar} alt='avatar' />
                <h3 className="character__name">Marek Sarnecki</h3>
            </div>
            <div className='restart'>Restart</div>
        </div>
    )
}

export default Character
