import React from 'react';
import PostItem from "../PostItem/PostItem";

function PostList(props) {
    const { posts, removePost } = props;

    if(!posts.length) {
        return (
            <h2 style={{textAlign: "center"}}>Посты не найдены!</h2>
        )
    }

    return <div>
        {posts.map((post, index) => {
            return <PostItem number={index + 1} post={post} key={post.id} removePost={removePost}/>
        })}
    </div>
}

export default PostList;