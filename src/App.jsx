import React from "react";
import "./app.css";
import Navbar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";


function App() {
  return (
    <div className='page-container'>
      <Navbar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  );
}

export default App;
