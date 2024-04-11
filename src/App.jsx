import React from "react";
import NavBar from "./Components/navBar/NavBar";
import UserProfile from "./Components/userProfile/UserProfile";
import Posts from "./Components/posts/Posts";
import Contacts from "./Components/contacts/Contacts";
import "./app.css";

const userData = {
  imgUrl: "./src/profile.png",
  name: "Jordan Walke",
  title: "React Creator",
  bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos et non aperiam possimus asperiores debitis nam distinctio omnis culpa sed quo alias minus rem ut recusandae, optio qui nemo!",
};

function App() {
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
