import "./contacts.css"
import ContactUserCard from "../contactUserCard/ContactUserCard";

function Contacts (){
    return (
        <div className="contact-div">

        <h2>Contacts</h2>

        <div className="cards">
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </div>
        
        </div>
        
    )
}

export default Contacts;