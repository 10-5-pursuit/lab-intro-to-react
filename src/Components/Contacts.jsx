import ContactUserCard from "./ContactUserCard";
import "../Styles/Contacts.css";
function Contacts() {
    return (
      <div className="contacts_container">
        <h1>Contacts</h1>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </div>
    );
  }
  
  export default Contacts;