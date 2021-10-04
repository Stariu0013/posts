import React, {useState, useEffect, useRef} from 'react';

import '../../styles/App.css';
import useFetching from "../../hooks/useFetching";
import {PostsAPI} from "../../API/PostsAPI";
import {getPagesCount} from "../../utils/pages";
import {usePosts} from "../../hooks/useSortedPosts";
import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/MyModal/MyModal";
import PostForm from "../Posts/PostForm/PostForm";
import PostFilter from "../Posts/PostFilter/PostFilter";
import PostList from "../Posts/PostList/PostList";
import Loader from "../UI/Loader/Loader";
import Pagination from "../UI/pagination/Pagination";
import {useObserver} from "../../hooks/useObserver";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const postsData = await PostsAPI.getAll(limit, page);

        setPosts([...posts, ...postsData.data]);

        const totalCount = postsData.headers['x-total-count'];

        setTotalPages(getPagesCount(totalCount, limit));
    });

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    function createPost(newPost) {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    function removePost(post) {
        setPosts([...posts].filter(p => p.id !== post.id));
    }

    function changePage(page) {
        setPage(page);
    }

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page]);

    return <div className="App">
        <MyButton
            style={{marginTop: "30px"}}
            onClick={() => setModal(true)}
        >Создать пост</MyButton>

        <MyModal visible={modal} setVisible={setModal}>
            <PostForm createPost={createPost}/>
        </MyModal>

        <hr style={{margin: "15px 0"}}/>

        <PostFilter filter={filter} setFilter={setFilter}/>

        {
            postError &&
            <h1>Произошла ошибка ${postError}</h1>
        }

        <PostList posts={sortedAndSearchedPosts} removePost={removePost}/>
        <div ref={lastElement}/>

        {isPostsLoading && <div className="loaderBlock">
                <Loader/>
            </div>
        }

        <Pagination
            changePage={changePage}
            page={page}
            totalPages={totalPages}
        />
    </div>
}

export default Posts;
