import "./posts.css"
import Post from "../post/Post"

function Posts(){
    return (
        <div className="posts-div">

            <h2>Posts</h2>

            <div className="posts">
            <Post />
            <Post />
            <Post />
            </div>

        </div>
    )
}

export default Posts;