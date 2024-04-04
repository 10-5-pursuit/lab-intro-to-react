import React from "react";
import ContactCard from "./ContactUserCard";

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="contacts-header">
                <h4>Contacts</h4>
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
            </div>
        </section>
    )
}

export default Contacts;