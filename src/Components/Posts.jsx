// Posts.jsx

import React from "react";
import '../styles/posts.css'
import Post from "./Post";


function Posts() {
    return (
      <div className="posts-container">
        <h4 className="post-header">Posts</h4>
      <Post className="post"/>
      <Post className="post"/>
      <Post className="post"/>
      </div>
    );
  }
  
  export default Posts;