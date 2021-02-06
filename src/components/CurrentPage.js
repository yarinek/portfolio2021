import React from 'react'
import './CurrentPage.css'

function CurrentPage() {
    return (
        <div className="profile__currentPage">
            <h2>Current Level</h2>
            <p>About</p>
            <div className='returnToMenu'>
                <p className='blink'>Return to Menu</p>
            </div>
        </div>
    )
}

export default CurrentPage
