import Post from "./Post";

function Posts() {
  return (
    <>
      <div>
        <h3>Posts</h3>
      </div>
      <div>
        <h3>Title</h3>
        <Post notes="Lorem ipsum dolor sit amet" />
      </div>
      <div>
        <h3>Title</h3>
        <Post notes="Lorem ipsum dolor sit amet" />
      </div>
      <div>
        <h3>Title</h3>
        <Post notes="Lorem ipsum dolor sit amet" />
      </div>
    </>
  );
}

export default Posts;
