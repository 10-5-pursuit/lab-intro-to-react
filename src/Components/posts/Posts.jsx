// ./src/Components/posts/Posts.jsx

import "./posts.css";

import Post from "../post/Post";

function Posts() {
  return (
    <div className="posts">
      <h1>Posts</h1>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
