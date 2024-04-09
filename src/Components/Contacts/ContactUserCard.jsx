import ContactUserCardCSS from "./Contacts.module.css";

function ContactUserCard({ fullName, job, lorem }) {
  return (
    <div className={ContactUserCardCSS["user-div"]}>
      <div className={ContactUserCardCSS["user-image"]}>
        <img src="./src/profile.png" alt="User" />
      </div>
      <div className={ContactUserCardCSS["user-details"]}>
        <h2>Jordan Walke</h2>
        <p>React Creator</p>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}

export default ContactUserCard;
