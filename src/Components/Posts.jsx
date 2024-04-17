import './Posts.css'
import Post from './Post'

const Posts = () => {
  return (
    <div className='posts-parent'>
      <h3>Posts</h3>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts