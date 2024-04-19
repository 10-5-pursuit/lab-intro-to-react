import React from 'react';
import './posts.css';

import Post from './Post';

const Posts = () => {
    return (
        <div className='posts-container'>
            <h1>Posts</h1>
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Posts;