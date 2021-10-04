import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import useFetching from "../../../hooks/useFetching";
import {PostsAPI} from "../../../API/PostsAPI";
import Loader from "../../UI/Loader/Loader";

function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostsAPI.getPostById(id);
        setPost(response.data);
    });
    const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostsAPI.getCommentsById(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchCommentsById(params.id)
    }, []);

    return <div>
        Вы открыли страницу поста с ID - {params.id}
        {
            isLoading
            ? <Loader />
            : <div>{post.id}. {post.title}</div>
        }
        {
            isCommentsLoading
                ? <Loader />
                : <div>
                    {comments.map(comment => {
                        return <div key={comment.id} style={{marginTop: '15px'}}>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    })}
                </div>
        }
    </div>
}

export default PostIdPage;