
/// Posts.jsx 

import Post from './Post'
import './Posts.scss'

export default function Posts (){
    return (
      <div className='posts'>
        <h3 className='posts__header'>Posts</h3>
        <Post />
        <Post />
        <Post />
      </div>
    )
}
