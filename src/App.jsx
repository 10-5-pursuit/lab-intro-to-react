import './app.css';
import React from 'react';
import NavBar from '/src/Components/navBar/NavBar.jsx';
import UserProfile from '/src/Components/userProfile/UserProfile.jsx';
import Posts from '/src/Components/posts/Posts.jsx';
import Contacts from '/src/Components/contacts/Contacts.jsx';

const userData = {
  imgUrl: './src/profile.png',
  name: 'Jordan Walke',
  title: 'React Creator',
  bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos et non aperiam possimus asperiores debitis nam distinctio omnis culpa sed quo alias minus rem ut recusandae, optio qui nemo!'
};

function App() {
  return (
    <div className="app">
      <div className="userProfile">
        <UserProfile />
      </div>
      <div className="posts">
        <Posts />
      </div>
      <div className="contacts">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
