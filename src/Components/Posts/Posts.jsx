import Post from "./Post";
import PostStyles from "./Post.module.css";

function Posts() {
  return (
    <>
      <div className={PostStyles["post-container"]}>
        <h3>Posts</h3>
        <div className={PostStyles.post}>
          <h3>Title</h3>
          <Post notes="Lorem ipsum dolor sit amet" />
        </div>
        <div className={PostStyles.post}>
          <h3>Title</h3>
          <Post notes="Lorem ipsum dolor sit amet" />
        </div>
        <div className={PostStyles.post}>
          <h3>Title</h3>
          <Post notes="Lorem ipsum dolor sit amet" />
        </div>
      </div>
    </>
  );
}

export default Posts;
