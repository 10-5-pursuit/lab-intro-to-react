// ./src/Components/contacts/Contacts.jsx
import "./contacts.css";

import ContactUserCard from "../contactUserCard/ContactUserCard";

function Contacts() {
  return (
    <aside className="contacts">
      <h1>Contacts</h1>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </aside>
  );
}

export default Contacts;
