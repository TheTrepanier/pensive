const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/posts"
router.route("/")
    .get(postController.findAllPosts)
    .post(postController.create);
    
router.route("/user")
    .post(postController.findPostByUser);
    
router.route("/:id")
    .delete(postController.remove);

module.exports = router;