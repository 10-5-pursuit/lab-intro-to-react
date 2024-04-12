import React from 'react';
import profilePic from '../profile.png'
import './contactUserCard.css'

export default function ContactUserCard () {
  return (
    <div className='contactUserCard'>
        <img src={profilePic} alt="profile-contact" id='profileContact'/>
        <div className='contactCardInfo'>
        <h3 className='contactCardName'>Jordan Walke</h3>
        <h5 className='contactCardJob'>React Creator</h5>
        <p className='contactCardInfo'>Lorem Ipsem</p>
        </div>
    </div>
  )
}
