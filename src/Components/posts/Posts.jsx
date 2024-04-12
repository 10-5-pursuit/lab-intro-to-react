import Post from "../post/Post";
import React from 'react'
import './posts.css'

export default function Posts()  {
  return (
    <div className="posts">
      <h4 className="postsTitle">Posts</h4>
        <Post />
        <Post />
        <Post />
    </div>
  )
}
