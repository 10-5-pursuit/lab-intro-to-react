import "./contactUserCard.css"

function ContactUserCard(){
    return (
        <div className="card">
            <div className="image">
                <img src="./src/profile.png" alt="profile image" />
            </div>

            <div className="info">
                <div className="name">
                    Jordan Walke
                </div>
                    
                <div className="title">
                    React Creator
                </div>

                <div className="about">
                    Lorem Ipsem
                </div>
            </div>
            
        </div>
        
    )
}

export default ContactUserCard;