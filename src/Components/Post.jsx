function Post({ title, notes }) {
  return (
    <>
      <h3 className="title">{title}</h3>
      <p className="notes">{notes}</p>
    </>
  );
}

export default Post;
