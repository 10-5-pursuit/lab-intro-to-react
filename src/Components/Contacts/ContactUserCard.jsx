import ContactUserCardCSS from "./Contacts.module.css";
import DefaultIcon from "../../../assets/profile.png";
function ContactUserCard({ fullName, job, lorem }) {
  return (
    <div className={ContactUserCardCSS["user-div"]}>
      <div className={ContactUserCardCSS["user-image"]}>
        <img src={DefaultIcon} alt="User" />
      </div>
      <div className={ContactUserCardCSS["user-details"]}>
        <h3>Jordan Walke</h3>
        <p>React Creator</p>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}

export default ContactUserCard;
