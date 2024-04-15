/// UserProfile.jsx 

import Profile from '../profile.png'
import './UserProfile.scss'

export default function UserProfile (){
    return (
        <div className='user'>
            <img className='user__img' src={Profile} alt="user image" />
            <div className='user__all'>
                <h3 className='user__name'>Jordan Walker</h3>
                <p className='user__title'>React Creator</p>
                <p className='user__info'>Lorem Ipsem</p>
            </div>
        </div>
    )
}
