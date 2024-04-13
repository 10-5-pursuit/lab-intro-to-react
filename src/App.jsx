import React from "react";
import NavBar from "./Components/navBar/Navbar";
import Contacts from "./Components/contacts/Contacts";
import Posts from "./Components/posts/Posts";
import UserProfile from "./Components/userProfile/UserProfile";
import "./App.css"




function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <UserProfile />
        <Posts />
      </main>
      <Contacts />
    </div>

  )
}

export default App;


