import React from 'react'
import ContactUserCard from '../contactUserCard/ContactUserCard'
import './contacts.css'


export default function Contacts ()  {
  return (
    <div className='contacts'>
         <h4 className='contactTitle'>Contacts</h4>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
    </div>
  )
}
