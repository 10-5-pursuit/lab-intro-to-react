import React from 'react'
import './app.css'
import NavBar from './Components/NavBar'
import UserProfile from './Components/UserProfile'
import Posts from './Components/Posts'
import Contacts from './Components/Contacts'
import Post from './Components/Post'


const App = () => {
  return (
    <div className='page-container'>
      <NavBar/>
      <UserProfile/>
      <Posts/>
      <Contacts/>
    </div>
    )
}

export default App