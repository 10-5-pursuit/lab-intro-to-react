import React from "react";
import "./index.css";
import NavBar from './Components/NavBar.jsx';
import UserProfile from './Components/UserProfile.jsx';
import Posts from './Components/Posts.jsx';
import Contacts from './Components/Contacts.jsx';

function App() {
  return (
    <>
     <NavBar/>
    <section className="container">
      <UserProfile/>
      <Contacts/>
      <Posts/>
    </section>
    </>
)
}

export default App;
