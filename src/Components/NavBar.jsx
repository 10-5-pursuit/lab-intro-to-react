/// NavBar.jsx 

import './NavBar.scss'

export default function NavBar (){
    return (
        <div className="nav">
        <button className="nav__about">What is Pursuit?</button>
        <button className="nav__create">Create Account</button>
        <button className="nav__signin">Sign In</button>

        </div>
    )
}