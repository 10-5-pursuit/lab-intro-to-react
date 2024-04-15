
import React from "react";
import "./index.css";
import NavBar from './Components/NavBar'
import Contacts from './Components/Contacts'
import UserProfile from './Components/UserProfile'
import Posts from './Components/Posts'


function App() {
  // return (
  //   <div className="app">
  //     <NavBar />
  //     <main className="app__info">
  //     <UserProfile />
  //     <Posts />
  //     <Contacts />
  //   </main>



  //   </div>
  // )
  return (
    <div className="app">
      <NavBar />
      <main>
        <UserProfile />
        <Posts />
      </main>
      <Contacts />
    </div>
  );
}


export default App;
