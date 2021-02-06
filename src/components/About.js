import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about'>
            <div className="about__left">
                <div className="about__playerInfo">
                    <h2>Player Info</h2>
                    <p><strong>Name:</strong> Marek Sarnecki</p>
                    <p><strong>Location:</strong> Lublin, Poland</p>
                    <p><strong>Occupation:</strong> Web Developer</p>
                </div>
                <div className="about__playerDescription">
                    <p>
                        My name is Marek and I am a Web Developer.
                        I am so motivated to build progressive web applications.
                        Currently i am unemployed and looking for challenges.
                        I know basics in JavaScript, React, Python, HTML and CSS.
                    </p>
                </div>
            </div>
            <div className="about__right">
                <div className="about__playerBrief">
                    <h2>Player Brief</h2>
                    <ul>
                        <li>Embraces challenges.</li>
                        <li>Solutions driven.</li>
                        <li>Self-motivated.</li>
                        <li>Excellent team player.</li>
                        <li>Great communication skills.</li>
                    </ul>
                </div>
                <div className="about__powerUps">
                    <h3><strong className='violet'>Power Ups:</strong> Tea, Gym, Reading</h3>
                </div>
                <div className="about__skills">
                    <h3><strong className='violet'>Skills:</strong> Coding, Chess</h3>
                </div>
            </div>
        </div>
    )
}

export default About
