import Post from "./Post";
import "../Styles/Posts.css";
function Posts() {
    return (
      <div className="posts_container">
        <h1>Posts</h1>
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
  
  export default Posts;