import React from "react";
import "./index.css";
import "./CompStyles/App.css"
import Navigation from "./Components/NavBar";
import Posts from "./Components/Posts";
import ProfileOfUser from "./Components/UserProfile";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <div>
      <Navigation/>
    <div className="platform">
      <Posts/>
      <ProfileOfUser/>
      <Contacts/>
    </div>
    </div>
  )
}

export default App;
