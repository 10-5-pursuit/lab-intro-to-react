import React from "react";
import "./index.css";
import "./CompStyles/App.css"
import Navigation from "./Components/NavBar";
import Posts from "./Components/Posts";
// import UserInformation from "./Components/ContactUserCard";
function App() {
  return (
    <div className="platform">
      <Navigation/>
      <Posts/>
      {/* <UserInformation/> */}


    </div>
  )
}

export default App;
