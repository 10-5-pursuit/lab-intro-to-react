import ContactUserCard from "./ContactUserCard";
import ContactsCSS from "./Contacts.module.css";

function Contacts() {
  return (
    <>
      <div className={ContactsCSS["contacts-container"]}>
        <h1>Contacts</h1>
        <div className={ContactsCSS["contacts-card"]}>
          <ContactUserCard
            fullName="Jordan Walke"
            job="React Creator"
            lorem="Lorem ipsum dolor sit amet"
          />
        </div>
        <div className={ContactsCSS["contacts-card"]}>
          <ContactUserCard
            fullName="Jordan Walke"
            job="React Creator"
            lorem="Lorem ipsum dolor sit amet"
          />
        </div>
        <div className={ContactsCSS["contacts-card"]}>
          <ContactUserCard
            fullName="Jordan Walke"
            job="React Creator"
            lorem="Lorem ipsum dolor sit amet"
          />
        </div>
        <div className={ContactsCSS["contacts-card"]}>
          <ContactUserCard
            fullName="Jordan Walke"
            job="React Creator"
            lorem="Lorem ipsum dolor sit amet"
          />
        </div>
      </div>
    </>
  );
}

export default Contacts;
