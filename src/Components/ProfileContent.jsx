import React from "react";
import proPic from "../profile.png";

const ProfileContent = () => {
    return (
        <>
            <div className="up-pic">
                <img src={proPic} alt="Profile Pic"/>
            </div>
            <div className="up-info">
                <h4 className="up-name">Jordan Walke</h4>
                <h5 className="up-job">React Creator</h5>
                <p className="up-misc">Lorem Ipsem</p>
            </div>
        </>
    )
}

export default ProfileContent;