import React from 'react';
import './contacts.css';
import Contact from './Contact';

const Contacts = () => {
    return (
        <div className='contactsContainer'>
            <h1 id='contacts-H1'>Contacts</h1>
            <div className="collections">
                <Contact />
                <Contact />
                <Contact />
                <Contact />
            </div>
        </div>
    );
};

export default Contacts;