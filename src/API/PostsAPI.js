import axios from "axios";

export class PostsAPI {
    static async getAll(limit = 10, page = 1) {
        const postsData = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page,
            }
        });

        return postsData;
    }
    static async getPostById(id) {
        const postData = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        return postData;
    }
    static async getCommentsById(id) {
        const postCommentsData = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

        return postCommentsData;
    }
}