import PostCSS from "./Post.module.css";

function Post({ title, notes }) {
  return (
    <div className={PostCSS["div-post"]}>
      <h3 className={PostCSS.title}>{title}</h3>
      <p className={PostCSS.notes}>{notes}</p>
    </div>
  );
}

export default Post;
