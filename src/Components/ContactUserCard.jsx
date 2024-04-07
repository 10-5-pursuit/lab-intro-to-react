import ProfilePic from "../profile.png"
import "../styles/ContactUserCard.css"

function ContactUserCard(){
    return (
        <div className="card">
            <img src={ProfilePic} alt="profile picture" />
            <h2>John Smith</h2>
            <h3>Professional</h3>
            <p>Lorem Ipsem</p>
        </div>
    );
}

export default ContactUserCard;
