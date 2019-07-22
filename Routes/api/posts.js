const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/posts"
router.route("/")
    .get(postController.findAllPosts)
    .post(postController.create)
    .delete(postController.remove);