import React from "react";
import ContactCard from "./ContactCard.jsx"
import '../styles/userprofile.css'

export default function UserProfile() {
    return(
        <div className="profile-container">
            <ContactCard className="profile-card"/>
        </div>
    )
}