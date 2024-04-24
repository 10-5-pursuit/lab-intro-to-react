// ContactCard.jsx

import React from "react";
import '../styles/ContactCard.css'

function ContactCard() {
    return (
      <div className="contact-card">
      <img src="./src/profile.png" alt="" />
      <div className="contact-info">
          <h3 className="contact-name">Jordan Walker</h3>
          <h4 className="contact-title">React Creator</h4>
          <p className="contact-description">Lorem Ipsum</p>
      </div>
    </div>
    );
  }
  
  export default ContactCard;

