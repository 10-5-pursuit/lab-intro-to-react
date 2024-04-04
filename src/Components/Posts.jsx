import React from "react";
import Post from "./Post";

const Posts = () => {
    return (
        <section className="posts">
            <div className="posts-header">
                <h4>Posts</h4>
            </div>
            <Post />
            <Post />
            <Post />
        </section>
    )
}

export default Posts;