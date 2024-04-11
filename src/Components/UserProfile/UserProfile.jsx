import ContactUserCard from "../Contacts/ContactUserCard";
import UserProfileCSS from "./UserProfile.module.css";
import DefaultIcon from "../../../assets/profile.png";

function UserProfile() {
  return (
    <div className={UserProfileCSS["user-div"]}>
      <div className={UserProfileCSS["user-image"]}>
        <img src={DefaultIcon} alt="User" />
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
