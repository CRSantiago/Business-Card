import React from 'react'
import TwitterIcon from '../images/twitter.png'
import GithubIcon from '../images/github.png'
import InstagramIcon from '../images/instagram.png'

export default function Links(){
    return (
        <div className='links'>
            <a href='https://twitter.com/'><img src={TwitterIcon} alt='twitter icon'/></a>
            <a href='https://github.com/CRSantiago'><img src={GithubIcon} alt='github icon' /></a>
            <a href='https://www.instagram.com/'><img src={InstagramIcon} alt='instagram icon' /></a>
        </div>
    )
}