/// Contacts.jsx 

import ContactUserCard from "./ContactUserCard"
import './Contacts.scss'
import './ContactUserCard.scss'

export default function Contacts (){
    return (
        <div className="contacts">
            <h3 className="contacts__header">Contacts</h3>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </div>
    )
}