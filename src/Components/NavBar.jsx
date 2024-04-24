import React from "react";
import '../styles/navbar.css'



function Navbar() {
    return (
      <nav>
          <button className="navbar-pursuit">What is Pursuit?</button>
          <button className="navbar-acct">Create an account</button>
          <button className="navbar-signin">Sign in</button>
      </nav>
    );
  }
  
  export default Navbar;