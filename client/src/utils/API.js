import axios from "axios";
import auth0Client from "../Auth/Auth";

export default {
  // Get all posts
  getAllPosts: function() {
    return axios.get("/api/posts", {
      headers: {
        Authorization: `Bearer ${auth0Client.getIdToken()}`
      }
    });
  },
  getPostsByUser: function(userName) {
    // console.log(userName);

    return axios.post("/api/posts/user", userName, {
      headers: {
        Authorization: `Bearer ${auth0Client.getIdToken()}`
      }
    });
  },
  makePost: function(postData) {
    return axios.post("/api/posts", postData, {
      headers: {
        Authorization: `Bearer ${auth0Client.getIdToken()}`
      }
    });
  },
  getArticlesByCategory: function(topic) {
    return axios.get("/api/articles/" + topic);
  }
};
