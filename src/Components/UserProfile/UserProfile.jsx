import ContactUserCard from "../Contacts/ContactUserCard";
import UserProfileCSS from "./UserProfile.module.css";

function UserProfile() {
  return (
    <div className={UserProfileCSS["user-div"]}>
      <div className={UserProfileCSS["user-image"]}>
        <img src="./src/profile.png" alt="User" />
      </div>
      <div className={UserProfileCSS["user-details"]}>
        <h2>Jordan Walke</h2>
        <p>React Creator</p>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}

export default UserProfile;
