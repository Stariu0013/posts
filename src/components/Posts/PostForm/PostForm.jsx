import React, {useState} from 'react';
import MyInput from "../../UI/input/MuInput";
import MyButton from "../../UI/button/MyButton";

function PostForm({createPost, ...props}) {
    const [post, setPost] = useState({title: '', body: ''});

    function changeTitle(event) {
        setPost({...post, title: event.target.value});
    }

    function changeBody(event) {
        setPost({...post, body: event.target.value});
    }

    function addNewPost(event) {
        event.preventDefault();

        const newPost = {
            ...post,
            id: Date.now(),
        }

        createPost(newPost);

        post.body = '';
        post.title = '';
    }

    return <form>
        <MyInput placeholder="Название поста" value={post.title} onChange={changeTitle}/>
        <MyInput placeholder="Описание поста" value={post.body} onChange={changeBody}/>
        <MyButton onClick={addNewPost}>Добавить пост</MyButton>
    </form>
}

export default PostForm;