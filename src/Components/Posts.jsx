import "../CompStyles/posts.css"
import Post from "./Post";
const Posts = () => {
    return (
        <div className="posts">
            <p>Posts</p>
            <div className="each">
            <Post/>
            <Post/>
            <Post/>
            </div>
        </div>



    );


}

export default Posts; 