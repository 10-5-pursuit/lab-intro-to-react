import './userProfile.css'
import ContactUserCard from '../contactUserCard/ContactUserCard';

function UserProfile (){
return (
    <div className='profile'>
    <div className="image">
        <img src="./src/profile.png" alt="profile image" />
    </div>

    <div className='profile-info'>
        <div className="name">
            <h2>Jordan Walke</h2>
        </div>
            
        <div className="title">
            <h3>React Creator</h3>
        </div>

        <div className="about">
            <p>Lorem Ipsem</p>
        </div>
    </div>
    
    </div>
)
}

export default UserProfile;