import React from "react";
import "./index.css";

import NavBar from "./Components/NavBar.jsx";
import UserProfile from './Components/UserProfile.jsx';
import Posts from './Components/Posts.jsx';
import Contacts from './Components/Contacts.jsx';

function App() {
  return (
    <div className="app-container">
      <NavBar className='nav-bar'/>
      <div className="main-section">
        <span className="span">
          <UserProfile className='user-profile'/>
          <Contacts className='contacts'/>
          <Posts className='posts'/>
        </span>
      </div>
    </div>
  )
}

export default App;
