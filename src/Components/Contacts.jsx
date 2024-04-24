// Contacts.jsx
s
import React from "react";
import ContactCard from "./ContactCard";
import '../styles/contacts.css'


function Contacts() {
    return (
      <div className="contacts-container">
        <h4 className="contacts-header">Contacts</h4>
        <ContactCard className="contact-card"/>
        <ContactCard className="contact-card"/>
        <ContactCard className="contact-card"/>
        <ContactCard className="contact-card"/>
      </div>
    );
  }
  
  export default Contacts;