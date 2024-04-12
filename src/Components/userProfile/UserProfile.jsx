import React from 'react'
import profilePic from '../profile.png'
import './userProfile.css'

export default function UserProfile() {
  return (
    <div className='userProfile'>
        <img src= {profilePic} alt="profile-pic" />
        <div className='userInfo'>
            <h3 className='userName'>Jordan Walke</h3>
            <h4 className='userJob'>React Creator</h4>
            <p className='userInfo'>Loram Ipsem</p>
        </div>
    </div>
  )
}
