// import React from "react";
import "./index.css";
import NavBar from "./Components/navBar/NavBar"
import UserProfile from "./Components/userProfile/UserProfile";
import Posts from "./Components/posts/Posts";
import Contacts from "./Components/contacts/Contacts"
import "./app.css"

function App() {

  return (
    <div className="container">

      <div className="nav-bar">
        <NavBar />
      </div>
      
      <main>

        <section className="profile-feed">  
            <UserProfile />
            <Posts />
        </section>

        <section className="contacts">
          <Contacts />
        </section>

      </main>
      
    </div>
  )
}

export default App;
