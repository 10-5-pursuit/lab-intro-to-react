import "../styles/UserProfile.css";
import ProfilePic from "../profile.png";

function UserProfile(){
    return(
        <div className="profile">
            <h1>Tim Cook</h1>
            <h2>Big Shot CEO</h2>
            <img src={ProfilePic} alt="Profile Picture" />
        </div>
    );
}

export default UserProfile;