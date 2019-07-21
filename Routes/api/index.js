const router = require("express").Router();
const postRoutes = require("./posts");

// Post Routes
router.use("/posts", postRoutes);

module.exports = router;