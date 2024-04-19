import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className='contact-container'>
            <img src='./src/profile.png' alt="photo" width={150}/>
            <span className='descript'>
                <h1>Jordan Walke</h1>
                <h3>React Creator</h3>
                <p>Lorem Ipsum</p>
            </span>
        </div>
    );
};

export default Contact;