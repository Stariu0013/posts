import React  from 'react';
import './PostItem.css';
import {useHistory} from 'react-router-dom';

function PostItem({post, removePost, ...props}) {
    const {
        title,
        body,
        id
    } = post;

    const router = useHistory();

    return <div className="post">
        <div className="post__content">
            <strong>{id}. {title}</strong>
            <p>{body}</p>
        </div>
        <div className="post_btns">
            <button onClick={() => router.push(`/posts/${id}`)}>
                Открыть
            </button>
            <button onClick={() => removePost(post)}>
                Удалить
            </button>
        </div>
    </div>
}

export default PostItem;