import React from 'react'
import Image from '../images/IMG_2603.jpeg'

export default function Info(){
    return (
        <div>
            <img src={Image} alt='luffy' className='info--logo' />
            <div className='info--headings'>
                <h2>Christopher Santiago</h2>
                <h3>Software Developer</h3>
            </div>
            <div className='info--buttons'>
                <button className='email--button'><a href='mailto:chrisantiago217@gmail.com'>Email</a></button>
                <button className='linkedin--button'><a href='https://www.linkedin.com/in/christopher-a-santiago/'>LinkedIn</a></button>
            </div>
        </div>
    )
}