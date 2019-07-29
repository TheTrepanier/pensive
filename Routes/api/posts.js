const router = require("express").Router();
const postController = require("../../controllers/postController");
const checkJwt = require("../../jwtMiddleware");

router.use(checkJwt);

// Matches with "/api/posts"
router.route("/")
    .get(postController.findAllPosts)
    .post(postController.create);

router.route("/:id")
    .delete(postController.remove);

module.exports = router;