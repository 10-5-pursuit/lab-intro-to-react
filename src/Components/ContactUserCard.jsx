/// ContactUserCard.jsx 
import Profile from '../profile.png'
import './ContactUserCard.scss'

export default function ContactUserCard (){


    return (
       <div className='contacts__contact-div'>
            <img className='contacts__img' src={Profile} alt="user image" />
        <div className='full'>
            <h3 className='contacts__name'>Sadya Andrickson</h3>
            <p className='contacts__role'>React Creator</p>
            <p className='contacts__text'>Lorem Ipsum</p>
        </div>
       </div>
    )
}
