import React from 'react'
import EmailIcon from '../images/email.png'
import LinkedInIcon from '../images/linkedin.png'

export default function Info(){
    return (
        <div>
            <div className='info--headings'>
                <h2>Christopher Santiago</h2>
                <h3>Software Developer</h3>
            </div>
            <div className='info--icons'>
            <a href='mailto:chrisantiago217@gmail.com'><img src={EmailIcon} alt="email icon"  className="contact--icon"/></a>
            <a href='https://www.linkedin.com/in/christopher-a-santiago/'> <img src={LinkedInIcon} alt ="linkedin icon" className="contact--icon"/></a>
            </div>
        </div>
    )
}