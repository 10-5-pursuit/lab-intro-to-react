import React from "react";
import "./index.css";
import Navbar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <div className="container">
      <Navbar />
      <UserProfile />
    </div>
  )
}

export default App;
