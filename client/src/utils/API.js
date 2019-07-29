import axios from "axios";

export default {
    // Get all posts
    getAllPosts: function () {
        return axios.get("/api/posts/");
    },
    getPostsByUser: function (userName) {
        // console.log(userName);
        
        return axios.post("/api/posts/user", userName);
    },
    makePost: function (postData) {
        return axios.post("/api/posts", postData);
    },
    getArticlesByCategory: function (topic) {
        return axios.get("/api/articles/" + topic);
    }
};