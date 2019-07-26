import axios from "axios";

export default {
    // Get all posts
    getAllPosts: function () {
        return axios.get("/api/posts");
    },
    makePost: function (postData) {
        return axios.post("/api/posts", postData);
    },
    getArticlesByCategory: function (topic) {
        return axios.get("/api/articles/" + topic);
    }
};