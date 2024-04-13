import ContactUserCard from "./contactUserCard/ContactUserCard"
import "./Contacts.css"


function Contacts() {
    return (
        <aside className="contact">
            <h1>Contacts</h1>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </aside>
    )
}

export default Contacts;