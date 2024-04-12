import React from "react";
import "./index.css";
import UserProfile  from "./Components/userProfile/UserProfile";
import  Posts  from "./Components/posts/Posts";
import  Contacts  from "./Components/contacts/Contacts";
import NavBar from "./Components/navBar/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <div className="userMain">
      <div className="userAndPost">
    <UserProfile />
    <Posts />
    </div>
    <Contacts />
    </div>
    </>
  );
}

export default App;
