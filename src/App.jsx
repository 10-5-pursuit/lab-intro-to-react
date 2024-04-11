import React from "react";
import "./Styles/App.css";
import Navbar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <div className="container">
      <Navbar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  )
}

export default App;
